"use client"

import { education } from "@/data/education"
import FadeIn from "@/components/ui/FadeIn"

export default function Education() {
  return (
    <section id="education" className="py-20 px-8 max-w-7xl mx-auto border-t border-neon-cyan/10">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tighter">
            Formación <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Académica</span>
          </h2>
        </div>
      </FadeIn>
      <div className="grid gap-8">
        {education.map((edu, i) => (
          <FadeIn key={`${edu.institution}-${edu.title}`}>
            <div className="p-8 bg-neon-cyan/5 border border-neon-cyan/15 rounded-xl transition-all duration-300 hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:translate-x-2">
              <h3 className="text-xl font-bold text-text-primary mb-2">{edu.title}</h3>
              <p className="text-base text-neon-cyan font-bold mb-2">{edu.institution}</p>
              <p className="text-sm text-text-tertiary">{edu.period} | {edu.location}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
