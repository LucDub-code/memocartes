import { z } from "zod"

export const cardSchema = z.object({
  question: z.string().min(1, { message: "La question est obligatoire." }),
  answer: z.string().min(1, { message: "La réponse est obligatoire." }),
  category: z.string().min(1, { message: "La catégorie est obligatoire." }),
})

export type CardFormData = z.infer<typeof cardSchema>