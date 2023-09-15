import { CloseIcon } from '@/components/icons'
import { Seo } from '@/components/Seo'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import { useToast } from '@/hooks/useToast'
import { isCloudProdInstance } from '@/helpers/isCloudProdInstance'
import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Wrap,
  Text,
  Card,
  CardBody,
} from '@chakra-ui/react'
import { Plan } from '@typebot.io/prisma'
import { getViewerUrl, isDefined, isNotDefined } from '@typebot.io/lib'
import { isPublicDomainAvailableQuery } from '../queries/isPublicDomainAvailableQuery'
import { EditableUrl } from './EditableUrl'
import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import { LockTag } from '@/features/billing/components/LockTag'
import { UpgradeButton } from '@/features/billing/components/UpgradeButton'
import { isProPlan } from '@/features/billing/helpers/isProPlan'
import { CustomDomainsDropdown } from '@/features/customDomains/components/CustomDomainsDropdown'
import { TypebotHeader } from '@/features/editor/components/TypebotHeader'
import { parseDefaultPublicId } from '../helpers/parseDefaultPublicId'
import { useI18n } from '@/locales'
import { env } from '@typebot.io/env'

export const SharePage = () => {
  const t = useI18n()
  const { workspace } = useWorkspace()
  const { typebot, updateTypebot, publishedTypebot } = useTypebot()
  const { showToast } = useToast()

  const handlePublicIdChange = async (publicId: string) => {
    updateTypebot({ updates: { publicId }, save: true })
  }

  const publicId = typebot
    ? typebot?.publicId ?? parseDefaultPublicId(typebot.name, typebot.id)
    : ''
  const isPublished = isDefined(publishedTypebot)

  const handlePathnameChange = (pathname: string) => {
    if (!typebot?.customDomain) return
    const existingHost = typebot.customDomain?.split('/')[0]
    const newDomain =
      pathname === '' ? existingHost : existingHost + '/' + pathname
    handleCustomDomainChange(newDomain)
  }

  const handleCustomDomainChange = (customDomain: string | null) =>
    updateTypebot({ updates: { customDomain }, save: true })

  const checkIfPathnameIsValid = (pathname: string) => {
    const isCorrectlyFormatted =
      /^([a-z0-9]+-[a-z0-9]*)*$/.test(pathname) || /^[a-z0-9]*$/.test(pathname)

    if (!isCorrectlyFormatted) {
      showToast({
        description:
          'Deve conter apenas letras ou números. As palavras devem ser separadas por traços "-".',
      })
      return false
    }
    return true
  }

  const checkIfPublicIdIsValid = async (publicId: string) => {
    const isLongerThanAllowed = publicId.length >= 4
    if (!isLongerThanAllowed) {
      showToast({
        description: 'Precisa ter no mínimo 4 caracteres',
      })
      return false
    }

    if (!checkIfPathnameIsValid(publicId)) return false

    const { data } = await isPublicDomainAvailableQuery(publicId)
    if (!data?.isAvailable) {
      showToast({ description: 'ID já foi utilizado' })
      return false
    }

    return true
  }

  return (
    <Flex flexDir="column" pb="40">
      <Seo title={typebot?.name ? `${typebot.name} | Share` : 'Share'} />
      <TypebotHeader />
      <Flex h="full" w="full" justifyContent="center" align="flex-start">
        <Stack maxW="1000px" w="full" pt="10" spacing={10}>
          <Stack spacing={4} align="flex-start">
            <Heading fontSize="2xl" as="h1">
              Compartilhe seu HackLead
            </Heading>
            {typebot && (
              <EditableUrl
                hostname={getViewerUrl() ?? 'https://chat.hackleads.com.br'}
                pathname={publicId}
                isValid={checkIfPublicIdIsValid}
                onPathnameChange={handlePublicIdChange}
              />
            )}
            {typebot?.customDomain && (
              <HStack>
                <EditableUrl
                  hostname={'https://' + typebot.customDomain.split('/')[0]}
                  pathname={typebot.customDomain.split('/')[1]}
                  isValid={checkIfPathnameIsValid}
                  onPathnameChange={handlePathnameChange}
                />
                <IconButton
                  icon={<CloseIcon />}
                  aria-label="Remove custom URL"
                  size="xs"
                  onClick={() => handleCustomDomainChange(null)}
                />
              </HStack>
            )}
            {isNotDefined(typebot?.customDomain) &&
            env.NEXT_PUBLIC_VERCEL_VIEWER_PROJECT_NAME ? (
              <>
                {isProPlan(workspace) ? (
                  <CustomDomainsDropdown
                    onCustomDomainSelect={handleCustomDomainChange}
                  />
                ) : (
                  <UpgradeButton
                    colorScheme="gray"
                    limitReachedType={t('billing.limitMessage.customDomain')}
                  >
                    <Text mr="2">Adicionar meu domínio</Text>{' '}
                    <LockTag plan={Plan.PRO} />
                  </UpgradeButton>
                )}
              </>
            ) : null}
          </Stack>

          <Stack spacing={4}>
            <Heading fontSize="2xl" as="h1">
              Integre seu HackLead
            </Heading>
            <Wrap spacing={7}>
              {/* {integrationsList.map((IntegrationButton, idx) => (
                <IntegrationButton
                  key={idx}
                  publicId={publicId}
                  isPublished={isPublished}
                />
              ))} */}
              <Card>
                <CardBody>
                  <Text>
                    Estamos finalizando novas atualizações, em breve as
                    integrações estarão disponíveis novamente. Pedimos desculpas
                    pelo ocorrido. 🥲
                  </Text>
                </CardBody>
              </Card>
            </Wrap>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  )
}
