"use client"

import { skillCategories } from "@/data/skills"
import FadeIn from "@/components/ui/FadeIn"
import SectionTitle from "@/components/ui/SectionTitle"

const ICON_BASE = "https://raw.githubusercontent.com/devicons/devicon/master/icons"

const icons: Record<string, string> = {
  Angular: "angular/angular-original",
  TypeScript: "typescript/typescript-original",
  RxJS: "rxjs/rxjs-original",
  React: "react/react-original",
  "React Native": "react/react-original",
  JavaScript: "javascript/javascript-original",
  Bootstrap: "bootstrap/bootstrap-original",
  Python: "python/python-original",
  Django: "django/django-plain",
  FastAPI: "fastapi/fastapi-original",
  PHP: "php/php-original",
  Laravel: "laravel/laravel-original",
  Symfony: "symfony/symfony-original",
  "Node.js": "nodejs/nodejs-original",
  MySQL: "mysql/mysql-original",
  PostgreSQL: "postgresql/postgresql-original",
  MariaDB: "mariadb/mariadb-original",
  MongoDB: "mongodb/mongodb-original",
  "SQL Server": "microsoftsqlserver/microsoftsqlserver-plain",
  Docker: "docker/docker-original",
  DigitalOcean: "digitalocean/digitalocean-original",
  Git: "git/git-original",
  Linux: "linux/linux-original",
  Bash: "bash/bash-original",
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <SectionTitle eyebrow="03 · Stack">Con qué construyo</SectionTitle>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <FadeIn key={category.title}>
            <div className="p-6 border border-accent/10 rounded-xl h-full transition-colors hover:border-accent/30">
              <h3 className="text-xs font-mono uppercase tracking-widest text-accent mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="group bg-surface text-text-primary px-3 py-1.5 rounded-md text-sm inline-flex items-center gap-2 transition-all duration-200 ease-out cursor-default hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/20 hover:ring-1 hover:ring-accent/40 active:scale-95"
                  >
                    {icons[skill] && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`${ICON_BASE}/${icons[skill]}.svg`}
                        alt=""
                        width={16}
                        height={16}
                        loading="lazy"
                        className="transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-12"
                      />
                    )}
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
