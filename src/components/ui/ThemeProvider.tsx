"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Accent = "neon" | "royal" | "forest" | "sunset"
type Mode = "dark" | "light"

interface ThemeContextType {
  accent: Accent
  setAccent: (t: Accent) => void
  mode: Mode
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  accent: "neon",
  setAccent: () => {},
  mode: "dark",
  toggleMode: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<Accent>("neon")
  const [mode, setMode] = useState<Mode>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedAccent = localStorage.getItem("accent-theme") as Accent | null
    if (savedAccent) setAccent(savedAccent)
    const savedMode = localStorage.getItem("color-mode") as Mode | null
    if (savedMode) setMode(savedMode)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute("data-theme", accent)
    localStorage.setItem("accent-theme", accent)
  }, [accent, mounted])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute("data-mode", mode)
    localStorage.setItem("color-mode", mode)
  }, [mode, mounted])

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"))

  if (!mounted) return <>{children}</>

  return (
    <ThemeContext.Provider value={{ accent, setAccent, mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
