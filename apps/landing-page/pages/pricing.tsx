import {
  DarkMode,
  Flex,
  Stack,
  Heading,
  VStack,
  Text,
  HStack,
  Switch,
  Tag,
} from '@chakra-ui/react'
import { Footer } from 'components/common/Footer'
import { Header } from 'components/common/Header/Header'
import { SocialMetaTags } from 'components/common/SocialMetaTags'
import { BackgroundPolygons } from 'components/Homepage/Hero/BackgroundPolygons'
import { PlanComparisonTables } from 'components/PricingPage/PlanComparisonTables'
import { useState } from 'react'
import { StripeClimateLogo } from 'assets/logos/StripeClimateLogo'
import { FreePlanCard } from 'components/PricingPage/FreePlanCard'
import { StarterPlanCard } from 'components/PricingPage/StarterPlanCard'
import { ProPlanCard } from 'components/PricingPage/ProPlanCard'
import { TextLink } from 'components/common/TextLink'
import { EnterprisePlanCard } from 'components/PricingPage/EnterprisePlanCard'
import { Faq } from 'components/PricingPage/Faq'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <Stack overflowX="hidden" bgColor="gray.900">
      <Flex
        pos="relative"
        flexDir="column"
        minHeight="100vh"
        alignItems="center"
        bgGradient="linear(to-b, gray.900, gray.800)"
        pb={40}
      >
        <SocialMetaTags currentUrl={`https://www.hackleads.com.br/pricing`} />
        <BackgroundPolygons />
        <DarkMode>
          <Header />
        </DarkMode>

        <VStack spacing={'24'} mt={[20, 32]} w="full">
          <Stack align="center" spacing="12" w="full" px={4}>
            <VStack>
              <Heading fontSize={{ base: '4xl', xl: '6xl' }}>
                Planos que combinam com você
              </Heading>
              <Text
                maxW="900px"
                textAlign="center"
                fontSize={{ base: 'lg', xl: 'xl' }}
              >
                Não importa se você é um {''}
                <Text as="span" color="orange.200" fontWeight="bold">
                  empreendedor solo
                </Text>
                ,{' '}
                <Text as="span" color="blue.200" fontWeight="bold">
                  Startup em crescimento
                </Text>{' '}
                ou uma{' '}
                <Text as="span" fontWeight="bold">
                  Grande empresa
                </Text>
                , HackLeads está aqui para te ajudar a conquistar novos leads
                pelo menor preço.
              </Text>
            </VStack>

            <Stack align="flex-end" maxW="1200px" w="full" spacing={4}>
              <HStack>
                <Text>Mensal</Text>
                <Switch
                  isChecked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
                <HStack>
                  <Text>Anual</Text>
                  <Tag colorScheme="blue">economize 16%</Tag>
                </HStack>
              </HStack>

              <Stack
                direction={['column', 'row']}
                alignItems={['stretch']}
                spacing={10}
                w="full"
                maxW="1200px"
              >
                <FreePlanCard />
                <StarterPlanCard isYearly={isYearly} />
                <ProPlanCard isYearly={isYearly} />
              </Stack>
            </Stack>

            {/* <EnterprisePlanCard /> */}
          </Stack>

          <VStack maxW="1200px" w="full" spacing={[12, 20]} px="4">
            <Stack w="full" spacing={10} display={['none', 'flex']}>
              <Heading>Compare os planos e funcionalidades</Heading>
              <PlanComparisonTables />
            </Stack>
            <Faq />
          </VStack>
        </VStack>
      </Flex>
      <Footer />
    </Stack>
  )
}

export default Pricing
