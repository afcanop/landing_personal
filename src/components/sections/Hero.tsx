import { stats } from "@/data/stats"
import Terminal from "@/components/ui/Terminal"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16 px-6 sm:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-sm font-semibold">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Disponible para nuevos retos
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold leading-[1.05] tracking-tighter text-text-primary">
            Andrés Felipe <span className="text-accent">Cano</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-[480px]">
            Desarrollador Full Stack. Construyo aplicaciones web escalables con Python, PHP y Angular.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="#contact"
              className="px-7 py-3 rounded-lg font-bold text-sm bg-accent text-bg-darker no-underline transition-colors hover:bg-accent/90"
            >
              Contáctame
            </a>
            <a
              href="#projects"
              className="px-7 py-3 rounded-lg font-bold text-sm border border-accent/30 text-accent no-underline transition-colors hover:bg-accent/10"
            >
              Ver proyectos
            </a>
          </div>

          <dl className="flex gap-8 pt-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-2xl font-bold text-text-primary">{stat.number}</dd>
                <dt className="text-sm text-text-tertiary">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden lg:block">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
