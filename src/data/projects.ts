import type { Project } from "@/types"

export const projects: Project[] = [
  {
    category: "Modernización",
    title: "Optimización Angular",
    description: "Actualización de plataforma web empresarial.",
    metric: "+25% rendimiento",
    tech: ["Angular", "TypeScript", "PHP"],
  },
  {
    category: "Refactorización",
    title: "Migración a ORM",
    description: "De consultas SQL a Eloquent, más seguro y rápido.",
    metric: "−40% tiempo de consulta",
    tech: ["Laravel", "Eloquent", "MySQL"],
  },
  {
    category: "Automatización",
    title: "Scripts Python",
    description: "Automatización de tareas operativas repetitivas.",
    metric: "+60% eficiencia",
    tech: ["Python", "GitHub", "Linux"],
  },
  {
    category: "Mantenimiento",
    title: "Soporte multi-proyecto",
    description: "Evolución y estabilidad de apps en producción.",
    metric: "5+ apps en producción",
    tech: ["Full-Stack", "Code Review", "Testing"],
  },
  {
    category: "Desarrollo",
    title: "Módulos web",
    description: "Componentes responsive con estándares modernos.",
    metric: "Laravel + JS",
    tech: ["PHP", "Laravel", "Bootstrap"],
  },
  {
    category: "Integración",
    title: "Web scraping",
    description: "Extracción e integración de datos de varias fuentes.",
    metric: "Datos automatizados",
    tech: ["Python", "Scraping", "APIs"],
  },
]
