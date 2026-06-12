"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#education", label: "Formación" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
]

const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-bg-darker/80 backdrop-blur-xl border-neon-cyan/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
        >
          AFCANOP
        </a>

        <ul className="hidden md:flex list-none gap-12">
          {navLinks.map(({ href, label }) => {
            const isActive = active === href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`text-sm font-medium no-underline transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-neon-cyan after:to-neon-magenta after:transition-all after:duration-300 ${
                    isActive
                      ? "text-neon-cyan after:w-full"
                      : "text-text-secondary hover:text-neon-cyan after:w-0 hover:after:w-full"
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer z-50"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span className={`block w-6 h-0.5 bg-text-secondary transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text-secondary transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text-secondary transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-bg-darker/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10 list-none">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="text-text-secondary no-underline text-2xl font-bold transition-colors hover:text-neon-cyan"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
