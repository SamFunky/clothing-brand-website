import { motion } from "framer-motion"
import FadeImage from "./FadeImage"

const ease = [0.16, 1, 0.3, 1] as const

const lines = [
  "WE DON'T MAKE CLOTHES",
  "FOR DAYLIGHT PEOPLE.",
  "WE MAKE ARMOR FOR",
  "THE HOURS IN BETWEEN.",
]

const stats = [
  { value: "320+", label: "GSM cotton, garment-dyed" },
  { value: "14oz", label: "Japanese selvedge denim" },
  { value: "000", label: "Restocks. Ever." },
]

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative px-5 md:px-10 py-24 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="mb-8 block font-mono text-[11px] tracking-[0.4em] uppercase text-blood">
            /// Manifesto
          </span>
          {lines.map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                className={`font-display text-[clamp(2rem,5.5vw,5rem)] leading-[1.02] ${
                  i % 2 === 1 ? "text-dust" : "text-bone"
                }`}
              >
                {line}
              </motion.p>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-smoke pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-3xl md:text-5xl text-bone">
                  {stat.value}
                </span>
                <p className="mt-2 font-mono text-[10px] tracking-[0.15em] uppercase text-dust leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[3/4] overflow-hidden bg-ash">
            <FadeImage
              src="/images/manifesto.jpg"
              alt="VANTA detail shot"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-4 -left-4 bg-blood px-3 py-2 font-mono text-[10px] tracking-[0.25em] uppercase text-void">
            EST. 2026 — NO COMPROMISE
          </span>
        </motion.div>
      </div>
    </section>
  )
}
