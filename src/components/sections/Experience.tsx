"use client"

import { experiences } from "@/data/experience"
import FadeIn from "@/components/ui/FadeIn"

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-12 tracking-tighter text-text-primary">
          Experiencia
        </h2>
      </FadeIn>
      <div className="grid gap-8">
        {experiences.map((exp) => (
          <FadeIn key={`${exp.company}-${exp.period}`}>
            <div className="p-8 border border-accent/10 rounded-xl transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.02]">
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-1">{exp.title}</h3>
                <p className="text-base text-accent font-semibold">{exp.company}</p>
              </div>
              <p className="text-sm text-text-tertiary mb-4">{exp.period} | {exp.location}</p>
              <p className="text-text-secondary leading-relaxed mb-6">{exp.description}</p>
              <ul className="list-none space-y-2">
                {exp.achievements.map((ach) => (
                  <li
                    key={ach}
                    className="text-text-secondary pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full"
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
