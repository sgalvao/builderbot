import { Seo } from '@/components/Seo'
import { TextLink } from '@/components/TextLink'
import { useScopedI18n } from '@/locales'
import { VStack, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SignInForm } from './SignInForm'

type Props = {
  type: 'signin' | 'signup'
  defaultEmail?: string
}

export const SignInPage = ({ type }: Props) => {
  const scopedT = useScopedI18n('auth')
  const { query } = useRouter()

  return (
    <VStack spacing={4} h="100vh" justifyContent="center">
      <Seo
        title={
          type === 'signin'
            ? scopedT('signin.heading')
            : scopedT('register.heading')
        }
      />
      <Heading
        onClick={() => {
          throw new Error('Sentry is working')
        }}
      >
        {type === 'signin'
          ? scopedT('signin.heading')
          : scopedT('register.heading')}
      </Heading>
      {type === 'signin' ? (
        <Text>
          {scopedT('signin.noAccountLabel.preLink')}{' '}
          <TextLink
            href={`/register${
              query.referralCode ? `?referralCode=${query.referralCode}` : ''
            }`}
          >
            {scopedT('signin.noAccountLabel.link')}
          </TextLink>
        </Text>
      ) : (
        <Text>
          {scopedT('register.alreadyHaveAccountLabel.preLink')}{' '}
          <TextLink
            href={`/signin${
              query.referralCode ? `?referralCode=${query.referralCode}` : ''
            }`}
          >
            {scopedT('register.alreadyHaveAccountLabel.link')}
          </TextLink>
        </Text>
      )}
      <SignInForm defaultEmail={query.g?.toString()} />
      <Text>
        Somos uma versão modificada do{' '}
        <TextLink href="https://typebot.io" isExternal>
          Typebot
        </TextLink>
      </Text>
      <Text>
        Veja nossas melhorias clicando{' '}
        <TextLink href="http://hackleads.com.br/about#features" isExternal>
          aqui
        </TextLink>
      </Text>
    </VStack>
  )
}
