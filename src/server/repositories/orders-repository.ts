import type { OrderProps } from '@/@types/order'

type CreateProps = {
  title: string
  price: number
  order_number: number
  image_url: string
}

export interface OrdersRepository {
  create(props: CreateProps): Promise<OrderProps>
  findByID(id: number): Promise<OrderProps | null>
}
