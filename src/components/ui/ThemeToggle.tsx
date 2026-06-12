"use client"

import { useTheme } from "./ThemeProvider"

const themes = [
  { id: "neon", class: "bg-[#00d4ff]" },
  { id: "royal", class: "bg-[#a855f7]" },
  { id: "forest", class: "bg-[#10b981]" },
  { id: "sunset", class: "bg-[#f59e0b]" },
] as const

type Accent = (typeof themes)[number]["id"]

export default function ThemeToggle() {
  const { accent, setAccent, mode, toggleMode } = useTheme()

  return (
    <div className="fixed bottom-8 left-8 z-40 flex items-center gap-2 p-2 rounded-full bg-bg-darker/80 backdrop-blur-xl border border-neon-cyan/10 shadow-lg">
      <button
        onClick={toggleMode}
        aria-label={mode === "dark" ? "Modo claro" : "Modo oscuro"}
        className="w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:scale-110"
      >
        {mode === "dark" ? "🌙" : "☀️"}
      </button>

      <span className="w-px h-5 bg-neon-cyan/20" />

      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setAccent(t.id as Accent)}
          aria-label={`Acento ${t.id}`}
          className={`w-5 h-5 rounded-full transition-all duration-300 ${t.class} ${
            accent === t.id
              ? "scale-110 ring-2 ring-white/50"
              : "opacity-40 hover:opacity-80 hover:scale-105"
          }`}
        />
      ))}
    </div>
  )
}
