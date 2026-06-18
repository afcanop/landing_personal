"use client"

import { useTheme } from "./ThemeProvider"

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme()

  return (
    <button
      onClick={toggleMode}
      aria-label={mode === "dark" ? "Modo claro" : "Modo oscuro"}
      className="fixed bottom-8 left-8 z-40 w-10 h-10 rounded-full bg-bg-darker/80 backdrop-blur-xl border border-accent/10 flex items-center justify-center text-sm transition-all duration-300 hover:scale-110 shadow-lg"
    >
      {mode === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  )
}
