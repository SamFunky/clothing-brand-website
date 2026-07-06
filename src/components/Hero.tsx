import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import FadeImage from "./FadeImage"

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0])

  return (
    <section ref={ref} id="top" className="relative h-svh overflow-hidden">
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <FadeImage
          src="/images/hero.jpg"
          alt="VANTA campaign"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-void/40" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-16 px-5 md:px-10"
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.1 }}
            className="font-display text-[clamp(4.5rem,17vw,16rem)] leading-[0.85] tracking-tight text-bone"
          >
            WEAR THE
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.25 }}
            className="font-display text-[clamp(4.5rem,17vw,16rem)] leading-[0.85] tracking-tight text-stroke"
          >
            DARK
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
          className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <p className="max-w-md font-body text-sm md:text-base text-bone/60 leading-relaxed">
            Heavyweight streetwear engineered for the underpass, the last
            train, the hours nobody claims. 320+ GSM. Cut oversized. Built to
            outlast trends.
          </p>
          <a
            href="#shop"
            className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-bone"
          >
            <span className="h-px w-12 bg-blood transition-all duration-500 group-hover:w-20" />
            Shop Drop 004
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
