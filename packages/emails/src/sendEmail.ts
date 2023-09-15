import { createTransport, SendMailOptions } from 'nodemailer'
import { env } from '@typebot.io/env'

export const sendEmail = async (
  props: Pick<SendMailOptions, 'to' | 'html' | 'subject'>
) => {
  const transporter = createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    auth: {
      user: env.SMTP_USERNAME,
      pass: env.SMTP_PASSWORD,
    },
  })

  const sended = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_SMTP_FROM,
    ...props,
  })

  return sended
}
