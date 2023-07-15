import { createTransport, SendMailOptions } from 'nodemailer'
import { env } from '@typebot.io/lib'

export const sendEmail = async (
  props: Pick<SendMailOptions, 'to' | 'html' | 'subject'>
) => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const sended = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_SMTP_FROM ?? env('SMTP_FROM'),
    ...props,
  })

  return sended
}
