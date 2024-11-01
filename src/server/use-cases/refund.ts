import type { OrderProps } from '@/@types/order'
import type { OrdersRepository } from '../repositories/orders-repository'
import { DoesNotExists } from './errors/does-not-exists'

type RefundUseCaseRequest = {
  order_id: number
}

type RefundUseCaseResponse = {
  order: OrderProps
  status: boolean
}

export class RefundUseCase {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({
    order_id,
  }: RefundUseCaseRequest): Promise<RefundUseCaseResponse> {
    const order = await this.ordersRepository.findByID(order_id)

    if (!order) throw new DoesNotExists()

    return {
      order,
      status: true,
    }
  }
}
