import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import { useUser } from '@/features/account/hooks/useUser'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import React from 'react'
import { Bubble } from '@typebot.io/react'
import { planToReadable } from '@/features/billing/helpers/planToReadable'
import { BubbleProps } from '@typebot.io/js'

export const SupportBubble = (props: Omit<BubbleProps, 'typebot'>) => {
  const { typebot } = useTypebot()
  const { user } = useUser()
  const { workspace } = useWorkspace()

  return (
    <Bubble
      apiHost="https://chat.hackleads.com.br"
      typebot="hacklead-support"
      prefilledVariables={{
        'User ID': user?.id,
        'First name': user?.name?.split(' ')[0] ?? undefined,
        "Email": user?.email,
        'Typebot ID': typebot?.id,
        'Avatar URL': user?.image ?? undefined,
        Plan: planToReadable(workspace?.plan),
      }}
      theme={{
        chatWindow: {
          backgroundColor: '#fff',
        },
      }}
      {...props}
    />
  )
}
