import { executePrismaCommand } from './executeCommand'

if (process.env.DATABASE_URL_ENV?.startsWith('postgresql://'))
  executePrismaCommand('prisma migrate deploy')
