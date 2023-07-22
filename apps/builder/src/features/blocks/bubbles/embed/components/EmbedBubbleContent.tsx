import { Text } from '@chakra-ui/react'
import { EmbedBubbleBlock } from '@typebot.io/schemas'

export const EmbedBubbleContent = ({ block }: { block: EmbedBubbleBlock }) => {
  if (!block.content?.url)
    return <Text color="gray.500">Clique para editar...</Text>
  return <Text>Show embed</Text>
}
