import React, { ReactNode } from 'react'

import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { Logo } from 'assets/icons/Logo'
import { TextLink } from './TextLink'

const typebotTwitterUrl = 'https://twitter.com/silvao1503'
export const contactUrl = 'https://chat.hackleads.com.br/landing-page-bubble-en'
export const roadmapLink = 'https://app.hackleads.com.br/feedback'
export const documentationLink = 'https://docs.typebot.io'
export const githubRepoLink = 'https://github.com/sgalvao/builderbot'

export const Footer = () => {
  return (
    <Box w="full">
      <Container as={Stack} maxW={'1000px'} py={10}>
        <SimpleGrid columns={[1, 2, 4]} spacing={8} px={2}>
          <Stack spacing={6}>
            <HStack>
              <Logo />
              <Heading as="h2" fontSize="lg">
                HackLeads
              </Heading>
            </HStack>
            <TextLink href={'https://typebot.io'} isExternal>
              Fork Typebot.io
            </TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Produto</ListHeader>
            {/* <TextLink href={statusPageUrl} isExternal>
              Status
            </TextLink> */}
            <TextLink href={documentationLink} isExternal>
              Documentação
            </TextLink>
            {/* <TextLink href={roadmapLink} isExternal>
              Roadmap
            </TextLink> */}
            <TextLink href={'/pricing'}>Planos</TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Comunidade</ListHeader>
            <TextLink href={githubRepoLink} isExternal>
              GitHub
            </TextLink>
            <TextLink href={typebotTwitterUrl} isExternal>
              Twitter
            </TextLink>

            <TextLink href="/oss-friends">OSS Friends</TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Empresa</ListHeader>
            <TextLink href="/about">Sobre o HackLeads</TextLink>
            <TextLink href="mailto:suporte@hackleads.com.br">Contato</TextLink>
            <TextLink href={'/terms-of-service'}>Termos de serviço</TextLink>
            <TextLink href={'/privacy-policies'}>
              Politica de privacidade
            </TextLink>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Heading fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Heading>
  )
}
