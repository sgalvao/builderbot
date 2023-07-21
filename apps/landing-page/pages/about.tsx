import { Stack, Text, Flex, Heading } from '@chakra-ui/react'
import { Header } from 'components/common/Header/Header'
import { SocialMetaTags } from 'components/common/SocialMetaTags'
import React from 'react'
import { Footer } from 'components/common/Footer'
import { TextLink } from 'components/common/TextLink'

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden ">
      <Header />
      <SocialMetaTags currentUrl={`https://www.hackleads.com.br/about`} />
      <Stack
        spacing={10}
        mx="auto"
        maxW="3xl"
        my="20"
        fontSize="17px"
        textAlign="justify"
      >
        <Flex w="full">
          <Heading as="h1">Sobre o HackLeads</Heading>
        </Flex>

        <Text>
          Plataforma Open-source de criação de chatBots especializada em
          captação de leads.
        </Text>
        <Flex w="full">
          <Heading as="h2">Somos um Fork do Typebot</Heading>
        </Flex>
        <Text>
          Gostaria de começar expressando nossa sincera gratidão ao{' '}
          <TextLink href={'https://twitter.com/baptisteArno'}>
            Baptiste Arnaud
          </TextLink>
          , criador do{' '}
          <TextLink href={'https://typebot.io/about'}>Typebot</TextLink>, pelo
          seu trabalho inovador e por disponibilizar sua criação como uma
          plataforma de código aberto. Nós, como uma comunidade de
          desenvolvedores, tivemos o privilégio de aproveitar essa base sólida
          para criar um fork do Typebot focado no mercado digital brasileiro e
          com ênfase na venda direta por meio de chatbots.
        </Text>
        <Flex w="full">
          <Heading as="h2">Nosso sistema e melhorias</Heading>
        </Flex>
        <Text id="features">
          Nosso software de funis de venda online é uma plataforma open-source
          desenvolvida para atender às demandas do mercado digital brasileiro.
          Utilizando o código-fonte original do Typebot como ponto de partida,
          aprimoramos e adaptamos a plataforma para oferecer uma experiência
          aprimorada de vendas por meio de chatbots. Essa abordagem colaborativa
          e de código aberto nos permitiu expandir e personalizar o software de
          acordo com as necessidades específicas dos empreendedores brasileiros.
        </Text>
        <Flex w="full">
          <Heading as="h3">Melhorias e integrações</Heading>
        </Flex>

        <ul>
          <li>
            Integração com as principais plataformas de pagamento utilizadas no
            Brasil: Agora é possível integrar facilmente seu chatbot com as
            principais opções de pagamento brasileiras, proporcionando uma
            experiência de compra fluida e segura para seus clientes.
          </li>
          <li>
            Suporte a múltiplos idiomas, incluindo o português brasileiro:
            Reconhecendo a importância da comunicação em um contexto localizado,
            nosso software foi adaptado para permitir a criação de chatbots em
            português brasileiro, garantindo uma interação mais natural e
            eficiente com seu público.
          </li>
          <li>
            Personalização de acordo com as práticas de marketing do mercado
            brasileiro: Levamos em consideração as melhores práticas de
            marketing digital no Brasil e implementamos recursos que permitem
            segmentar seu público, personalizar mensagens e oferecer ofertas
            especiais de acordo com as preferências dos consumidores
            brasileiros. (EM DESENVOLVIMENTO)
          </li>
        </ul>
        <Flex w="full">
          <Heading as="h2">Agradecimentos</Heading>
        </Flex>
        <Text>
          Gostaríamos de expressar nosso profundo agradecimento ao Baptiste
          Arnaud pela criação do Typebot e por disponibilizá-lo como um projeto
          open-source. Sua visão e dedicação abriram portas para que pudéssemos
          desenvolver uma solução de funis de venda online adaptada
          especificamente para o mercado digital brasileiro. Estamos gratos pela
          oportunidade de construir sobre a base sólida do Typebot e de
          contribuir para a evolução contínua dessa plataforma.
        </Text>
      </Stack>
      <Footer />
    </div>
  )
}

export default AboutPage
