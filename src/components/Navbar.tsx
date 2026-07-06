import { motion } from "framer-motion"

type Props = {
  cartCount: number
  onCartOpen: () => void
}

const links = ["Shop", "Lookbook", "Manifesto", "Archive"]

export default function Navbar({ cartCount, onCartOpen }: Props) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <nav className="flex items-center justify-between px-5 md:px-10 py-5">
        <a
          href="#top"
          className="font-display text-2xl tracking-[0.2em] text-bone"
        >
          VANTA
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-mono text-[11px] tracking-[0.25em] uppercase text-bone/70 hover:text-bone transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={onCartOpen}
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-bone hover:text-bone/60 transition-colors duration-300 cursor-pointer"
        >
          Cart [{cartCount}]
        </button>
      </nav>
    </motion.header>
  )
}
