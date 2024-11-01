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

  async function handleRefund() {
    setIsLoading(true)

    const data = {
      order_id: order.id,
    }

    try {
      const res = await fetch('/api/refund', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log('$ res', await res.json())
    } catch (error) {
      console.log('$ erro:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card key={order.id}>
      <CardHeader className="font-semibold">
        Pedido #{order.order_number}
      </CardHeader>
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

        <Button isLoading={isLoading} onClick={handleRefund}>
          Reembolsar
        </Button>
      </CardContent>
    </Card>
  )
}
