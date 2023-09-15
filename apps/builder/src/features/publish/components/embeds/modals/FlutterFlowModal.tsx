import { AlertInfo } from '@/components/AlertInfo'
import { CopyButton } from '@/components/CopyButton'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  ModalBody,
  OrderedList,
  ListItem,
  Code,
  InputGroup,
  Input,
  InputRightElement,
  ModalFooter,
  Text,
  Stack,
} from '@chakra-ui/react'
import { getViewerUrl } from '@typebot.io/lib/getViewerUrl'
import { ModalProps } from '../EmbedButton'

export const FlutterFlowModal = ({
  isPublished,
  publicId,
  isOpen,
  onClose,
}: ModalProps): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size="md">FlutterFlow</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!isPublished && (
            <AlertInfo mb="4">You need to publish your bot first.</AlertInfo>
          )}
          <OrderedList spacing={4}>
            <ListItem>
              Insert a <Code>WebView</Code> element
            </ListItem>
            <ListItem>
              <Stack>
                <Text>
                  As the <Code>Webview URL</Code>, paste your typebot URL
                </Text>
                <InputGroup size="sm">
                  <Input
                    type={'text'}
                    defaultValue={`${getViewerUrl()}/${publicId}`}
                  />
                  <InputRightElement width="60px">
                    <CopyButton
                      size="sm"
                      textToCopy={`${getViewerUrl()}/${publicId}`}
                    />
                  </InputRightElement>
                </InputGroup>
              </Stack>
            </ListItem>
          </OrderedList>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
