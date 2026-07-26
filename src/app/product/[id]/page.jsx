"use client"

export const dynamic = "force-dynamic"

import { useState } from "react"
import { useParams } from "next/navigation"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === Number(id))

  const suggestions = product
    ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
    : []

  if (!product) {
    return <p className="max-w-7xl mx-auto px-6 py-16">Product not found.</p>
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <span className="text-xl">${product.price}</span>
            {product.oldPrice && (
              <span className="text-neutral-400 line-through">${product.oldPrice}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 border rounded flex items-center justify-center"
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 border rounded flex items-center justify-center"
            >
              +
            </button>
          </div>

          <Button size="lg" onClick={() => addToCart(product, quantity)}>
            Add to Cart
          </Button>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="mt-20">
          <h2 className="text-xl font-bold mb-8">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {suggestions.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
