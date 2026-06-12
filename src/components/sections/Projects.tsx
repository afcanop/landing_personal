"use client"

import { projects } from "@/data/projects"
import FadeIn from "@/components/ui/FadeIn"

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-7xl mx-auto border-t border-neon-cyan/10">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tighter">
            Proyectos <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-[600px]">
            Soluciones que he desarrollado reflejando mi experiencia
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <FadeIn key={project.title}>
            <div className="bg-surface border border-neon-cyan/15 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-neon-cyan/40 hover:shadow-[0_30px_60px_rgba(0,212,255,0.2)]">
              <div className="bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 p-8 border-b border-neon-cyan/15">
                <p className="text-xs font-bold text-neon-magenta tracking-widest mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
              </div>
              <div className="p-8">
                <p className="text-text-secondary mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan px-3 py-1.5 rounded text-xs font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
