import { refundBodySchema } from '@/schemas/refund'
import { DoesNotExists } from '@/server/use-cases/errors/does-not-exists'
import { makeRefundUseCase } from '@/server/use-cases/factories/make-refund-use-case'
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

  const refundUseCase = makeRefundUseCase()

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
    if (error instanceof DoesNotExists)
      return NextResponse.json(
        {
          message: 'Pedido não encontrado!',
        },
        {
          status: 404,
        },
      )

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
