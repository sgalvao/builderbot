import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Stack,
  Heading,
  List,
  ListItem,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Flex,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useScopedI18n } from '@/locales'

export const GettingStartedModal = () => {
  const scopedT = useScopedI18n('editor.gettingStartedModal')
  const { query } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (query.isFirstBot) onOpen()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody as={Stack} spacing="8" py="10">
          <Stack spacing={4}>
            <Heading fontSize="xl">Editor Basico</Heading>
            <List spacing={4}>
              <HStack as={ListItem}>
                <Flex
                  bgColor="blue.500"
                  rounded="full"
                  boxSize="25px"
                  justify="center"
                  align="center"
                  color="white"
                  fontWeight="bold"
                  flexShrink={0}
                  fontSize="13px"
                >
                  1
                </Flex>
                <Text>
                  Do lado esquerdo tem cards que você pode arrastar e soltar.
                </Text>
              </HStack>
              <HStack as={ListItem}>
                <Flex
                  bgColor="blue.500"
                  rounded="full"
                  boxSize="25px"
                  fontSize="13px"
                  justify="center"
                  align="center"
                  color="white"
                  fontWeight="bold"
                  flexShrink={0}
                >
                  2
                </Flex>
                <Text>
                  Você pode agrupar os cards largando eles em cima ou embaixo de
                  outros cards.
                </Text>
              </HStack>
              <HStack as={ListItem}>
                <Flex
                  bgColor="blue.500"
                  rounded="full"
                  boxSize="25px"
                  justify="center"
                  align="center"
                  color="white"
                  fontWeight="bold"
                  flexShrink={0}
                  fontSize="13px"
                >
                  3
                </Flex>
                <Text>Conecte os grupos</Text>
              </HStack>
              <HStack as={ListItem}>
                <Flex
                  bgColor="blue.500"
                  rounded="full"
                  boxSize="25px"
                  justify="center"
                  align="center"
                  color="white"
                  fontWeight="bold"
                  flexShrink={0}
                  fontSize="13px"
                >
                  4
                </Flex>
                <Text>
                  Pode ver uma prévia do seu bot clicando em{' '}
                  <strong>Preview</strong> no canto superior direito.
                </Text>
              </HStack>
            </List>
          </Stack>

          <Text>
            Sinta-se livre para clicar no botão de suporte no canto inferior
            direito para qualquer dúvida. Normalmente respondemos dentro de
            algumas horas. 😃
          </Text>
          <Stack spacing={4}>
            <Heading fontSize="xl">Veja isso em ação ({`<`} 5 minutos)</Heading>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/jp3ggg_42-M"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '0.5rem', border: 'none' }}
            />
            <Accordion allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Outros videos
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={10} as={Stack} spacing="10">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/6BudIC4GYNk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '0.5rem', border: 'none' }}
                  />
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/ZuyDwFLRbfQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '0.5rem', border: 'none' }}
                  />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
