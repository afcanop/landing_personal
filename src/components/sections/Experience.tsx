"use client"

import { useState } from "react"
import { experiences } from "@/data/experience"
import FadeIn from "@/components/ui/FadeIn"
import SectionTitle from "@/components/ui/SectionTitle"

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experience" className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <SectionTitle eyebrow="02 · Experiencia">Dónde he trabajado</SectionTitle>
      </FadeIn>
      <div className="border-t border-accent/10 max-w-3xl">
        {experiences.map((exp, i) => {
          const open = openIndex === i
          return (
            <div key={exp.company} className="border-b border-accent/10">
              <button
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer bg-transparent border-none group"
              >
                <span>
                  <span className="block text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                    {exp.company}
                  </span>
                  <span className="block text-sm text-text-secondary">{exp.title}</span>
                </span>
                <span className="flex items-center gap-4 shrink-0">
                  <span className="font-mono text-xs text-text-tertiary">{exp.period}</span>
                  <span className={`text-accent text-xl leading-none transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
                </span>
              </button>
              <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <ul className="overflow-hidden list-none space-y-2">
                  {exp.achievements.map((ach) => (
                    <li
                      key={ach}
                      className="text-sm text-text-secondary pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full last:mb-5"
                    >
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
