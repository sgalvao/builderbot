import { Stack, Heading } from '@chakra-ui/react'
import { Header } from 'components/common/Header/Header'
import { SocialMetaTags } from 'components/common/SocialMetaTags'
import { TextLink } from 'components/common/TextLink'

const PrivacyPolicies = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden ">
      <SocialMetaTags
        currentUrl={`https://www.hackleads.com.br/terms-of-service`}
      />
      <Header />
      <Stack spacing={10} mx="auto" maxW="3xl" my="20">
        <Heading as="h1">Website Terms and Conditions of Use</Heading>

        <Heading>1. Terms</Heading>

        <p>
          By accessing this Website, accessible from
          https://www.hackleads.com.br, you are agreeing to be bound by these
          Website Terms and Conditions of Use and agree that you are responsible
          for the agreement with any applicable local laws. If you disagree with
          any of these terms, you are prohibited from accessing this site. The
          materials contained in this Website are protected by copyright and
          trade mark law.
        </p>

        <Heading>2. Use License</Heading>

        <p>
          Permission is granted to temporarily download one copy of the
          materials on HackLeads Website for personal, non-commercial transitory
          viewing only. This is the grant of a license, not a transfer of title,
          and under this license you may not:
        </p>

        <ul>
          <li>modify or copy the materials;</li>
          <li>
            use the materials for any commercial purpose or for any public
            display;
          </li>
          <li>
            attempt to reverse engineer any software contained on HackLeads
            Website;
          </li>
          <li>
            remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            transferring the materials to another person or &quot;mirror&quot;
            the materials on any other server.
          </li>
        </ul>

        <p>
          This will let HackLeads to terminate upon violations of any of these
          restrictions. Upon termination, your viewing right will also be
          terminated and you should destroy any downloaded materials in your
          possession whether it is printed or electronic format. These Terms of
          Service has been created with the help of the{' '}
          <a href="https://www.termsofservicegenerator.net">
            Terms Of Service Generator
          </a>{' '}
          and the{' '}
          <a href="https://www.generateprivacypolicy.com">
            Privacy Policy Generator
          </a>
          .
        </p>

        <Heading>3. Disclaimer</Heading>

        <p>
          All the materials on HackLeads Website are provided &quot;as is&quot;.
          HackLeads makes no warranties, may it be expressed or implied,
          therefore negates all other warranties. Furthermore, HackLeads does
          not make any representations concerning the accuracy or reliability of
          the use of the materials on its Website or otherwise relating to such
          materials or any sites linked to this Website.
        </p>

        <Heading>4. Limitations</Heading>

        <p>
          HackLeads or its suppliers will not be hold accountable for any
          damages that will arise with the use or inability to use the materials
          on HackLeads Website, even if HackLeads or an authorize representative
          of this Website has been notified, orally or written, of the
          possibility of such damage. Some jurisdiction does not allow
          limitations on implied warranties or limitations of liability for
          incidental damages, these limitations may not apply to you.
        </p>

        <Heading>5. Revisions and Errata</Heading>

        <p>
          The materials appearing on HackLeads Website may include technical,
          typographical, or photographic errors. HackLeads will not promise that
          any of the materials in this Website are accurate, complete, or
          current. HackLeads may change the materials contained on its Website
          at any time without notice. HackLeads does not make any commitment to
          update the materials.
        </p>

        <Heading>6. Links</Heading>

        <p>
          HackLeads has not reviewed all of the sites linked to its Website and
          is not responsible for the contents of any such linked site. The
          presence of any link does not imply endorsement by HackLeads of the
          site. The use of any linked website is at the user’s own risk.
        </p>

        <Heading>7. Site Terms of Use Modifications</Heading>

        <p>
          HackLeads may revise these Terms of Use for its Website at any time
          without prior notice. By using this Website, you are agreeing to be
          bound by the current version of these Terms and Conditions of Use.
        </p>

        <Heading id="scam-typebots">8. Prohibition of Scam HackLeads</Heading>
        <p>
          You agree not to create or use HackLeads on HackLeads Website for the
          purpose of engaging in fraudulent activities, scamming individuals, or
          any other unethical or illegal activities. This includes but is not
          limited to HackLeads designed to deceive, defraud, or mislead people
          for financial gain or personal benefit. HackLeads reserves the right
          to take appropriate action, including the termination of any user
          account, if it determines that a HackLeads is being used in violation
          of this provision.
        </p>

        <Heading>9. Your Privacy</Heading>

        <p>
          Please read our{' '}
          <TextLink href={'/privacy-policies'}>Privacy Policy</TextLink>.
        </p>
      </Stack>
    </div>
  )
}

export default PrivacyPolicies
