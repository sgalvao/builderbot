import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Textarea,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { PublicTypebot } from '@typebot.io/schemas'
import { sendRequest } from '@typebot.io/lib'
import { DontIcon } from 'assets/icons/DontIcon'
import { DoIcon } from 'assets/icons/DoIcon'
import { HandDrawnArrow } from 'assets/illustrations/HandDrawnArrow'
import { Standard } from '@typebot.io/react'

export const IntroducingChatApps = () => {
  const [typebot, setTypebot] = useState<PublicTypebot>()

  useEffect(() => {
    fetchTemplate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchTemplate = async () => {
    const { data, error } = await sendRequest(`/typebots/lead-gen-lp.json`)

    console.log(data)
    if (error) return
    setTypebot(data as PublicTypebot)
  }

  return (
    <Flex as="section" justify="center">
      <Stack
        style={{ maxWidth: '1200px' }}
        pt={32}
        w="full"
        px="4"
        spacing={16}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing={6} w="full">
          <Heading
            fontSize={{ base: '3xl', lg: '5xl', xl: '6xl' }}
            textAlign="center"
            data-aos="fade"
          >
            Renove a sua forma de conseguir leads utilizando chatBots
          </Heading>
          <Text
            textAlign="center"
            fontSize={{ base: 'lg', xl: 'xl' }}
            color="gray.400"
            data-aos="fade"
          >
            HackLeads é a melhor maneira de conseguir leads de forma interativa.
            Aumente a retenção dos seus clientes e multiplique sua taxa de
            conversão em 3 vezes em comparação com as formas ultrapassadas de
            formulários.
          </Text>
        </Stack>

        <Stack
          direction={['column', 'row']}
          w="full"
          spacing="6"
          data-aos="fade"
        >
          <Stack spacing={6} flex="1" align={['flex-start', 'center']}>
            <DontIcon />
            <FakeLeadGenForm />
          </Stack>

          <Stack
            spacing={6}
            flex="1"
            h="full"
            pos="relative"
            align={['flex-start', 'center']}
          >
            <DoIcon />
            {typebot && (
              <Standard
                typebot={typebot}
                style={{
                  borderRadius: '0.375rem',
                  borderWidth: '1px',
                  height: '562px',
                }}
              />
            )}
            <Flex top="-20px" right="40px" pos="absolute">
              <Text fontFamily="'Indie Flower'" fontSize="2xl">
                tente desta forma!
              </Text>
              <HandDrawnArrow
                transform="rotate(30deg)"
                boxSize="100px"
                top="15px"
                right="-60px"
                pos="absolute"
              />
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  )
}

const FakeLeadGenForm = () => (
  <Stack borderWidth="1px" spacing="4" padding="6" rounded="md" w="full">
    <FormControl isRequired>
      <FormLabel htmlFor="full-name">Nome Completo</FormLabel>
      <Input id="full-name" placeholder="Nome Completo" />
    </FormControl>
    <FormControl isRequired>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input id="email" placeholder="Email" />
    </FormControl>
    <FormControl isRequired>
      <FormLabel htmlFor="services">
        Quais serviços você está interessado?
      </FormLabel>
      <Stack>
        <Checkbox>Website Dev</Checkbox>
        <Checkbox>Marketing</Checkbox>
        <Checkbox>Social Media</Checkbox>
        <Checkbox>UX/UI Design</Checkbox>
      </Stack>
    </FormControl>
    <FormControl isRequired>
      <FormLabel htmlFor="info">Informações adicionais</FormLabel>
      <Textarea id="info" placeholder="Informações adicionais.." />
    </FormControl>
    <Flex>
      <Button>Enviar</Button>
    </Flex>
  </Stack>
)
