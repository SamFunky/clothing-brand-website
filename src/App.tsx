import { useEffect, useState } from "react"
import Lenis from "lenis"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import ProductGrid from "./components/ProductGrid"
import Lookbook from "./components/Lookbook"
import Manifesto from "./components/Manifesto"
import Archive from "./components/Archive"
import Footer from "./components/Footer"
import CartDrawer, { type CartItem } from "./components/CartDrawer"
import type { Product } from "./data/products"

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, anchors: true })
    let rafId: number
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        )
      }
      return [...prev, { product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id: string) =>
    setCart((prev) => prev.filter((i) => i.product.id !== id))

  const changeQty = (id: string, delta: number) =>
    setCart((prev) =>
      prev
        .map((i) =>
          i.product.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i,
        )
        .filter((i) => i.qty > 0),
    )

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="grain min-h-screen bg-void">
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Marquee />
        <ProductGrid onAdd={addToCart} />
        <Lookbook />
        <Manifesto />
        <Archive />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQty={changeQty}
      />
    </div>
  )
}
