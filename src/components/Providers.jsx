"use client"

import { AuthProvider } from "@/context/AuthContext"
import { CartProvider } from "@/context/CartContext"

// Next.js's root layout.jsx is a Server Component by default and can't
// use hooks/context directly. This small wrapper is the standard pattern:
// one "use client" boundary that holds both providers, imported once
// into the server-side layout.
export function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  )
}
