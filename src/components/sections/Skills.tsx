"use client"

import { skillCategories } from "@/data/skills"
import FadeIn from "@/components/ui/FadeIn"

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-12 tracking-tighter text-text-primary">
          Stack Técnico
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <FadeIn key={category.title}>
            <div className="p-6 border border-accent/10 rounded-xl transition-all duration-300 hover:border-accent/30">
              <h3 className="text-lg font-bold text-accent mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-accent/20 text-accent/90 px-3 py-1.5 rounded text-xs font-semibold"
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
