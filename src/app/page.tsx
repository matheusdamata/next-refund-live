import OrdersList from '@/components/orders-list'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col gap-4">
        <div className="">
          <h1 className="text-xl font-semibold">Solicitação de Reembolso</h1>
          <p className="text-muted-foreground">
            Selecione um pedido para solicitar reembolso.
          </p>
        </div>

        <OrdersList />
      </div>
    </div>
  )
}
