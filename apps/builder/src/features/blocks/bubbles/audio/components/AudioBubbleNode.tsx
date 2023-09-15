import { Text } from '@chakra-ui/react'
import { AudioBubbleContent } from '@typebot.io/schemas'
import { isDefined } from '@typebot.io/lib'

type Props = {
  url: AudioBubbleContent['url']
}

export const AudioBubbleNode = ({ url }: Props) => {
  return isDefined(url) ? (
    <audio src={url} controls />
  ) : (
    <Text color={'gray.500'}>Clique para editar...</Text>
  )
}
