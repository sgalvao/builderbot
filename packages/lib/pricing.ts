import type { Workspace } from '@typebot.io/prisma'
import { Plan } from '@typebot.io/prisma'

const infinity = -1

export const prices = {
  [Plan.STARTER]: 127,
  [Plan.PRO]: 387,
} as const

export const chatsLimit = {
  [Plan.FREE]: { totalIncluded: 200 },
  [Plan.STARTER]: {
    graduatedPrice: [
      { totalIncluded: 2000, price: 0 },
      {
        totalIncluded: 2500,
        price: 38.5,
      },
      {
        totalIncluded: 3000,
        price: 77,
      },
      {
        totalIncluded: 3500,
        price: 115.5,
      },
    ],
  },
  [Plan.PRO]: {
    graduatedPrice: [
      { totalIncluded: 10000, price: 0 },
      { totalIncluded: 15000, price: 150 },
      { totalIncluded: 25000, price: 450 },
      { totalIncluded: 50000, price: 1200 },
    ],
  },
  [Plan.CUSTOM]: {
    totalIncluded: 2000,
    increaseStep: {
      amount: 500,
      price: 10,
    },
  },
  [Plan.OFFERED]: { totalIncluded: infinity },
  [Plan.LIFETIME]: { totalIncluded: infinity },
  [Plan.UNLIMITED]: { totalIncluded: infinity },
} as const

export const storageLimit = {
  [Plan.FREE]: { totalIncluded: 0 },
  [Plan.STARTER]: {
    graduatedPrice: [
      { totalIncluded: 2, price: 0 },
      {
        totalIncluded: 3,
        price: 10,
      },
      {
        totalIncluded: 4,
        price: 20,
      },
      {
        totalIncluded: 5,
        price: 30,
      },
    ],
  },
  [Plan.PRO]: {
    graduatedPrice: [
      { totalIncluded: 10, price: 0 },
      {
        totalIncluded: 15,
        price: 50,
      },
      {
        totalIncluded: 25,
        price: 150,
      },
      {
        totalIncluded: 40,
        price: 178.89,
      },
    ],
  },
  [Plan.CUSTOM]: {
    totalIncluded: 2,
    increaseStep: {
      amount: 1,
      price: 2,
    },
  },
  [Plan.OFFERED]: { totalIncluded: 2 },
  [Plan.LIFETIME]: { totalIncluded: 10 },
  [Plan.UNLIMITED]: { totalIncluded: infinity },
} as const

export const seatsLimit = {
  [Plan.FREE]: { totalIncluded: 1 },
  [Plan.STARTER]: {
    totalIncluded: 2,
  },
  [Plan.PRO]: {
    totalIncluded: 5,
  },
  [Plan.CUSTOM]: {
    totalIncluded: 2,
  },
  [Plan.OFFERED]: { totalIncluded: 2 },
  [Plan.LIFETIME]: { totalIncluded: 8 },
  [Plan.UNLIMITED]: { totalIncluded: infinity },
} as const

export const getChatsLimit = ({
  plan,
  additionalChatsIndex,
  customChatsLimit,
}: Pick<Workspace, 'additionalChatsIndex' | 'plan' | 'customChatsLimit'>) => {
  if (customChatsLimit) return customChatsLimit
  const totalIncluded =
    plan === Plan.STARTER || plan === Plan.PRO
      ? chatsLimit[plan].graduatedPrice[additionalChatsIndex].totalIncluded
      : chatsLimit[plan].totalIncluded
  return totalIncluded
}

export const getStorageLimit = ({
  plan,
  additionalStorageIndex,
  customStorageLimit,
}: Pick<
  Workspace,
  'additionalStorageIndex' | 'plan' | 'customStorageLimit'
>) => {
  if (customStorageLimit) return customStorageLimit
  const totalIncluded =
    plan === Plan.STARTER || plan === Plan.PRO
      ? storageLimit[plan].graduatedPrice[additionalStorageIndex].totalIncluded
      : storageLimit[plan].totalIncluded
  return totalIncluded
}

export const getSeatsLimit = ({
  plan,
  customSeatsLimit,
}: Pick<Workspace, 'plan' | 'customSeatsLimit'>) => {
  if (customSeatsLimit) return customSeatsLimit
  return seatsLimit[plan].totalIncluded
}

export const isSeatsLimitReached = ({
  existingMembersAndInvitationsCount,
  plan,
  customSeatsLimit,
}: {
  existingMembersAndInvitationsCount: number
} & Pick<Workspace, 'plan' | 'customSeatsLimit'>) => {
  const seatsLimit = getSeatsLimit({ plan, customSeatsLimit })
  return (
    seatsLimit !== infinity && seatsLimit <= existingMembersAndInvitationsCount
  )
}

export const computePrice = (
  plan: Plan,
  selectedTotalChatsIndex: number,
  selectedTotalStorageIndex: number,
  frequency: 'monthly' | 'yearly'
) => {
  if (plan !== Plan.STARTER && plan !== Plan.PRO) return
  const price =
    prices[plan] +
    chatsLimit[plan].graduatedPrice[selectedTotalChatsIndex].price +
    storageLimit[plan].graduatedPrice[selectedTotalStorageIndex].price
  return frequency === 'monthly' ? price : price - price * 0.16
}

export const formatPrice = (
  price: number,
  currency?: 'eur' | 'usd' | 'brl'
) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })
  return formatter.format(price)
}
