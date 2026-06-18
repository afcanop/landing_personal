"use client"

import { projects } from "@/data/projects"
import FadeIn from "@/components/ui/FadeIn"

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold mb-12 tracking-tighter text-text-primary">
          Proyectos Destacados
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <FadeIn key={project.title}>
            <div className="border border-accent/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1">
              <div className="p-6 border-b border-accent/10">
                <p className="text-xs font-bold text-accent-secondary tracking-widest mb-2">{project.category}</p>
                <h3 className="text-lg font-bold text-text-primary">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-accent/20 text-accent/80 px-2.5 py-1 rounded text-xs font-semibold"
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
