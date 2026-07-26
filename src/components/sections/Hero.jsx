"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export function Hero() {
  return (
    <section className="relative w-full bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-20">

        {/* Left: product image */}
        <div className="order-2 md:order-1 w-full max-h-[500px] aspect-[4/5] md:aspect-auto rounded-lg overflow-hidden">
          <img
            src="/Habesha.jpg"
            alt="Traditional Habesha clothing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: headline + CTA */}
        <div className="order-1 md:order-2 flex flex-col gap-4">
          <span className="text-sm tracking-widest uppercase text-neutral-500">
            Handmade in Ethiopia
          </span>

          <TextGenerateEffect
            words="Authentic Habesha Fashion"
            className="text-4xl md:text-6xl font-bold text-neutral-900"
          />

          <p className="text-neutral-600 max-w-md">
            Shop traditional Ethiopian clothing from independent Habesha designers, shipped to your door in the USA.
          </p>

          <div>
            <Link href="/shop">
              <Button size="lg">Shop Now</Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
