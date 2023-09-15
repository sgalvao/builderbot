import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { isDefined, isNotDefined } from '@typebot.io/lib'
import { User } from '@typebot.io/prisma'
import { setUser as setSentryUser } from '@sentry/nextjs'
import { useToast } from '@/hooks/useToast'
import { updateUserQuery } from './queries/updateUserQuery'
import { useDebouncedCallback } from 'use-debounce'
import { env } from '@typebot.io/env'
import { identifyUser } from '../telemetry/posthog'
import { useColorMode } from '@chakra-ui/react'

export const userContext = createContext<{
  user?: User
  isLoading: boolean
  currentWorkspaceId?: string
  updateUser: (newUser: Partial<User>) => void
}>({
  isLoading: false,
  updateUser: () => {
    console.log('updateUser not implemented')
  },
})

const debounceTimeout = 1000

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [user, setUser] = useState<User | undefined>()
  const { showToast } = useToast()
  const [currentWorkspaceId, setCurrentWorkspaceId] = useState<string>()
  const { setColorMode } = useColorMode()

  useEffect(() => {
    if (
      !user?.preferredAppAppearance ||
      user.preferredAppAppearance === 'system'
    )
      return
    const currentColorScheme = localStorage.getItem('chakra-ui-color-mode') as
      | 'light'
      | 'dark'
      | null
    if (currentColorScheme === user.preferredAppAppearance) return
    setColorMode(user.preferredAppAppearance)
  }, [setColorMode, user?.preferredAppAppearance])

  const handlePartner = async (userParams: User, partnerCode: string) => {
    try {
      await updateUserQuery(userParams.id, { ...userParams, partnerCode })
    } catch (e) {
      showToast({
        title: 'Parceiro não encontrado',
        description: 'O parceiro indicado não foi encontrado',
      })
    }
  }

  useEffect(() => {
    if (isDefined(user) || isNotDefined(session)) return
    setCurrentWorkspaceId(
      localStorage.getItem('currentWorkspaceId') ?? undefined
    )
    const ref = router.query.referralCode

    const parsedUser = session.user as User
    setUser(parsedUser)

    if (parsedUser?.id) {
      setSentryUser({ id: parsedUser.id })
      identifyUser(parsedUser.id)
    }
  }, [session, user])

  useEffect(() => {
    if (!router.isReady) return
    if (status === 'loading') return
    const isSigningIn = () => ['/signin', '/register'].includes(router.pathname)
    if (!user && status === 'unauthenticated' && !isSigningIn())
      router.replace({
        pathname: '/signin',
        query:
          router.pathname !== '/hackleads'
            ? {
                redirectPath: router.asPath,
              }
            : undefined,
      })
  }, [router, status, user])

  const updateUser = (updates: Partial<User>) => {
    if (isNotDefined(user)) return
    const newUser = { ...user, ...updates }
    setUser(newUser)
    saveUser(newUser)
  }

  const saveUser = useDebouncedCallback(
    async (newUser?: Partial<User>) => {
      if (isNotDefined(user)) return
      const { error } = await updateUserQuery(user.id, { ...user, ...newUser })
      if (error) showToast({ title: error.name, description: error.message })
      await refreshUser()
    },
    env.NEXT_PUBLIC_E2E_TEST ? 0 : debounceTimeout
  )

  useEffect(() => {
    return () => {
      saveUser.flush()
    }
  }, [saveUser])

  return (
    <userContext.Provider
      value={{
        user,
        isLoading: status === 'loading',
        currentWorkspaceId,
        updateUser,
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export const refreshUser = async () => {
  await fetch('/api/auth/session?update')
  reloadSession()
}

const reloadSession = () => {
  const event = new Event('visibilitychange')
  document.dispatchEvent(event)
}
