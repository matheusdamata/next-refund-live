import { z } from 'zod'

export const refundBodySchema = z.object({
  order_id: z.coerce.number({ required_error: 'ID é obrigatório.' }),
})
