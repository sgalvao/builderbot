import { env } from '@typebot.io/env'
import { Plan } from '@typebot.io/prisma'

export const parseWorkspaceDefaultPlan = () => {
  const defaultPlan = env.DEFAULT_WORKSPACE_PLAN as Plan
  if (defaultPlan && Object.values(Plan).includes(defaultPlan))
    return defaultPlan
  return Plan.FREE
}
