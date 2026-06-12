export interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface Project {
  category: string
  title: string
  description: string
  tech: string[]
  link: string
}

export interface Stat {
  number: string
  label: string
}

export interface Education {
  title: string
  institution: string
  period: string
  location: string
}

export interface Reference {
  name: string
  title: string
  phone: string
}

export interface Language {
  name: string
  level: string
}
