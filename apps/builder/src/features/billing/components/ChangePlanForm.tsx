import { Stack, HStack, Text, Switch, Tag } from '@chakra-ui/react'
import { Plan } from '@typebot.io/prisma'
import { useToast } from '@/hooks/useToast'
import { trpc } from '@/lib/trpc'
import { Workspace } from '@typebot.io/schemas'
import { PreCheckoutModal, PreCheckoutModalProps } from './PreCheckoutModal'
import { useState } from 'react'
import { ParentModalProvider } from '@/features/graph/providers/ParentModalProvider'
import { useUser } from '@/features/account/hooks/useUser'
import { StarterPlanPricingCard } from './StarterPlanPricingCard'
import { ProPlanPricingCard } from './ProPlanPricingCard'
import { useScopedI18n } from '@/locales'

type Props = {
  workspace: Workspace
  onUpgradeSuccess: () => void
}

export const ChangePlanForm = ({ workspace, onUpgradeSuccess }: Props) => {
  const scopedT = useScopedI18n('billing')

  const { user } = useUser()
  const { showToast } = useToast()
  const [preCheckoutPlan, setPreCheckoutPlan] =
    useState<PreCheckoutModalProps['selectedSubscription']>()
  const [isYearly, setIsYearly] = useState(true)

  const { data } = trpc.billing.getSubscription.useQuery(
    {
      workspaceId: workspace.id,
    },
    {
      onSuccess: ({ subscription }) => {
        if (isYearly === false) return
        setIsYearly(subscription?.isYearly ?? true)
      },
    }
  )

  const { mutate: updateSubscription, isLoading: isUpdatingSubscription } =
    trpc.billing.updateSubscription.useMutation({
      onError: (error) => {
        showToast({
          description: error.message,
        })
      },
      onSuccess: ({ workspace, checkoutUrl }) => {
        if (checkoutUrl) {
          window.location.href = checkoutUrl
          return
        }
        onUpgradeSuccess()
        showToast({
          status: 'success',
          description: scopedT('updateSuccessToast.description', {
            plan: workspace?.plan,
          }),
        })
      },
    })

  const handlePayClick = async ({
    plan,
    selectedChatsLimitIndex,
    selectedStorageLimitIndex,
  }: {
    plan: 'STARTER' | 'PRO'
    selectedChatsLimitIndex: number
    selectedStorageLimitIndex: number
  }) => {
    if (
      !user ||
      selectedChatsLimitIndex === undefined ||
      selectedStorageLimitIndex === undefined
    )
      return

    const newSubscription = {
      plan,
      workspaceId: workspace.id,
      additionalChats: selectedChatsLimitIndex,
      additionalStorage: selectedStorageLimitIndex,
      currency: 'brl',
      isYearly,
    } as const
    if (workspace.stripeId) {
      updateSubscription({
        ...newSubscription,
        returnUrl: window.location.href,
      })
    } else {
      setPreCheckoutPlan(newSubscription)
    }
  }

  if (data?.subscription?.cancelDate) return null

  return (
    <Stack spacing={6}>
      {!workspace.stripeId && (
        <ParentModalProvider>
          <PreCheckoutModal
            selectedSubscription={preCheckoutPlan}
            existingEmail={user?.email ?? undefined}
            existingCompany={user?.company ?? undefined}
            onClose={() => setPreCheckoutPlan(undefined)}
          />
        </ParentModalProvider>
      )}
      {data && (
        <Stack align="flex-end" spacing={6}>
          <HStack>
            <Text>Monthly</Text>
            <Switch
              isChecked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <HStack>
              <Text>Yearly</Text>
              <Tag colorScheme="blue">16% off</Tag>
            </HStack>
          </HStack>
          <HStack alignItems="stretch" spacing="4" w="full">
            <StarterPlanPricingCard
              workspace={workspace}
              currentSubscription={{ isYearly: data.subscription?.isYearly }}
              onPayClick={(props) =>
                handlePayClick({ ...props, plan: Plan.STARTER })
              }
              isYearly={isYearly}
              isLoading={isUpdatingSubscription}
              currency={data.subscription?.currency}
            />

            <ProPlanPricingCard
              workspace={workspace}
              currentSubscription={{ isYearly: data.subscription?.isYearly }}
              onPayClick={(props) =>
                handlePayClick({ ...props, plan: Plan.PRO })
              }
              isYearly={isYearly}
              isLoading={isUpdatingSubscription}
              currency={data.subscription?.currency}
            />
          </HStack>
        </Stack>
      )}
    </Stack>
  )
}
