import { describe, it, expect, beforeEach } from 'vitest'
import type { OrdersRepository } from '../repositories/orders-repository'
import { InMemoryOrdersRepository } from '../repositories/in-memory/in-memory-orders-repository'
import { RefundUseCase } from './refund'
import { DoesNotExists } from './errors/does-not-exists'

let ordersRepository: OrdersRepository
let sut: RefundUseCase

describe('Refund Use Case', () => {
  beforeEach(async () => {
    ordersRepository = new InMemoryOrdersRepository()
    sut = new RefundUseCase(ordersRepository)
  })

  it('should be able to refund', async () => {
    const { id } = await ordersRepository.create({
      order_number: 1284,
      title: 'Pizza',
      image_url: 'https://localhost:3000/images/orders/pizza.jpg',
      price: 79.9,
    })

    const {
      order: { id: orderID },
      status,
    } = await sut.execute({ order_id: id })

    expect(status).toEqual(true)
    expect(id).toEqual(orderID)
  })

  it('should not be able to refund order that doest not exist', async () => {
    await expect(() => sut.execute({ order_id: 123 })).rejects.toBeInstanceOf(
      DoesNotExists,
    )
  })
})
