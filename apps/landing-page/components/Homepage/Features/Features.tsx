import React from 'react'
import {
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FeatureCard } from './FeatureCard'
import { FolderIcon } from 'assets/icons/FolderIcon'
import { AccessibilityIcon } from 'assets/icons/AccessibilityIcon'
import { CalculatorIcon } from 'assets/icons/CaluclatorIcon'
import { ConditionIcon } from 'assets/icons/ConditionIcon'
import { PersonAddIcon } from 'assets/icons/PersonAddIcon'
import { ShareIcon } from 'assets/icons/ShareIcon'

const features = [
  {
    Icon: AccessibilityIcon,
    title: 'Hidden fields',
    content:
      'Inclua dados em sua URL para segmentar os usuários e usar este dado diretamente no seu formulário.',
  },
  {
    Icon: PersonAddIcon,
    title: 'Colaboradores',
    content:
      'Convide seus colegas de trabalho para desenvolver junto com você em seus chatBots',
  },
  {
    Icon: ConditionIcon,
    title: 'Conecte seus ChatBots',
    content: 'Reutilize seus chatBots e crie conexões entre eles.',
  },
  {
    Icon: CalculatorIcon,
    title: 'Código Customizado',
    content: 'Customize tudo com seu próprio Javascript & CSS',
  },
  {
    Icon: ShareIcon,
    title: 'Domínios Customizados',
    content: 'Conecte seus chatBots com um domínio de sua escolha',
  },
  {
    Icon: FolderIcon,
    title: 'Criação de pastas',
    content:
      'Organize seus chatBots em diferentes pastas para manter um ambiente limpo e que consiga trabalhar com diversos clientes.',
  },
]

export const Features = () => {
  return (
    <Flex justifyContent="center">
      <Stack
        style={{ maxWidth: '1200px' }}
        pt={'52'}
        w="full"
        px="4"
        spacing={12}
      >
        <VStack>
          <Heading as="h1" textAlign="center" data-aos="fade">
            E muitas outras funcionalidades
          </Heading>
          <Text
            color="gray.500"
            fontSize={['lg', 'xl']}
            textAlign="center"
            data-aos="fade"
          >
            HackLeads faz com que a geração de leads seja fácil e fique cada vez
            mais poderosa.
          </Text>
        </VStack>
        <SimpleGrid columns={[1, 3]} spacing="10" pt="10" data-aos="fade">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}
