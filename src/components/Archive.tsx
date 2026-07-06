import { motion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const

const drops = [
  { id: "001", name: "GENESIS", date: "JAN 2026", status: "SOLD OUT" },
  { id: "002", name: "BLACKOUT", date: "MAR 2026", status: "SOLD OUT" },
  { id: "003", name: "STATIC", date: "MAY 2026", status: "SOLD OUT" },
  { id: "004", name: "THE VAULT", date: "JUL 2026", status: "LIVE NOW" },
]

export default function Archive() {
  return (
    <section id="archive" className="border-t border-smoke bg-coal px-5 md:px-10 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="mb-12 font-display text-[clamp(2.5rem,6vw,5rem)] text-bone"
      >
        DROP ARCHIVE
      </motion.h2>

      <div>
        {drops.map((drop, i) => (
          <motion.a
            key={drop.id}
            href="#shop"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.08 }}
            className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[100px_1fr_200px_150px] items-center gap-4 md:gap-8 border-b border-smoke py-6 transition-colors duration-300 hover:bg-ash"
          >
            <span className="font-mono text-sm text-dust group-hover:text-blood transition-colors duration-300">
              /{drop.id}
            </span>
            <span className="font-display text-2xl md:text-4xl tracking-wide text-bone group-hover:translate-x-2 transition-transform duration-500">
              {drop.name}
            </span>
            <span className="hidden md:block font-mono text-[11px] tracking-[0.25em] text-dust">
              {drop.date}
            </span>
            <span
              className={`justify-self-end font-mono text-[10px] tracking-[0.25em] uppercase px-3 py-1 border ${
                drop.status === "LIVE NOW"
                  ? "border-blood text-blood"
                  : "border-smoke text-dust"
              }`}
            >
              {drop.status}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
