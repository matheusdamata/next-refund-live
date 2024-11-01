import { refundBodySchema } from '@/schemas/refund'
import { RefundUseCase } from '@/server/use-cases/refund'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { success, data } = refundBodySchema.safeParse(await req.json())

  if (!success)
    return NextResponse.json(
      {
        message: 'Corpo da requisição inválido.',
      },
      {
        status: 400,
      },
    )

  const refundUseCase = new RefundUseCase()

  try {
    await refundUseCase.execute({ order_id: data.order_id })

    return NextResponse.json(
      {
        message: 'Sucesso',
      },
      {
        status: 200,
      },
    )
  } catch (error) {
    console.log('$ erro:', error)

    return NextResponse.json(
      {
        message: 'Ops! Ocorreu algum erro interno.',
      },
      {
        status: 500,
      },
    )
  }
}
