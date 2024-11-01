'use client'

import { orders } from '@/constants/orders'
import OrderCard from '../order-card'

export default function OrdersList() {
  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}
