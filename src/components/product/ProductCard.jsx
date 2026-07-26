import Link from "next/link"

export function ProductCard({ id, image, name, price, oldPrice }) {
  return (
    <Link href={`/product/${id}`} className="group flex flex-col gap-3">
      <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium">{name}</h3>
        <div className="flex items-center gap-2 text-sm">
          <span>${price}</span>
          {oldPrice && <span className="text-neutral-400 line-through">${oldPrice}</span>}
        </div>
      </div>
    </Link>
  )
}
