"use client"

import { education } from "@/data/education"
import FadeIn from "@/components/ui/FadeIn"
import SectionTitle from "@/components/ui/SectionTitle"

const highlights = [
  { value: "8+ años", label: "desarrollando software empresarial" },
  { value: "APIs", label: "REST, bases de datos SQL/NoSQL y automatización" },
  { value: "Ágil", label: "equipos Scrum, code review y Clean Code" },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <SectionTitle eyebrow="01 · Sobre mí">Código robusto, entregas claras</SectionTitle>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {highlights.map((h) => (
            <div key={h.value} className="p-5 border border-accent/10 rounded-xl">
              <div className="text-2xl font-display font-extrabold text-accent mb-1">{h.value}</div>
              <p className="text-sm text-text-secondary">{h.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
          {education.map((edu) => (
            <div key={edu.title}>
              <p className="font-semibold text-text-primary">{edu.title}</p>
              <p className="text-text-tertiary">{edu.institution} · {edu.period.slice(-4)}</p>
            </div>
          ))}
          <div>
            <p className="font-semibold text-text-primary">Español</p>
            <p className="text-text-tertiary">Nativo</p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
