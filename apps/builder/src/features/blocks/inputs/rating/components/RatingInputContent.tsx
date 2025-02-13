import { WithVariableContent } from '@/features/graph/components/nodes/block/WithVariableContent'
import { Text } from '@chakra-ui/react'
import { RatingInputBlock } from '@typebot.io/schemas'

type Props = {
  variableId?: string
  block: RatingInputBlock
}

export const RatingInputContent = ({ variableId, block }: Props) =>
  variableId ? (
    <WithVariableContent variableId={variableId} />
  ) : (
    <Text noOfLines={1} pr="6">
      Avalie de {block.options.buttonType === 'Icons' ? 1 : 0} a{' '}
      {block.options.length}
    </Text>
  )
