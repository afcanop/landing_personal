"use client"

import { languages } from "@/data/languages"
import FadeIn from "@/components/ui/FadeIn"

export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-6 tracking-tighter text-text-primary">
          Sobre mí
        </h2>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[900px] mb-8">
          Ingeniero de Software Full Stack con más de 8 años de experiencia desarrollando
          aplicaciones empresariales y escalables. Especializado en Angular, Python, Django,
          PHP y Laravel. Experiencia en arquitectura de software, APIs REST, bases de datos
          SQL/NoSQL, automatización de procesos y modernización de aplicaciones. Orientado a
          la entrega de soluciones robustas, optimización del rendimiento y trabajo
          colaborativo bajo metodologías ágiles.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <h3 className="text-sm font-bold text-accent tracking-wider">IDIOMAS</h3>
          {languages.map((lang) => (
            <span key={lang.name} className="text-sm text-text-secondary">
              {lang.name} <span className="text-accent font-semibold">({lang.level})</span>
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
