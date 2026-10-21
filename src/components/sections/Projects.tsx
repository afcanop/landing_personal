"use client"

import { projects } from "@/data/projects"
import FadeIn from "@/components/ui/FadeIn"
import SectionTitle from "@/components/ui/SectionTitle"

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <SectionTitle eyebrow="04 · Proyectos">Resultados, no solo código</SectionTitle>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <FadeIn key={project.title}>
            <div className="relative h-full p-6 border border-accent/10 rounded-xl transition-all duration-300 hover:border-accent/30 hover:-translate-y-1">
              <p className="text-xs font-mono uppercase tracking-widest text-text-tertiary mb-3">{project.category}</p>
              <p className="text-2xl font-display font-extrabold text-accent mb-1">{project.metric}</p>
              <h3 className="font-bold text-text-primary mb-1">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-accent after:absolute after:inset-0">
                    {project.title} ↗
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-sm text-text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-text-tertiary">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
