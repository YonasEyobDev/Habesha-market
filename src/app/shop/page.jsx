"use client"

export const dynamic = "force-dynamic"

import { Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product/ProductCard"
import { products } from "@/data/products"

const categories = [
  { label: "All", value: null },
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Kids", value: "kids" },
]

function ShopContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")

  const filtered = category
    ? products.filter((p) => p.category === category)
    : products

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-6">Shop</h1>

      <div className="flex items-center gap-3 mb-10">
        {categories.map((c) => (
          <Link
            key={c.label}
            href={c.value ? `/shop?category=${c.value}` : "/shop"}
            className={`px-4 py-2 rounded-full text-sm border ${
              category === c.value
                ? "bg-neutral-900 text-white border-neutral-900"
                : "border-neutral-300 text-neutral-600 hover:border-neutral-500"
            }`}
          >
            {c.label}
          </Link>
        ))}
        <span className="px-4 py-2 rounded-full text-sm border border-dashed border-neutral-300 text-neutral-400">
          More coming soon
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="text-neutral-500">No products in this category yet.</p>
      )}
    </section>
  )
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-16">Loading...</div>}>
      <ShopContent />
    </Suspense>
  )
}