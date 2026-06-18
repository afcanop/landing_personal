import { stats } from "@/data/stats"
import Terminal from "@/components/ui/Terminal"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-32 px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 border border-accent/20 rounded-full px-5 py-2 text-accent text-sm font-semibold">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_0_4px_rgba(16,185,129,0.3)]" />
            Disponible para nuevos retos
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1] tracking-tighter text-text-primary">
            Andrés Felipe Cano Piedrahita
          </h1>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-accent">
              Full Stack Developer & Engineer
            </h2>
          </div>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[550px]">
            Transformo ideas en soluciones web escalables y eficientes. Con 8+ años de experiencia
            especializado en Python, PHP, Angular y JavaScript.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Python", "PHP", "Angular", "JavaScript", "Django", "Laravel"].map((tech) => (
              <span
                key={tech}
                className="border border-accent/30 text-accent px-4 py-2 rounded text-sm font-semibold transition-colors duration-300 hover:bg-accent/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/afcanop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-bold text-sm bg-accent text-bg-darker no-underline transition-all duration-300 hover:bg-accent/90"
            >
              Ver en GitHub →
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-bold text-sm border border-accent/30 text-accent no-underline transition-all duration-300 hover:bg-accent/10"
            >
              Contáctame
            </a>
          </div>

          <div className="flex gap-10 pt-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-accent">{stat.number}</div>
                <div className="text-sm text-text-tertiary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
