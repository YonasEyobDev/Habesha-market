"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/shop">
          <Button>Continue Shopping</Button>
        </Link>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-10">Shopping Cart</h1>

      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b border-neutral-200 pb-6">
            <div className="w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-neutral-500">${item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="w-8 h-8 border rounded flex items-center justify-center"
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 border rounded flex items-center justify-center"
              >
                +
              </button>
            </div>

            <span className="w-16 text-right font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </span>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-neutral-400 hover:text-red-500 text-sm ml-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <div className="w-full md:w-80 flex flex-col gap-4">
          <div className="flex justify-between text-lg font-medium">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link href="/checkout">
            <Button size="lg" className="w-full">Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
