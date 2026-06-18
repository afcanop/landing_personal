"use client"

import { education } from "@/data/education"
import FadeIn from "@/components/ui/FadeIn"

export default function Education() {
  return (
    <section id="education" className="py-24 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-12 tracking-tighter text-text-primary">
          Formación Académica
        </h2>
      </FadeIn>
      <div className="grid gap-6">
        {education.map((edu) => (
          <FadeIn key={`${edu.institution}-${edu.title}`}>
            <div className="p-6 border-l-2 border-accent/30 pl-6 transition-all duration-300 hover:border-accent">
              <h3 className="text-lg font-bold text-text-primary mb-1">{edu.title}</h3>
              <p className="text-base text-accent font-semibold mb-1">{edu.institution}</p>
              <p className="text-sm text-text-tertiary">{edu.period} | {edu.location}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
