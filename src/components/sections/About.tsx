"use client"

import { languages } from "@/data/languages"
import FadeIn from "@/components/ui/FadeIn"

export default function About() {
  return (
    <section id="about" className="py-20 px-8 max-w-7xl mx-auto border-t border-neon-cyan/10">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tighter">
            Sobre <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">mí</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-[600px]">
            Ingeniero de Software Full Stack con más de 8 años de experiencia desarrollando
            aplicaciones empresariales y escalables.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[900px] mb-8">
          Especializado en Angular, Python, Django, PHP y Laravel. Experiencia en arquitectura de
          software, APIs REST, bases de datos SQL/NoSQL, automatización de procesos y modernización
          de aplicaciones. Orientado a la entrega de soluciones robustas, optimización del
          rendimiento y trabajo colaborativo bajo metodologías ágiles.
        </p>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-wrap items-center gap-6 p-6 bg-neon-cyan/5 border border-neon-cyan/15 rounded-xl max-w-[900px]">
          <h3 className="text-sm font-bold text-neon-cyan tracking-wider">IDIOMAS</h3>
          {languages.map((lang) => (
            <span key={lang.name} className="text-sm text-text-secondary">
              {lang.name} <span className="text-neon-cyan font-semibold">({lang.level})</span>
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
