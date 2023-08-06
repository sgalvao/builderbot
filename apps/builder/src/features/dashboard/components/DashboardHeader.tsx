import React, { useState } from 'react'
import { HStack, Flex, Button, useDisclosure } from '@chakra-ui/react'
import { HardDriveIcon, SettingsIcon } from '@/components/icons'
import { signOut } from 'next-auth/react'
import { useUser } from '@/features/account/hooks/useUser'
import { isNotDefined } from '@typebot.io/lib'
import Link from 'next/link'
import { EmojiOrImageIcon } from '@/components/EmojiOrImageIcon'
import { useScopedI18n } from '@/locales'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import { WorkspaceDropdown } from '@/features/workspace/components/WorkspaceDropdown'
import { WorkspaceSettingsModal } from '@/features/workspace/components/WorkspaceSettingsModal'
import { Plan } from '@typebot.io/prisma'
import { ChangePlanModal } from '@/features/billing/components/ChangePlanModal'

export const DashboardHeader = () => {
  const scopedT = useScopedI18n('dashboard.header')
  const { user } = useUser()
  const { workspace, switchWorkspace, createWorkspace } = useWorkspace()
  const [billingModalOpen, setBillingModalOpen] = useState(false)

  const handleOpen = () => {
    setBillingModalOpen(true)
  }

  const handleClose = () => {
    setBillingModalOpen(false)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleLogOut = () => {
    signOut()
  }

  const handleCreateNewWorkspace = () =>
    createWorkspace(user?.name ?? undefined)

  return (
    <Flex w="full" borderBottomWidth="1px" justify="center">
      <Flex
        justify="space-between"
        alignItems="center"
        h="16"
        maxW="1000px"
        flex="1"
      >
        <Link href="/hackleads" data-testid="typebot-logo">
          <EmojiOrImageIcon
            boxSize="30px"
            icon={workspace?.icon}
            defaultIcon={HardDriveIcon}
          />
        </Link>
        <HStack>
          {user && workspace && (
            <WorkspaceSettingsModal
              isOpen={isOpen}
              onClose={onClose}
              user={user}
              workspace={workspace}
            />
          )}

          <Button
            leftIcon={<SettingsIcon />}
            onClick={onOpen}
            isLoading={isNotDefined(workspace)}
          >
            {scopedT('settingsButton.label')}
          </Button>
          {workspace?.plan === Plan.FREE && (
            <Button
              colorScheme="orange"
              border={'1px'}
              onClick={handleOpen}
              isLoading={isNotDefined(workspace)}
            >
              Planos
            </Button>
          )}
          <ChangePlanModal isOpen={billingModalOpen} onClose={handleClose} />
          <WorkspaceDropdown
            currentWorkspace={workspace}
            onLogoutClick={handleLogOut}
            onCreateNewWorkspaceClick={handleCreateNewWorkspace}
            onWorkspaceSelected={switchWorkspace}
          />
        </HStack>
      </Flex>
    </Flex>
  )
}
