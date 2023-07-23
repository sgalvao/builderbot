import { AlertInfo } from '@/components/AlertInfo'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Button,
  HStack,
  Box,
} from '@chakra-ui/react'

type ThemeTutorialModalProps = {
  type?: string
  isOpen: boolean
  onClose: () => void
}

export const ThemeTutorialModal = ({
  onClose,
  isOpen,
}: ThemeTutorialModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalBody
          as={Stack}
          spacing="6"
          pt="10"
          justifyContent={'center'}
        ></ModalBody>
        <AlertInfo>
          Nosso template está em fase Beta, veja o vídeo abaixo para entender
          como fazer modificações.
        </AlertInfo>
        <Box
          alignItems={'center'}
          justifyContent={'center'}
          width={'100%'}
          padding={'0 10px'}
        >
          <iframe
            width="100%"
            height="320"
            src="https://www.youtube.com/embed/sEg8FbIBWpM"
            title="Hackleads - whatsapp template tutorial"
            frameBorder="0"
            allow="accelerometer; encrypted-media;  web-share"
            allowFullScreen
          />
        </Box>

        <ModalFooter>
          <HStack>
            <Button colorScheme="blue" onClick={onClose}>
              Entendido
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
