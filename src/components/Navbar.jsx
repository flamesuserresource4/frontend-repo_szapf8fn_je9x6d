function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-emerald-400/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
            <span className="text-emerald-400 font-black">✓</span>
          </div>
          <span className="text-white font-semibold tracking-tight">GreenShield</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-emerald-100/80 text-sm">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <a href="#get-started" className="inline-flex items-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition-colors">
          Get Started
        </a>
      </div>
    </header>
  )
}

export default Navbar
