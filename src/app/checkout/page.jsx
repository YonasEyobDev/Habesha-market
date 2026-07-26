"use client"

export const dynamic = "force-dynamic"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

export default function Checkout() {
  const { cartItems } = useCart()
  const router = useRouter()

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Order placed (fake):", { form, cartItems, subtotal })
    router.push("/order-confirmation")
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Shipping Details</h1>

        <input
          name="fullName" value={form.fullName} onChange={handleChange}
          placeholder="Full Name" required
          className="border border-neutral-300 rounded-lg px-4 py-2"
        />
        <input
          name="email" type="email" value={form.email} onChange={handleChange}
          placeholder="Email" required
          className="border border-neutral-300 rounded-lg px-4 py-2"
        />
        <input
          name="address" value={form.address} onChange={handleChange}
          placeholder="Street Address" required
          className="border border-neutral-300 rounded-lg px-4 py-2"
        />
        <div className="grid grid-cols-3 gap-4">
          <input
            name="city" value={form.city} onChange={handleChange}
            placeholder="City" required
            className="border border-neutral-300 rounded-lg px-4 py-2"
          />
          <input
            name="state" value={form.state} onChange={handleChange}
            placeholder="State" required
            className="border border-neutral-300 rounded-lg px-4 py-2"
          />
          <input
            name="zip" value={form.zip} onChange={handleChange}
            placeholder="ZIP" required
            className="border border-neutral-300 rounded-lg px-4 py-2"
          />
        </div>

        <Button size="lg" type="submit" className="mt-4">
          Place Order
        </Button>
        <p className="text-xs text-neutral-400">
          Payment will be collected securely via Stripe (coming once backend is connected).
        </p>
      </form>

      <div className="bg-neutral-50 rounded-lg p-6 h-fit">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        <div className="flex flex-col gap-3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-medium text-lg mt-4 pt-4 border-t border-neutral-200">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </section>
  )
}
