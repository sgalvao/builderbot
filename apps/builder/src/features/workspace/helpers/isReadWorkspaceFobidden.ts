import { MemberInWorkspace, User } from '@typebot.io/prisma'

export const isReadWorkspaceFobidden = (
  workspace: {
    members: Pick<MemberInWorkspace, 'userId'>[]
  },
  user: Pick<User, 'email' | 'id'>
) => {
  if (workspace.members.find((member) => member.userId === user.id))
    return false
  return true
}
