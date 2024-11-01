'use client'

import { formatPrice } from '@/utils/format-price'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardContent } from '../ui/card'
import type { OrderProps } from '@/constants/orders'
import Image from 'next/image'

type OrderCardProps = {
  order: OrderProps
}

export default function OrderCard({ order }: OrderCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit() {
    setIsLoading(true)

    await new Promise((resolve) =>
      setTimeout(() => {
        setIsLoading(false)
        resolve(true)
      }, 1500),
    )
  }

  return (
    <Card key={order.id}>
      <CardHeader>Pedido #{order.order_number}</CardHeader>
      <CardContent className="flex flex-col gap-4 justify-between">
        <div className="flex flex-row gap-4">
          <div className="w-[50px] h-[50px] rounded-lg overflow-hidden">
            <Image
              src={order.image_url}
              alt={order.title}
              width={550}
              height={550}
            />
          </div>

          <div className="flex flex-col flex-1">
            <h3>{order.title}</h3>
            <span className="font-semibold text-green-500">
              {formatPrice(order.price)}
            </span>
          </div>
        </div>

        <Button isLoading={isLoading} onClick={handleSubmit}>
          Reembolsar
        </Button>
      </CardContent>
    </Card>
  )
}
