import { ProductCard } from "@/components/product/ProductCard"
import { products } from "@/data/products"

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24">
      <h2 className="text-2xl font-bold text-center mb-10">New Arrivals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
