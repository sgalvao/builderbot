import { Flex, Heading, SimpleGrid, Stack, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { TypebotReference } from './TypebotReference'

export type TestimonialData = {
  name: string
  avatarSrc?: string
  provider: 'email' | 'productHunt' | 'capterra' | 'reddit'
  role?: string
  content: string | React.ReactNode
}

const description: TestimonialData = {
  name: 'Silvio Galvão',
  provider: 'email',
  avatarSrc: 'https://s3.typebot.io/theo.jpeg',
  role: 'Senior Software Engineer - Hackleads ',
  content: (
    <>
      Nós somos uma versão modificada do{' '}
      <a className="text-sky-400" href="https://typebot.io">
        Typebot
      </a>{' '}
      Desenvolvida e focada nos funis de Marketing Digital Brasileiro
      <br />
      <br />
      Algumas das melhorias feitas além de tornar a plataforma mais acessível
      foram Integrar com plataformas comumente utilizadas no Brasil, Foco
      aumentado em conversão e venda direta, Integração com Mercado Pago e
      pagamentos via Pix.
    </>
  ),
}

export const TypebotSection = () => {
  return (
    <Flex as="section" justify="center">
      <VStack spacing={12} pt={'52'} px="4" maxW="1400px">
        <Heading textAlign={'center'} data-aos="fade">
          Somos uma versão modificada do Typebot 💙
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing="6">
          <Stack>
            <TypebotReference {...description} />
          </Stack>
        </SimpleGrid>
      </VStack>
    </Flex>
  )
}
