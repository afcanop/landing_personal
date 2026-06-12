"use client"

import { skillCategories } from "@/data/skills"
import FadeIn from "@/components/ui/FadeIn"

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 max-w-7xl mx-auto border-t border-neon-cyan/10">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tighter">
            Stack <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Técnico</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-[600px]">
            Tecnologías en las que trabajo a diario
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <FadeIn key={category.title}>
            <div className="p-8 bg-neon-cyan/5 border border-neon-cyan/15 rounded-xl transition-all duration-300 hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-neon-cyan mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan px-4 py-2 rounded text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
