import { isNotDefined } from '@typebot.io/lib'
import { getServerSession } from 'next-auth'
import { GetServerSidePropsContext } from 'next/types'
import { authOptions } from './api/auth/[...nextauth]'
import PartnerPage from '@/features/partner/components/PartnerPage'

const Partner = () => {
  return <PartnerPage />
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  if (isNotDefined(session?.user))
    return {
      redirect: {
        permanent: false,
        destination: `/signin?redirectPath=partner`,
      },
    }

  return {
    props: {},
  }
}

export default Partner
