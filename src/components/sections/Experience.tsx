"use client"

import { experiences } from "@/data/experience"
import FadeIn from "@/components/ui/FadeIn"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 max-w-7xl mx-auto border-t border-neon-cyan/10">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tighter">
            Mi <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Experiencia</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-[600px]">
            8+ años transformando requisitos en soluciones de calidad
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-10">
        {experiences.map((exp) => (
          <FadeIn key={`${exp.company}-${exp.period}`}>
            <div className="p-10 bg-neon-cyan/5 border border-neon-cyan/15 rounded-xl transition-all duration-300 relative overflow-hidden hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:translate-x-2.5 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-neon-cyan before:to-neon-magenta before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">{exp.title}</h3>
                <p className="text-base text-neon-cyan font-bold">{exp.company}</p>
              </div>
              <p className="text-sm text-text-tertiary mb-6">{exp.period} | {exp.location}</p>
              <p className="text-text-secondary leading-relaxed mb-6">{exp.description}</p>
              <ul className="list-none">
                {exp.achievements.map((ach) => (
                  <li
                    key={ach}
                    className="text-text-secondary py-2 pl-6 relative before:content-['▸'] before:absolute before:left-0 before:text-neon-magenta before:text-lg"
                  >
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
