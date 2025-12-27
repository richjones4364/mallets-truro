import { Key, Scissors, Truck, Paintbrush } from "lucide-react"

const services = [
  {
    icon: Key,
    name: "Key Cutting",
    description: "Professional key cutting service",
  },
  {
    icon: Scissors,
    name: "Blade Sharpening",
    description: "Sharpen your knives and tools",
  },
  {
    icon: Truck,
    name: "Local Delivery",
    description: "Convenient delivery service",
  },
  {
    icon: Paintbrush,
    name: "Paint Mixing",
    description: "Custom paint colour matching",
  },
]

export function ServiceBar() {
  return (
    <section className="border-y bg-secondary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-serif font-bold text-primary">
            Our Services
          </h2>
          <p className="text-secondary">
            Expert services to help you with your projects
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className="group flex flex-col items-center rounded-lg border bg-card p-6 text-center transition-all hover:shadow-md"
              >
                <div className="mb-4 rounded-full bg-primary/10 p-4 transition-transform group-hover:scale-110">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-primary">
                  {service.name}
                </h3>
                <p className="text-sm text-secondary">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

