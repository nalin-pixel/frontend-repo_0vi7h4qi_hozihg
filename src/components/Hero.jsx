import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block rounded-full bg-[#fff8de] text-black px-4 py-1 text-sm font-medium shadow-sm">
              Social Media Agentur · BEEdit
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-black">
              Wir machen dein Unternehmen sichtbar.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
              Wir entwickeln deine Social-Media-Strategie, produzieren deine Videos und sorgen dafür, dass deine Marke täglich in den Feeds deiner Zielgruppe auftaucht.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full bg-[#ef7d8a] text-white px-6 py-3 text-base font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all"
              >
                Kostenloses Erstgespräch buchen
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white text-black px-6 py-3 text-base font-semibold shadow-sm hover:bg-[#fff8de] transition-colors"
              >
                Mehr über unsere Leistungen
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-3xl bg-black/90"
        >
          <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
