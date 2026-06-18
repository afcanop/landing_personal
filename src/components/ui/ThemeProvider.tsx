"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Mode = "dark" | "light"

interface ThemeContextType {
  mode: Mode
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggleMode: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function getInitialMode(): Mode {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("color-mode") as Mode | null
    if (saved === "dark" || saved === "light") return saved
  }
  return "dark"
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(getInitialMode)

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode)
    localStorage.setItem("color-mode", mode)
  }, [mode])

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"))

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
