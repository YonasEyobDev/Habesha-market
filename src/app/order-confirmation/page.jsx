import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OrderConfirmation() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h1 className="text-2xl font-bold mb-4">Order placed!</h1>
      <p className="text-neutral-500 mb-8">This is a placeholder — real order confirmation arrives once the backend is connected.</p>
      <Link href="/shop">
        <Button>Continue Shopping</Button>
      </Link>
    </section>
  )
}
