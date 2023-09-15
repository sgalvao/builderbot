import { Text } from '@chakra-ui/react'
import {
  BubbleBlockType,
  InputBlockType,
  IntegrationBlockType,
  LogicBlockType,
  BlockType,
} from '@typebot.io/schemas'
import React from 'react'
import { useScopedI18n } from '@/locales'

type Props = { type: BlockType }

export const BlockLabel = ({ type }: Props): JSX.Element => {
  const scopedT = useScopedI18n('editor.sidebarBlock')

  switch (type) {
    case 'start':
<<<<<<< HEAD
      return <Text fontSize="sm">Inicio</Text>
    case BubbleBlockType.TEXT:
    case InputBlockType.TEXT:
      return <Text fontSize="sm">Texto</Text>
    case BubbleBlockType.IMAGE:
      return <Text fontSize="sm">Imagem</Text>
=======
      return <Text fontSize="sm">{scopedT('start.label')}</Text>
    case BubbleBlockType.TEXT:
    case InputBlockType.TEXT:
      return <Text fontSize="sm">{scopedT('text.label')}</Text>
    case BubbleBlockType.IMAGE:
      return <Text fontSize="sm">{scopedT('image.label')}</Text>
>>>>>>> 0ccc2efa454e3a0f2c9b7a633b241175d4ee8dac
    case BubbleBlockType.VIDEO:
      return <Text fontSize="sm">{scopedT('video.label')}</Text>
    case BubbleBlockType.EMBED:
      return <Text fontSize="sm">{scopedT('embed.label')}</Text>
    case BubbleBlockType.AUDIO:
      return <Text fontSize="sm">{scopedT('audio.label')}</Text>
    case InputBlockType.NUMBER:
<<<<<<< HEAD
      return <Text fontSize="sm">Número</Text>
=======
      return <Text fontSize="sm">{scopedT('number.label')}</Text>
>>>>>>> 0ccc2efa454e3a0f2c9b7a633b241175d4ee8dac
    case InputBlockType.EMAIL:
      return <Text fontSize="sm">{scopedT('email.label')}</Text>
    case InputBlockType.URL:
      return <Text fontSize="sm">{scopedT('website.label')}</Text>
    case InputBlockType.DATE:
      return <Text fontSize="sm">Data</Text>
    case InputBlockType.PHONE:
      return <Text fontSize="sm">Telefone</Text>
    case InputBlockType.CHOICE:
      return <Text fontSize="sm">Botão</Text>
    case InputBlockType.PICTURE_CHOICE:
      return <Text fontSize="sm">Escolha de Imagem</Text>
    case InputBlockType.PAYMENT:
      return <Text fontSize="sm">Pagamento</Text>
    case InputBlockType.RATING:
      return <Text fontSize="sm">Avaliação</Text>
    case InputBlockType.FILE:
      return <Text fontSize="sm">Arquivo</Text>
    case LogicBlockType.SET_VARIABLE:
      return <Text fontSize="sm">Adicionar Variável</Text>
    case LogicBlockType.CONDITION:
      return <Text fontSize="sm">Condição</Text>
    case LogicBlockType.REDIRECT:
      return <Text fontSize="sm">Redirecionar</Text>
    case LogicBlockType.SCRIPT:
      return <Text fontSize="sm">{scopedT('script.label')}</Text>
    case LogicBlockType.TYPEBOT_LINK:
      return <Text fontSize="sm">HackLead</Text>
    case LogicBlockType.WAIT:
      return <Text fontSize="sm">Esperar</Text>
    case LogicBlockType.JUMP:
      return <Text fontSize="sm">{scopedT('jump.label')}</Text>
    case LogicBlockType.AB_TEST:
      return <Text fontSize="sm">Teste A/B</Text>
    case IntegrationBlockType.GOOGLE_SHEETS:
      return <Text fontSize="sm">{scopedT('sheets.label')}</Text>
    case IntegrationBlockType.GOOGLE_ANALYTICS:
      return <Text fontSize="sm">{scopedT('analytics.label')}</Text>
    case IntegrationBlockType.WEBHOOK:
      return <Text fontSize="sm">{scopedT('webhook.label')}</Text>
    case IntegrationBlockType.ZAPIER:
      return <Text fontSize="sm">{scopedT('zapier.label')}</Text>
    case IntegrationBlockType.MAKE_COM:
      return <Text fontSize="sm">{scopedT('makecom.label')}</Text>
    case IntegrationBlockType.PABBLY_CONNECT:
      return <Text fontSize="sm">{scopedT('pabbly.label')}</Text>
    case IntegrationBlockType.EMAIL:
      return <Text fontSize="sm">{scopedT('email.label')}</Text>
    case IntegrationBlockType.CHATWOOT:
      return <Text fontSize="sm">{scopedT('chatwoot.label')}</Text>
    case IntegrationBlockType.OPEN_AI:
      return <Text fontSize="sm">{scopedT('openai.label')}</Text>
    case IntegrationBlockType.PIXEL:
      return <Text fontSize="sm">{scopedT('pixel.label')}</Text>
    case IntegrationBlockType.ZEMANTIC_AI:
      return <Text fontSize="sm">{scopedT('zemanticAi.label')}</Text>
  }
}
