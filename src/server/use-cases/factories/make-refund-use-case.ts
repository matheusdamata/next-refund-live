import { InMemoryOrdersRepository } from '@/server/repositories/in-memory/in-memory-orders-repository'
import { RefundUseCase } from '../refund'

export function makeRefundUseCase() {
  const ordersRepository = new InMemoryOrdersRepository()
  return new RefundUseCase(ordersRepository)
}
