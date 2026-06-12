"use client"

import { useState, useEffect } from "react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-magenta text-bg-dark flex items-center justify-center text-xl font-bold shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      ↑
    </button>
  )
}
