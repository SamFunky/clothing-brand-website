import { motion } from "framer-motion"
import { useState } from "react"
import { products, type Product } from "../data/products"
import FadeImage from "./FadeImage"

const ease = [0.16, 1, 0.3, 1] as const
const categories = ["All", "Tees", "Hoodies", "Crewnecks", "Denim"] as const

type Props = {
  onAdd: (product: Product) => void
}

export default function ProductGrid({ onAdd }: Props) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All")
  const visible =
    filter === "All" ? products : products.filter((p) => p.category === filter)

  return (
    <section id="shop" className="px-5 md:px-10 py-24 md:py-32">
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-bone"
        >
          DROP 004
          <span className="block text-stroke-blood">THE VAULT</span>
        </motion.h2>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`cursor-pointer border px-4 py-2 font-mono text-[10px] tracking-[0.25em] uppercase transition-all duration-300 ${
                filter === cat
                  ? "border-blood bg-blood text-void"
                  : "border-smoke text-dust hover:border-bone hover:text-bone"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-smoke border border-smoke">
        {visible.map((product, i) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease, delay: (i % 4) * 0.08 }}
            className="group relative bg-void"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-ash">
              <FadeImage
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 bg-blood px-2 py-1 font-mono text-[9px] tracking-[0.2em] uppercase text-void">
                  {product.tag}
                </span>
              )}
              <button
                onClick={() => onAdd(product)}
                className="absolute bottom-0 left-0 right-0 translate-y-full bg-bone py-3 font-mono text-[11px] tracking-[0.3em] uppercase text-void transition-transform duration-400 ease-out group-hover:translate-y-0 cursor-pointer hover:bg-blood"
              >
                Add to Cart — ${product.price}
              </button>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
              <div>
                <h3 className="font-body font-medium text-sm text-bone">
                  {product.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-dust">
                  {product.weight} · {product.category}
                </p>
              </div>
              <span className="font-mono text-sm text-bone/80">
                ${product.price}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
