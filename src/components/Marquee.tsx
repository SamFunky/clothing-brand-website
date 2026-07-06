const items = [
  "HEAVYWEIGHT ONLY",
  "320 GSM MINIMUM",
  "CUT OVERSIZED",
  "NO RESTOCKS",
  "DROP 004 LIVE",
]

export default function Marquee() {
  const row = [...items, ...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-smoke bg-void py-4">
      <div className="flex w-max animate-marquee gap-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 gap-8">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 font-mono text-[11px] tracking-[0.35em] uppercase text-dust whitespace-nowrap"
              >
                {item}
                <span className="text-blood">✕</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
