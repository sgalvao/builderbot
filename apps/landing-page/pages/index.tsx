import { Stack } from '@chakra-ui/react'
import { Footer } from 'components/common/Footer'
import { SocialMetaTags } from 'components/common/SocialMetaTags'
import { EasyBuildingExperience } from 'components/Homepage/EasyBuildingExperience'
import { EasyEmbed } from 'components/Homepage/EasyEmbed'
import { EndCta } from 'components/Homepage/EndCta'
import { Features } from 'components/Homepage/Features'
import { Hero } from 'components/Homepage/Hero'
import { Integrations } from 'components/Homepage/Integrations'
import { IntroducingChatApps } from 'components/Homepage/IntroducingChatApps'

const App = () => {
  return (
    <Stack overflowX="hidden" bgColor="gray.900">
      <SocialMetaTags currentUrl={`https://www.hackleads.com.br`} />
      <Hero />
      <IntroducingChatApps />
      <EasyBuildingExperience />
      <EasyEmbed />
      <Integrations />
      {/* <RealTimeResults /> */}
      <Features />
      <EndCta />
      <Footer />
    </Stack>
  )
}

export default App
