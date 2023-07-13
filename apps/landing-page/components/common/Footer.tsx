import React, { ReactNode } from 'react'

import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from 'assets/icons/Logo'
import { TextLink } from './TextLink'

const facebookGroupUrl = 'https://www.facebook.com/groups/typebot'
const typebotLinkedInUrl = 'https://www.linkedin.com/company/typebot'
const typebotTwitterUrl = 'https://twitter.com/Typebot_io'
const baptisteTwitterUrl = 'https://twitter.com/baptisteArno'
const statusPageUrl = 'https://status.typebot.io'
export const contactUrl = 'https://bot.typebot.io/landing-page-bubble-en'
export const roadmapLink = 'https://app.typebot.io/feedback'
export const documentationLink = 'https://docs.typebot.io'
export const githubRepoLink = 'https://github.com/sgalvao/builderbot'

export const Footer = () => {
  return (
    <Box w="full">
      <Container as={Stack} maxW={'1000px'} py={10}>
        <SimpleGrid columns={[1, 2, 4]} spacing={8} px={2}>
          <Stack spacing={6}>
            <HStack>
              <Logo boxSize="30px" />
              <Heading as="p" fontSize="lg">
                HackLeads
              </Heading>
            </HStack>
            <Text>
              Fork do <TextLink href={'https://typebot.io'}>TypeBot</TextLink>{' '}
            </Text>
            <Text>
              Made with ❤️ by{' '}
              <TextLink href={baptisteTwitterUrl}>@baptisteArno</TextLink>
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Produto</ListHeader>
            {/* <TextLink href={statusPageUrl} isExternal>
              Status
            </TextLink> */}
            <TextLink href={documentationLink} isExternal>
              Documentação
            </TextLink>
            <TextLink href={roadmapLink} isExternal>
              Roadmap
            </TextLink>
            <TextLink href={'/pricing'}>Planos</TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Comunidade</ListHeader>
            <TextLink href={githubRepoLink} isExternal>
              GitHub repository
            </TextLink>
            <TextLink href={typebotTwitterUrl} isExternal>
              Twitter
            </TextLink>

            <TextLink href="/oss-friends">OSS Friends</TextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <TextLink href="/about">Sobre o HackLeads</TextLink>
            <TextLink href="mailto:silvio.gabrielgt2000@hotmail.com">
              Contato
            </TextLink>
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
