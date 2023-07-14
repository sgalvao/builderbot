import {
  Flex,
  Stack,
  Heading,
  Box,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'
import React from 'react'
import { ArrowRight } from 'assets/icons/ArrowRight'
import { Flare } from 'assets/illustrations/Flare'
import Link from 'next/link'

export const EasyEmbed = () => {
  return (
    <Flex as="section" justify="center" pos="relative">
      <Flare
        color="orange"
        pos="absolute"
        right="-200px"
        top="100px"
        data-aos="fade"
        data-aos-delay="500"
      />
      <Stack
        style={{ maxWidth: '1000px' }}
        pt={32}
        w="full"
        px="4"
        spacing={12}
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing="6" maxW="300px" minW={[0, '300px']}>
          <Heading as="h1" data-aos="fade">
            Integre com apenas um clique
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: 'lg', xl: 'xl' }}
            data-aos="fade"
          >
            Adicione o HackLeads a suas aplicações em um piscar de olhos. O
            HackLeads te fornece o passo a passo para integrar nossa solução em
            sua plataforma.
          </Text>
          <Flex data-aos="fade">
            <Button
              as={Link}
              rightIcon={<ArrowRight />}
              href={`https://app.hackleads.com.br/register`}
              variant="ghost"
              colorScheme="orange"
            >
              Testar Agora
            </Button>
          </Flex>
        </Stack>
        <Box rounded="md" data-aos="fade">
          <Image
            src="https://s3.typebot.io/native-feeling.png"
            alt="incomplete results illustration"
            placeholder="blur"
          />
        </Box>
      </Stack>
    </Flex>
  )
}
