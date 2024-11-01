import type { OrderProps } from '@/@types/order'
import { OrdersRepository } from '../orders-repository'

export class InMemoryOrdersRepository implements OrdersRepository {
  public orders: OrderProps[] = []

  async create(props: OrderProps) {
    const data = {
      ...props,
      id: this.orders.length + 1,
    }

    this.orders.push(data)

    return data
  }

  async findByID(id: number) {
    const order = this.orders.find((item) => item.id === id)

    if (!order) return null

    return order
  }
}
