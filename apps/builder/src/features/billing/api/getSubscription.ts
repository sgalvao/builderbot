import prisma from '@/lib/prisma'
import { authenticatedProcedure } from '@/helpers/server/trpc'
import { TRPCError } from '@trpc/server'
import Stripe from 'stripe'
import { z } from 'zod'
import { subscriptionSchema } from '@typebot.io/schemas/features/billing/subscription'
import { isReadWorkspaceFobidden } from '@/features/workspace/helpers/isReadWorkspaceFobidden'
import { priceIds } from '@typebot.io/lib/api/pricing'
import { env } from '@typebot.io/env'

export const getSubscription = authenticatedProcedure
  .meta({
    openapi: {
      method: 'GET',
      path: '/billing/subscription',
      protect: true,
      summary: 'List invoices',
      tags: ['Billing'],
    },
  })
  .input(
    z.object({
      workspaceId: z.string(),
    })
  )
  .output(
    z.object({
      subscription: subscriptionSchema.or(z.null()),
    })
  )
  .query(async ({ input: { workspaceId }, ctx: { user } }) => {
    if (!env.STRIPE_SECRET_KEY)
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Stripe environment variables are missing',
      })
    const workspace = await prisma.workspace.findFirst({
      where: {
        id: workspaceId,
      },
      select: {
        stripeId: true,
        members: {
          select: {
            userId: true,
          },
        },
      },
    })
    if (!workspace || isReadWorkspaceFobidden(workspace, user))
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Workspace not found',
      })
    if (!workspace?.stripeId)
      return {
        subscription: null,
      }
    const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
      apiVersion: '2022-11-15',
    })
    const subscriptions = await stripe.subscriptions.list({
      customer: workspace.stripeId,
    })

    const currentSubscription = subscriptions.data
      .filter((sub) => ['past_due', 'active'].includes(sub.status))
      .sort((a, b) => a.created - b.created)
      .shift()

    if (!currentSubscription)
      return {
        subscription: null,
      }

    return {
      subscription: {
        status: subscriptionSchema.shape.status.parse(
          currentSubscription.status
        ),
        isYearly: currentSubscription.items.data.some((item) => {
          return (
            priceIds.STARTER.chats.yearly === item.price.id ||
            priceIds.STARTER.storage.yearly === item.price.id ||
            priceIds.PRO.chats.yearly === item.price.id ||
            priceIds.PRO.storage.yearly === item.price.id
          )
        }),
        currency: currentSubscription.currency as 'brl',
        cancelDate: currentSubscription.cancel_at
          ? new Date(currentSubscription.cancel_at * 1000)
          : undefined,
      },
    }
  })

export const chatPriceIds = [priceIds.STARTER.chats.monthly]
  .concat(priceIds.STARTER.chats.yearly)
  .concat(priceIds.PRO.chats.monthly)
  .concat(priceIds.PRO.chats.yearly)

export const storagePriceIds = [priceIds.STARTER.storage.monthly]
  .concat(priceIds.STARTER.storage.yearly)
  .concat(priceIds.PRO.storage.monthly)
  .concat(priceIds.PRO.storage.yearly)
