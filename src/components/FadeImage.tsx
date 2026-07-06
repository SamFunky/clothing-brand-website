import { useState } from "react"

type Props = {
  src: string
  alt: string
  className?: string
}

/** Image that fades in on load and falls back to a dark placeholder if missing. */
export default function FadeImage({ src, alt, className = "" }: Props) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`bg-ash flex items-center justify-center ${className}`}
        aria-label={alt}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-dust/40 uppercase">
          {alt}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`${className} transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  )
}
