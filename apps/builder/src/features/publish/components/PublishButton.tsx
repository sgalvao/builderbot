import {
  Button,
  HStack,
  IconButton,
  Stack,
  Tooltip,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  ButtonProps,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  ChevronLeftIcon,
  CloudOffIcon,
  LockedIcon,
  UnlockedIcon,
} from '@/components/icons'
import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import { InputBlockType } from '@typebot.io/schemas'
import { useRouter } from 'next/router'
import { isNotDefined } from '@typebot.io/lib'
import { ChangePlanModal } from '@/features/billing/components/ChangePlanModal'
import { isFreePlan } from '@/features/billing/helpers/isFreePlan'
import { parseTimeSince } from '@/helpers/parseTimeSince'
import { useI18n } from '@/locales'
import { trpc } from '@/lib/trpc'
import { useToast } from '@/hooks/useToast'
import { parseDefaultPublicId } from '../helpers/parseDefaultPublicId'

type Props = ButtonProps & {
  isMoreMenuDisabled?: boolean
}
export const PublishButton = ({
  isMoreMenuDisabled = false,
  ...props
}: Props) => {
  const t = useI18n()
  const warningTextColor = useColorModeValue('red.300', 'red.600')
  const { workspace } = useWorkspace()
  const { push, query, pathname } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isPublished,
    publishedTypebot,
    restorePublishedTypebot,
    typebot,
    isSavingLoading,
    updateTypebot,
    save,
  } = useTypebot()
  const { showToast } = useToast()

  const {
    typebot: {
      getPublishedTypebot: { refetch: refetchPublishedTypebot },
    },
  } = trpc.useContext()

  const { mutate: publishTypebotMutate, isLoading: isPublishing } =
    trpc.typebot.publishTypebot.useMutation({
      onError: (error) =>
        showToast({
          title: 'Error while publishing typebot',
          description: error.message,
        }),
      onSuccess: () => {
        refetchPublishedTypebot({
          typebotId: typebot?.id as string,
        })
        if (!publishedTypebot && !pathname.endsWith('share'))
          push(`/typebots/${query.typebotId}/share`)
      },
    })

  const { mutate: unpublishTypebotMutate, isLoading: isUnpublishing } =
    trpc.typebot.unpublishTypebot.useMutation({
      onError: (error) =>
        showToast({
          title: 'Error while unpublishing typebot',
          description: error.message,
        }),
      onSuccess: () => {
        refetchPublishedTypebot()
      },
    })

  const hasInputFile = typebot?.groups
    .flatMap((g) => g.blocks)
    .some((b) => b.type === InputBlockType.FILE)

  const handlePublishClick = async () => {
    if (!typebot?.id) return
    if (isFreePlan(workspace) && hasInputFile) return onOpen()
    publishTypebot()
    if (!publishedTypebot) push(`/hackleads/${query.typebotId}/share`)
    if (!typebot.publicId) {
      await updateTypebot({
        updates: {
          publicId: parseDefaultPublicId(typebot.name, typebot.id),
        },
        save: true,
      })
    } else await save()
    publishTypebotMutate({
      typebotId: typebot.id,
    })
  }

  const unpublishTypebot = async () => {
    if (!typebot?.id) return
    if (typebot.isClosed)
      await updateTypebot({ updates: { isClosed: false }, save: true })
    unpublishTypebotMutate({
      typebotId: typebot?.id,
    })
  }

  const closeTypebot = async () => {
    await updateTypebot({ updates: { isClosed: true }, save: true })
  }

  const openTypebot = async () => {
    await updateTypebot({ updates: { isClosed: false }, save: true })
  }

  return (
    <HStack spacing="1px">
      <ChangePlanModal
        isOpen={isOpen}
        onClose={onClose}
        type={t('billing.limitMessage.fileInput')}
      />
      <Tooltip
        placement="bottom-end"
        label={
          <Stack>
            {!publishedTypebot?.version ? (
              <Text color={warningTextColor} fontWeight="semibold">
                This will deploy your bot with an updated engine. Make sure to
                test it properly in preview mode before publishing.
              </Text>
            ) : (
              <Text>There are non published changes.</Text>
            )}
            <Text fontStyle="italic">
              Published version from{' '}
              {publishedTypebot &&
                parseTimeSince(publishedTypebot.updatedAt.toString())}{' '}
              ago
            </Text>
          </Stack>
        }
        isDisabled={isNotDefined(publishedTypebot) || isPublished}
      >
        <Button
          colorScheme="blue"
          isLoading={isPublishing || isUnpublishing}
          isDisabled={isPublished || isSavingLoading}
          onClick={handlePublishClick}
          borderRightRadius={
            publishedTypebot && !isMoreMenuDisabled ? 0 : undefined
          }
          {...props}
        >
          {isPublished
            ? typebot?.isClosed
              ? 'Fechado'
              : 'Publicado'
            : 'Publicar'}
        </Button>
      </Tooltip>

      {!isMoreMenuDisabled && publishedTypebot && (
        <Menu>
          <MenuButton
            as={IconButton}
            colorScheme={'blue'}
            borderLeftRadius={0}
            icon={<ChevronLeftIcon transform="rotate(-90deg)" />}
            aria-label="Show published typebot menu"
            size="sm"
            isDisabled={isPublishing || isSavingLoading}
          />
          <MenuList>
            {!isPublished && (
              <MenuItem onClick={restorePublishedTypebot}>
                Restaurar versão publicada
              </MenuItem>
            )}
            {!typebot?.isClosed ? (
              <MenuItem onClick={closeTypebot} icon={<LockedIcon />}>
                Encerrar bot para não receber novas respostas
              </MenuItem>
            ) : (
              <MenuItem onClick={openTypebot} icon={<UnlockedIcon />}>
                Reabrir bot para novas respostas
              </MenuItem>
            )}
            <MenuItem onClick={unpublishTypebot} icon={<CloudOffIcon />}>
              Remover Publicação
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </HStack>
  )
}
