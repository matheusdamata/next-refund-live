import type { orders } from '@/constants/orders'

type Order = (typeof orders)[number]
export type OrderProps = Order
