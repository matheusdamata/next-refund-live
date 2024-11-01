type RefundUseCaseRequest = {
  order_id: number
}

type RefundUseCaseResponse = {
  status: boolean
}

export class RefundUseCase {
  async execute({
    order_id,
  }: RefundUseCaseRequest): Promise<RefundUseCaseResponse> {
    console.log('$ use-case (refund):', order_id)

    return {
      status: true,
    }
  }
}
