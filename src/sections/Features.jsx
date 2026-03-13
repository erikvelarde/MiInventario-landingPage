import { Package, ShoppingCart, AlertTriangle, BarChart3, ClipboardList, Layers } from "lucide-react"

const features = [
  {
    icon: Package,
    title: "Control de inventario",
    text: "Sabrás exactamente cuántas unidades tienes de cada producto."
  },
  {
    icon: ShoppingCart,
    title: "Registro rápido de ventas",
    text: "Registra ventas en segundos y el stock se actualiza automáticamente."
  },
  {
    icon: AlertTriangle,
    title: "Alertas de stock mínimo",
    text: "El sistema te avisará cuando un producto esté por acabarse."
  },
  {
    icon: ClipboardList,
    title: "Registro de compras",
    text: "Controla tus compras a proveedores fácilmente."
  },
  {
    icon: Layers,
    title: "Control por lotes",
    text: "Maneja fechas de vencimiento y diferentes lotes de productos."
  },
  {
    icon: BarChart3,
    title: "Productos más vendidos",
    text: "Descubre qué productos se venden más en tu tienda."
  }
]

export default function Features() {
  return (
    <section className="py-24 px-6" id="features">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center">
          Lo que podrás hacer con MiInventario
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {features.map((feature, i) => {

            const Icon = feature.icon

            return (
              <div
                key={i}
                className="bg-macchiato-surface0 p-6 rounded-xl border border-macchiato-surface1"
              >

                <Icon className="text-macchiato-blue mb-4" size={32} />

                <h3 className="font-semibold text-lg">
                  {feature.title}
                </h3>

                <p className="text-macchiato-subtext1 mt-2">
                  {feature.text}
                </p>

              </div>
            )

          })}

        </div>

      </div>

    </section>
  )
}
