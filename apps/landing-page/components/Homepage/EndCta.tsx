import { Heading, Button, Text, Flex, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BackgroundPolygons } from './Hero/BackgroundPolygons'

export const EndCta = () => {
  const [refCode, setRefCode] = useState('')

  useEffect(() => {
    const ref = sessionStorage.getItem('@referral')
    if (ref) {
      setRefCode(`?referralCode=${ref}`)
    }
  }, [])

  return (
    <VStack
      as="section"
      py={32}
      pos="relative"
      bgGradient="linear(to-b, gray.900, gray.800)"
      height="100vh"
      justifyContent="center"
    >
      <BackgroundPolygons />
      <VStack
        spacing="6"
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading
          fontWeight="extrabold"
          letterSpacing="tight"
          data-aos="fade-up"
        >
          Leve sua captação de Leads para o próximo nível
        </Heading>
        <Flex>
          <Button
            as={Link}
            href={`https://app.hackleads.com.br/register${refCode}`}
            size="lg"
            colorScheme="orange"
            height="4rem"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Criar um HackLead
          </Button>
        </Flex>

        <Text color="gray.400" data-aos="fade-up" data-aos-delay="400">
          Não precisa adicionar informações de pagamento, plano{' '}
          <strong>GRATIS</strong> generosamente <strong>ILIMITADO</strong> .
        </Text>
      </VStack>
    </VStack>
  )
}
