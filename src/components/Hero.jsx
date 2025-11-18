import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-animated-gradient" aria-hidden="true" />
      {/* Subtle moving lines overlay */}
      <div className="absolute inset-0 bg-lines opacity-30 mix-blend-overlay" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Cybersecurity Built for SMEs, Not Enterprises
          </h1>
          <p className="mt-5 text-base md:text-lg text-emerald-200/80 max-w-xl">
            Practical protection that fits your business and your budget. No jargon. No bloat. Just security that works.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Get a Free Security Checkup
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-400/40 text-emerald-200 hover:bg-emerald-400/10 px-6 py-3 transition-colors"
            >
              See How It Works
            </a>
          </div>
          <p className="mt-3 text-xs text-emerald-200/60">
            No credit card required • Quick setup • Trusted by small teams
          </p>
        </div>

        <div className="relative h-[380px] sm:h-[420px] md:h-[520px]">
          <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-3xl" aria-hidden="true" />
          <div className="relative w-full h-full rounded-2xl border border-emerald-400/20 bg-slate-900/40 backdrop-blur-sm overflow-hidden shadow-2xl">
            <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
