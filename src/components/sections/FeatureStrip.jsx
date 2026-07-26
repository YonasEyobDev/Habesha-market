import { Truck, Clock, RotateCcw } from "lucide-react"

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $200" },
  { icon: Clock, title: "Support 24/7", desc: "Dedicated support" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
]

export function FeatureStrip() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16">
      {features.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="flex flex-col items-center text-center gap-2">
          <Icon className="w-8 h-8 text-neutral-700" />
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-neutral-500">{desc}</p>
        </div>
      ))}
    </section>
  )
}
