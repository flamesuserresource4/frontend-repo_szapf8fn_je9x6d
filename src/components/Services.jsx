import { Shield, Radar, FileCheck2, LineChart } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Automated Threat Detection',
    desc: 'Stop threats before they strike.',
  },
  {
    icon: Radar,
    title: 'Intelligent Risk Assessment',
    desc: "Know where you're exposed and take action.",
  },
  {
    icon: FileCheck2,
    title: 'Compliance Made Simple',
    desc: 'Stay audit-ready with minimal effort.',
  },
  {
    icon: LineChart,
    title: 'Adaptive Security Insights',
    desc: 'Turn data into actionable security improvements.',
  },
]

function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-emerald-200">
          Understand your weak spots before your attacks do
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-emerald-400/15 bg-slate-900/40 backdrop-blur-sm p-6 transition-all hover:border-emerald-400/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-300 mb-4 border border-emerald-400/20">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug">{title}</h3>
              <p className="mt-2 text-emerald-100/70 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
