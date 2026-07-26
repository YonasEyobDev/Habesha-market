import Link from "next/link"
import { collections } from "@/data/collections"

export function CollectionsSection() {
  return (
    <section id="collections" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-10 text-center">Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((c) => (
          <Link
            key={c.slug}
            href="/shop"
            className="group relative aspect-[4/5] rounded-lg overflow-hidden"
          >
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">{c.title}</h3>
              <p className="text-white/80 text-sm">{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
