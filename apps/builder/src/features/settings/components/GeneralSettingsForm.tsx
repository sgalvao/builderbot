import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Switch,
  Tag,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import { Plan } from '@typebot.io/prisma'
import { GeneralSettings, rememberUserStorages } from '@typebot.io/schemas'
import React from 'react'
import { isDefined } from '@typebot.io/lib'
import { SwitchWithLabel } from '@/components/inputs/SwitchWithLabel'
import { SwitchWithRelatedSettings } from '@/components/SwitchWithRelatedSettings'
import { DropdownList } from '@/components/DropdownList'
import { MoreInfoTooltip } from '@/components/MoreInfoTooltip'
import { ChangePlanModal } from '@/features/billing/components/ChangePlanModal'
import { LockTag } from '@/features/billing/components/LockTag'
import { isFreePlan } from '@/features/billing/helpers/isFreePlan'
import { useI18n } from '@/locales'

type Props = {
  generalSettings: GeneralSettings
  onGeneralSettingsChange: (generalSettings: GeneralSettings) => void
}

export const GeneralSettingsForm = ({
  generalSettings,
  onGeneralSettingsChange,
}: Props) => {
  const toggleRememberUser = (isEnabled: boolean) =>
    onGeneralSettingsChange({
      ...generalSettings,
      rememberUser: {
        ...generalSettings.rememberUser,
        isEnabled,
      },
    })
  const t = useI18n()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { workspace } = useWorkspace()
  const isWorkspaceFreePlan = isFreePlan(workspace)
  const handleSwitchChange = () => {
    if (generalSettings?.isBrandingEnabled && isWorkspaceFreePlan) return
    onGeneralSettingsChange({
      ...generalSettings,
      isBrandingEnabled: !generalSettings?.isBrandingEnabled,
    })
  }

  const handleInputPrefillChange = (isInputPrefillEnabled: boolean) =>
    onGeneralSettingsChange({
      ...generalSettings,
      isInputPrefillEnabled,
    })

  const handleHideQueryParamsChange = (isHideQueryParamsEnabled: boolean) =>
    onGeneralSettingsChange({
      ...generalSettings,
      isHideQueryParamsEnabled,
    })

  const updateRememberUserStorage = (
    storage: NonNullable<GeneralSettings['rememberUser']>['storage']
  ) =>
    onGeneralSettingsChange({
      ...generalSettings,
      rememberUser: {
        ...generalSettings.rememberUser,
        storage,
      },
    })

  return (
    <Stack spacing={6}>
      <ChangePlanModal
        isOpen={isOpen}
        onClose={onClose}
        type={t('billing.limitMessage.brand')}
      />
      <Flex
        justifyContent="space-between"
        align="center"
        onClick={isWorkspaceFreePlan ? onOpen : undefined}
      >
        <FormLabel htmlFor="branding" mb="0">
          HackLeads Marca d&apos;água{' '}
          {isWorkspaceFreePlan && <LockTag plan={Plan.STARTER} />}
        </FormLabel>
        <Switch
          id="branding"
          isChecked={generalSettings.isBrandingEnabled}
          onChange={handleSwitchChange}
        />
      </Flex>
      <SwitchWithLabel
        label="Prefill input"
        initialValue={generalSettings.isInputPrefillEnabled ?? true}
        onCheckChange={handleInputPrefillChange}
        moreInfoContent="As entradas são pré-preenchidas automaticamente sempre que sua variável associada tiver um valor"
      />
      <SwitchWithLabel
        label="Esconder os query params quando o bot for iniciado"
        initialValue={generalSettings.isHideQueryParamsEnabled ?? true}
        onCheckChange={handleHideQueryParamsChange}
        moreInfoContent="Se sua URL contiver parâmetros eles serão escondidos automaticamente quando o bot iniciar."
      />
      <SwitchWithRelatedSettings
        label={'Remember user'}
        moreInfoContent="Se estiver habilitado, a sessão de um usuario será armazenada e caso ele responda novamente o formulário as respostas anteriores serão sobrescritas"
        initialValue={
          generalSettings.rememberUser?.isEnabled ??
          (isDefined(generalSettings.isNewResultOnRefreshEnabled)
            ? !generalSettings.isNewResultOnRefreshEnabled
            : false)
        }
        onCheckChange={toggleRememberUser}
      >
        <FormControl as={HStack} justifyContent="space-between">
          <FormLabel mb="0">
            Storage:&nbsp;
            <MoreInfoTooltip>
              <Stack>
                <Text>
                  Choose <Tag size="sm">session</Tag> to remember the user as
                  long as he does not closes the tab or the browser.
                </Text>
                <Text>
                  Choose <Tag size="sm">local</Tag> to remember the user
                  forever.
                </Text>
              </Stack>
            </MoreInfoTooltip>
          </FormLabel>
          <DropdownList
            currentItem={generalSettings.rememberUser?.storage ?? 'session'}
            onItemSelect={updateRememberUserStorage}
            items={rememberUserStorages}
          ></DropdownList>
        </FormControl>
      </SwitchWithRelatedSettings>
    </Stack>
  )
}
