import Hero from './components/Hero'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-50">
      {/* Global decorative background */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(16,185,129,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_120%_20%,rgba(16,185,129,0.15),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />

        {/* CTA Section */}
        <section id="get-started" className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" aria-hidden="true" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Get a tailored security plan in minutes
            </h3>
            <p className="mt-3 text-emerald-100/70">
              Answer a few quick questions and receive a prioritized action plan with clear next steps.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-8 py-3 transition-colors shadow-lg shadow-emerald-500/20"
              >
                Start Free Assessment
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
