export const orders = [
  {
    id: 1,
    title: 'Pizza',
    price: 79.9,
    order_number: 1284,
    image_url: '/images/orders/pizza.jpg',
  },
  {
    id: 2,
    title: 'Salada',
    price: 19.75,
    order_number: 1285,
    image_url: '/images/orders/salada.jpg',
  },
]

type Order = (typeof orders)[number]
export type OrderProps = Order
