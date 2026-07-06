import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import FadeImage from "./FadeImage"

const ease = [0.16, 1, 0.3, 1] as const

const looks = [
  {
    src: "/images/look-1.jpg",
    caption: "Look 01 — Shroud Hoodie / Crater Denim",
    span: "md:col-span-7 md:row-span-2",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/look-2.jpg",
    caption: "Look 02 — Eclipse Tee / Faultline Denim",
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/images/look-3.jpg",
    caption: "Look 03 — Monolith Crewneck",
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
]

export default function Lookbook() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section id="lookbook" ref={ref} className="relative overflow-hidden bg-coal py-24 md:py-32">
      <motion.span
        style={{ y: bgY }}
        aria-hidden
        className="pointer-events-none absolute -top-10 left-0 font-display text-[clamp(8rem,25vw,24rem)] leading-none text-ash select-none"
      >
        AFTER
      </motion.span>

      <div className="relative px-5 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="mb-16 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-bone"
        >
          AFTER HOURS
          <span className="block font-mono text-xs tracking-[0.4em] uppercase text-dust mt-4 font-normal">
            FW26 Lookbook — shot on location, 3:47 AM
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {looks.map((look, i) => (
            <motion.figure
              key={look.src}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.1 }}
              className={`group relative overflow-hidden ${look.span}`}
            >
              <div className={`${look.ratio} md:aspect-auto md:h-full overflow-hidden bg-ash`}>
                <FadeImage
                  src={look.src}
                  alt={look.caption}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-void/90 to-transparent p-5 pt-16">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-bone/80">
                  {look.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
