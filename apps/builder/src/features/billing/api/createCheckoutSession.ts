import prisma from '@/lib/prisma'
import { authenticatedProcedure } from '@/helpers/server/trpc'
import { TRPCError } from '@trpc/server'
import { Partner, Plan, WorkspaceRole } from '@typebot.io/prisma'
import Stripe from 'stripe'
import { z } from 'zod'
import { parseSubscriptionItems } from '../helpers/parseSubscriptionItems'

export const createCheckoutSession = authenticatedProcedure
  .meta({
    openapi: {
      method: 'POST',
      path: '/billing/subscription/checkout',
      protect: true,
      summary: 'Create checkout session to create a new subscription',
      tags: ['Billing'],
    },
  })
  .input(
    z.object({
      email: z.string(),
      company: z.string(),
      workspaceId: z.string(),
      currency: z.enum(['brl']),
      plan: z.enum([Plan.STARTER, Plan.PRO]),
      returnUrl: z.string(),
      additionalChats: z.number(),
      additionalStorage: z.number(),
      vat: z
        .object({
          type: z.string(),
          value: z.string(),
        })
        .optional(),
      isYearly: z.boolean(),
    })
  )
  .output(
    z.object({
      checkoutUrl: z.string(),
    })
  )
  .mutation(
    async ({
      input: {
        vat,
        email,
        company,
        workspaceId,
        currency,
        plan,
        returnUrl,
        additionalChats,
        additionalStorage,
        isYearly,
      },
      ctx: { user },
    }) => {
      if (!process.env.STRIPE_SECRET_KEY)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Stripe environment variables are missing',
        })
      const workspace = await prisma.workspace.findFirst({
        where: {
          id: workspaceId,
          members: { some: { userId: user.id, role: WorkspaceRole.ADMIN } },
        },
      })
      if (!workspace)
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Workspace not found',
        })
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2022-11-15',
      })

      const userUpdated = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          company,
        },
        include: {
          partner: true,
        },
      })

      const customer = await stripe.customers.create({
        email,
        name: company,
        metadata: { workspaceId },
      })

      const checkoutUrl = await createCheckoutSessionUrl(stripe)({
        customerId: customer.id,
        userId: user.id,
        workspaceId,
        currency,
        plan,
        returnUrl,
        additionalChats,
        additionalStorage,
        isYearly,
        partner: userUpdated.partner,
      })

      if (!checkoutUrl)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Stripe checkout session creation failed',
        })

      return {
        checkoutUrl,
      }
    }
  )

type Props = {
  customerId: string
  workspaceId: string
  currency: 'brl'
  plan: 'STARTER' | 'PRO'
  returnUrl: string
  additionalChats: number
  additionalStorage: number
  isYearly: boolean
  userId: string
  partner: Partner | null
}

export const createCheckoutSessionUrl =
  (stripe: Stripe) =>
  async ({
    customerId,
    workspaceId,
    currency,
    plan,
    returnUrl,
    additionalChats,
    additionalStorage,
    isYearly,
    partner,
  }: Props) => {
    let partnerData: any
    if (partner) {
      const promotionCode = await stripe.promotionCodes.list({
        code: partner.partnerCode,
        limit: 1,
      })
      partnerData = {
        discounts: [{ promotion_code: promotionCode.data[0].id }],
        subscription_data: {
          transfer_data: {
            destination: partner.stripeId,
            amount_percent: partner.percentFee,
          },
        },
      }
    } else {
      partnerData = { allow_promotion_codes: true }
    }

    const session = await stripe.checkout.sessions.create({
      success_url: `${returnUrl}?stripe=${plan}&success=true`,
      cancel_url: `${returnUrl}?stripe=cancel`,
      customer: customerId,
      customer_update: {
        address: 'auto',
        name: 'never',
      },
      ...partnerData,
      mode: 'subscription',
      metadata: {
        workspaceId,
        plan,
        additionalChats,
        additionalStorage,
      },
      currency,
      billing_address_collection: 'required',
      line_items: parseSubscriptionItems(
        plan,
        additionalChats,
        additionalStorage,
        isYearly
      ),
    })

    return session.url
  }
