import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const Step = ({ number, title, text }) => (
  <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-10 w-10 rounded-full bg-[#fff8de] flex items-center justify-center text-black font-bold">{number}</div>
      <h3 className="text-xl sm:text-2xl font-bold text-black">{title}</h3>
    </div>
    <p className="text-gray-700 leading-relaxed">{text}</p>
  </div>
)

const Process = () => {
  return (
    <section id="leistungen" className="bg-[#fff8de] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black">So arbeiten wir mit dir zusammen</h2>
          <p className="mt-3 text-lg text-gray-800">Von der Strategie bis zum Upload – wir übernehmen den kompletten Prozess.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10">
          <Step number="1" title="Strategieworkshop" text="Wir analysieren deine aktuelle Situation, Zielgruppe und Ziele und entwickeln eine individuelle Social-Media-Strategie, die zu deinem Unternehmen passt." />
          <Step number="2" title="Content-Konzept & Videoideen" text="Wir denken uns kreative Videoideen aus, die deine Marke sichtbar machen und zu deiner Zielgruppe passen." />
          <Step number="3" title="Produktion (Dreh & Schnitt)" text="Wir skripten die Videos, filmen sie und kümmern uns um den Schnitt – inklusive Hooks, Untertiteln und Formaten für TikTok, Reels & Co." />
          <Step number="4" title="Upload & Optimierung" text="Wir laden die Videos hoch, optimieren Titel, Captions und Hashtags und werten die Performance aus, um deine Ergebnisse kontinuierlich zu verbessern." />
        </div>

        <div className="mt-10 rounded-3xl bg-white p-6 sm:p-8 border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-[#ef7d8a] mt-1" />
            <p className="text-gray-800">Kurz gesagt: Ein Rundum-sorglos-Paket für Unternehmen, die mit Social Media wachsen und neue Kund:innen oder Mitarbeiter:innen gewinnen wollen.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
