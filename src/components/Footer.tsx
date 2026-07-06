import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="relative overflow-hidden border-t border-smoke bg-void">
      <div className="px-5 md:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <h3 className="font-display text-3xl md:text-5xl text-bone leading-tight">
            JOIN THE
            <span className="text-stroke-blood"> BLACKLIST</span>
          </h3>
          <p className="mt-4 max-w-sm font-body text-sm text-dust leading-relaxed">
            Early access to drops. No spam. No mercy. Unsubscribe whenever —
            but you won't.
          </p>
          {subscribed ? (
            <p className="mt-8 font-mono text-[11px] tracking-[0.3em] uppercase text-blood">
              ✕ You're in. Watch your inbox.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email.includes("@")) setSubscribed(true)
              }}
              className="mt-8 flex max-w-md border border-smoke focus-within:border-bone transition-colors duration-300"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent px-4 py-3 font-mono text-[11px] tracking-[0.2em] text-bone placeholder:text-dust/50 outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-bone px-6 font-mono text-[11px] tracking-[0.25em] uppercase text-void hover:bg-blood transition-colors duration-300 cursor-pointer"
              >
                Enter
              </button>
            </form>
          )}
        </div>

        <div className="md:col-span-3">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-dust">
            Navigate
          </span>
          <ul className="mt-5 space-y-3">
            {["Shop", "Lookbook", "Manifesto", "Archive"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-sm text-bone/70 hover:text-bone transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-dust">
            Elsewhere
          </span>
          <ul className="mt-5 space-y-3">
            {["Instagram", "TikTok", "Discord", "SoundCloud"].map((link) => (
              <li key={link}>
                <a
                  href="#top"
                  className="font-body text-sm text-bone/70 hover:text-bone transition-colors duration-300"
                >
                  {link} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="select-none overflow-hidden leading-none" aria-hidden>
        <span className="block text-center font-display text-[clamp(6rem,22vw,22rem)] leading-[0.8] text-ash translate-y-[18%]">
          VANTA
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-t border-smoke px-5 md:px-10 py-5">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-dust/60">
          © 2026 VANTA. All rights reserved.
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-dust/60">
          Designed in the dark.
        </span>
      </div>
    </footer>
  )
}
