import {
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorModeValue as mode,
  useDisclosure,
  Box,
  Link,
} from '@chakra-ui/react'
import { HamburgerIcon } from 'assets/icons'
import { CloseIcon } from 'assets/icons/CloseIcon'
import { Logo } from 'assets/icons/Logo'
import * as React from 'react'
import { MobileMenu } from './MobileMenu'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const Header = () => {
  const { isOpen: isMobileMenuOpen, onToggle: onMobileMenuToggle } =
    useDisclosure()
  const [refCode, setRefCode] = useState('')
  const router = useRouter()

  useEffect(() => {
    const { referralCode } = router.query

    if (referralCode) {
      sessionStorage.setItem('@referral', JSON.stringify(referralCode))
      setRefCode(`?referralCode=${referralCode}`)
    }
  }, [router.query])

  return (
    <Flex pos="relative" zIndex={10} w="full">
      <HStack
        as="header"
        aria-label="Main navigation"
        maxW="7xl"
        w="full"
        mx="auto"
        px={{ base: '6', md: '8' }}
        py="4"
        justify="space-between"
      >
        <Flex
          align="center"
          justify="space-between"
          className="nav-content__mobile"
          color={mode('white', 'white')}
        >
          <HStack as={Link} href="/" rel="home" ml="2">
            <Logo />
            <Heading as="p" fontSize="xl">
              HackLeads
            </Heading>
          </HStack>
        </Flex>
        <Box display={['block', 'block', 'none']}>
          <IconButton
            aria-label={'Open menu'}
            icon={
              isMobileMenuOpen ? (
                <CloseIcon boxSize="20px" />
              ) : (
                <HamburgerIcon boxSize="20px" />
              )
            }
            variant="ghost"
            colorScheme="gray"
            onClick={onMobileMenuToggle}
          />
          <MobileMenu isOpen={isMobileMenuOpen} />
        </Box>
        <HStack as="nav" spacing={4} display={['none', 'none', 'flex']}>
          <Button
            as={Link}
            href="/pricing"
            variant="ghost"
            colorScheme="gray"
            fontWeight={700}
          >
            Planos
          </Button>
          <Button
            as={Link}
            href={`https://app.hackleads.com.br/signin${refCode}`}
            colorScheme="blue"
            variant="outline"
            fontWeight={700}
          >
            Entrar
          </Button>
          <Button
            as={Link}
            href={`https://app.hackleads.com.br/register${refCode}`}
            colorScheme="orange"
            fontWeight={700}
          >
            Crie um HackLead
          </Button>
        </HStack>
      </HStack>
    </Flex>
  )
}
