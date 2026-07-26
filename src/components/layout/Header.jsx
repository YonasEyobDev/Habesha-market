"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useAuth } from "@/context/AuthContext"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

export function Header() {
  const { cartCount } = useCart()
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-neutral-200">
      {/* Top utility bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-xs text-neutral-500 border-b border-neutral-100">
        <span>Call Us: +1 (000) 000-0000</span>
        <span>Free delivery on orders over $200</span>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Mobile menu button */}
        <button className="md:hidden" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        <Link href="/" className="text-2xl font-bold tracking-tight">
          Habesha.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-neutral-500">Home</Link>
          <Link href="/#new-arrivals" className="hover:text-neutral-500">Shop</Link>
          <Link href="/#collections" className="hover:text-neutral-500">Collections</Link>
          <Link href="/#about" className="hover:text-neutral-500">About</Link>
          <Link href="/#contact" className="hover:text-neutral-500">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden md:inline-block">
            <Search className="w-5 h-5" />
          </button>

          <button aria-label="Wishlist" className="hidden md:inline-block">
            <Heart className="w-5 h-5" />
          </button>

          {user ? (
            <button onClick={logout} className="text-sm hover:text-neutral-500 hidden md:inline-block">
              Hi, {user.name}
            </button>
          ) : (
            <Link href="/login" aria-label="Account" className="hidden md:inline-block">
              <User className="w-5 h-5" />
            </Link>
          )}

          <Link href="/cart" className="relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-neutral-900 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="w-72">
          <SheetHeader>
            <SheetTitle>Habesha.</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-1 mt-6 px-4">
            <SheetClose asChild>
              <Link href="/" className="py-3 border-b border-neutral-100">Home</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/#new-arrivals" className="py-3 border-b border-neutral-100">Shop</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/#collections" className="py-3 border-b border-neutral-100">Collections</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/#about" className="py-3 border-b border-neutral-100">About</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/#contact" className="py-3 border-b border-neutral-100">Contact</Link>
            </SheetClose>

            <div className="flex items-center gap-6 mt-6 px-1">
              <button aria-label="Search"><Search className="w-5 h-5" /></button>
              <button aria-label="Wishlist"><Heart className="w-5 h-5" /></button>
              {user ? (
                <button onClick={() => { logout(); setMenuOpen(false) }} className="text-sm">
                  Hi, {user.name}
                </button>
              ) : (
                <SheetClose asChild>
                  <Link href="/login" aria-label="Account"><User className="w-5 h-5" /></Link>
                </SheetClose>
              )}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
