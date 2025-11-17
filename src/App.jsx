import React from 'react'
import Hero from './components/Hero'
import Counters from './components/Counters'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">BEEdit</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#leistungen" className="hover:text-[#ef7d8a] transition-colors">Leistungen</a>
            <a href="#cases" className="hover:text-[#ef7d8a] transition-colors">Ergebnisse</a>
            <a href="#kontakt" className="hover:text-[#ef7d8a] transition-colors">Kontakt</a>
            <a href="#kontakt" className="ml-2 inline-flex items-center justify-center rounded-full bg-[#ef7d8a] text-white px-4 py-2 font-semibold shadow-sm hover:shadow-md">Erstgespräch</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Counters />
        <div id="leistungen"><Process /></div>
        <div id="cases"><CaseStudies /></div>
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-black/5 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} BEEdit. Alle Rechte vorbehalten.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#ef7d8a]">Impressum</a>
            <a href="#" className="hover:text-[#ef7d8a]">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
