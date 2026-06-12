import { stats } from "@/data/stats"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-32 px-8 max-w-7xl mx-auto relative"
    >
      <div className="z-10">
        <div className="inline-flex items-center gap-3 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full px-6 py-3 text-neon-cyan text-sm font-semibold mb-10 tracking-wider">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_0_4px_rgba(16,185,129,0.3)]" />
          Disponible para nuevos retos
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1] mb-6 tracking-tighter">
          <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple bg-clip-text text-transparent">
            Andrés Felipe Cano
          </span>
        </h1>

        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-text-secondary">
            Full Stack Developer & Engineer
          </h2>
          <span className="w-10 h-[3px] bg-gradient-to-r from-neon-cyan to-transparent rounded-full" />
        </div>

        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[550px] mb-10">
          Transformo ideas en soluciones web escalables y eficientes. Con 8+ años de experiencia
          especializado en Python, PHP, Angular y JavaScript, creo productos que marcan la
          diferencia.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {["Python", "PHP", "Angular", "JavaScript", "Django", "Laravel"].map((tech) => (
            <span
              key={tech}
              className="bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan px-4 py-2 rounded text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-neon-cyan/20 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,212,255,0.2)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 flex-wrap mb-14">
          <a
            href="https://github.com/afcanop"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-lg font-bold text-sm no-underline inline-flex items-center gap-3 bg-transparent text-neon-cyan border-2 border-neon-cyan shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 hover:bg-neon-cyan/10 hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] hover:-translate-y-1"
          >
            <span>Ver en GitHub</span>
            <span className="text-lg">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 bg-neon-cyan/5 border border-neon-cyan/15 rounded-lg transition-all duration-300 hover:bg-neon-cyan/10 hover:border-neon-cyan/30 hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-neon-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-text-secondary font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-150 hidden lg:flex items-center justify-center">
        <div className="absolute top-0 left-0 w-70 bg-linear-to-br from-surface to-surface-light border border-neon-cyan/20 rounded-xl p-8 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-[float1_6s_ease-in-out_infinite]">
          <div className="text-sm font-bold text-neon-cyan mb-4 pb-4 border-b border-neon-cyan/20 tracking-wider">
            BACKEND
          </div>
          <div className="flex flex-col gap-3">
            {["Python", "Django", "PHP/Laravel", "Node.js"].map((item) => (
              <div key={item} className="text-sm text-text-secondary flex items-center gap-2 before:content-['⟡'] before:text-neon-magenta before:text-xs">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-[180px] left-[100px] w-[280px] bg-gradient-to-br from-surface to-surface-light border border-neon-cyan/20 rounded-xl p-8 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-[float2_7s_ease-in-out_infinite]">
          <div className="text-sm font-bold text-neon-cyan mb-4 pb-4 border-b border-neon-cyan/20 tracking-wider">
            FRONTEND
          </div>
          <div className="flex flex-col gap-3">
            {["Angular", "React", "JavaScript", "CSS3/HTML5"].map((item) => (
              <div key={item} className="text-sm text-text-secondary flex items-center gap-2 before:content-['⟡'] before:text-neon-magenta before:text-xs">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[280px] bg-gradient-to-br from-surface to-surface-light border border-neon-cyan/20 rounded-xl p-8 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-[float3_8s_ease-in-out_infinite]">
          <div className="text-sm font-bold text-neon-cyan mb-4 pb-4 border-b border-neon-cyan/20 tracking-wider">
            DATABASE
          </div>
          <div className="flex flex-col gap-3">
            {["MySQL", "MongoDB", "SQL Server", "Redis"].map((item) => (
              <div key={item} className="text-sm text-text-secondary flex items-center gap-2 before:content-['⟡'] before:text-neon-magenta before:text-xs">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
