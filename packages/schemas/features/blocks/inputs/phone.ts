import { z } from 'zod'
import { optionBaseSchema, blockBaseSchema } from '../baseSchemas'
import { defaultButtonLabel } from './constants'
import { InputBlockType } from './enums'
import { textInputOptionsBaseSchema } from './text'

export const phoneNumberInputOptionsSchema = optionBaseSchema
  .merge(textInputOptionsBaseSchema)
  .merge(
    z.object({
      retryMessageContent: z.string(),
      defaultCountryCode: z.string().optional(),
    })
  )

export const phoneNumberInputBlockSchema = blockBaseSchema.merge(
  z.object({
    type: z.enum([InputBlockType.PHONE]),
    options: phoneNumberInputOptionsSchema,
  })
)

export const defaultPhoneInputOptions: PhoneNumberInputOptions = {
  labels: {
    button: defaultButtonLabel,
    placeholder: 'Digite seu número de telefone...',
  },
  retryMessageContent:
    'Este número de telefone não parece válido. Poderia digitar novamente?',
}

export type PhoneNumberInputBlock = z.infer<typeof phoneNumberInputBlockSchema>
export type PhoneNumberInputOptions = z.infer<
  typeof phoneNumberInputOptionsSchema
>
