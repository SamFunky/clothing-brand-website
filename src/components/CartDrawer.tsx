import { AnimatePresence, motion } from "framer-motion"
import type { Product } from "../data/products"
import FadeImage from "./FadeImage"

export type CartItem = {
  product: Product
  qty: number
}

type Props = {
  open: boolean
  items: CartItem[]
  onClose: () => void
  onRemove: (id: string) => void
  onQty: (id: string, delta: number) => void
}

const ease = [0.16, 1, 0.3, 1] as const

export default function CartDrawer({ open, items, onClose, onRemove, onQty }: Props) {
  const total = items.reduce((sum, i) => sum + i.product.price * i.qty, 0)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-void/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease }}
            className="fixed top-0 right-0 bottom-0 z-[70] flex w-full max-w-md flex-col border-l border-smoke bg-coal"
          >
            <div className="flex items-center justify-between border-b border-smoke px-6 py-5">
              <span className="font-display text-xl tracking-[0.15em] text-bone">
                CART
              </span>
              <button
                onClick={onClose}
                className="font-mono text-[11px] tracking-[0.25em] uppercase text-dust hover:text-blood transition-colors cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3">
                  <span className="font-display text-3xl text-smoke">EMPTY</span>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-dust">
                    The void awaits your order
                  </p>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map(({ product, qty }) => (
                    <li key={product.id} className="flex gap-4">
                      <div className="h-24 w-20 shrink-0 overflow-hidden bg-ash">
                        <FadeImage
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between py-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-body text-sm font-medium text-bone">
                              {product.name}
                            </h4>
                            <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-dust">
                              {product.weight}
                            </p>
                          </div>
                          <button
                            onClick={() => onRemove(product.id)}
                            className="font-mono text-[10px] text-dust hover:text-blood transition-colors cursor-pointer"
                            aria-label={`Remove ${product.name}`}
                          >
                            ✕
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-smoke">
                            <button
                              onClick={() => onQty(product.id, -1)}
                              className="px-3 py-1 font-mono text-xs text-dust hover:text-bone transition-colors cursor-pointer"
                            >
                              −
                            </button>
                            <span className="px-2 font-mono text-xs text-bone">
                              {qty}
                            </span>
                            <button
                              onClick={() => onQty(product.id, 1)}
                              className="px-3 py-1 font-mono text-xs text-dust hover:text-bone transition-colors cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-mono text-sm text-bone">
                            ${product.price * qty}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-smoke px-6 py-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-dust">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl text-bone">
                    ${total}
                  </span>
                </div>
                <button className="w-full bg-bone py-4 font-mono text-[12px] tracking-[0.3em] uppercase text-void transition-colors duration-300 hover:bg-blood cursor-pointer">
                  Checkout →
                </button>
                <p className="mt-3 text-center font-mono text-[9px] tracking-[0.2em] uppercase text-dust/60">
                  Free shipping over $200 · No returns on drops
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
