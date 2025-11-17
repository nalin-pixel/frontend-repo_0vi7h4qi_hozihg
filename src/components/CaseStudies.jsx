import React from 'react'

const CaseCard = ({ title, before, after, note }) => {
  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8 border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-black/10 p-4 bg-[#fff8de]">
          <div className="text-sm font-semibold text-gray-800 mb-2">Vorher</div>
          <ul className="text-gray-700 text-sm space-y-1">
            {before.map((b, i) => (<li key={i}>• {b}</li>))}
          </ul>
          <div className="mt-3 h-28 bg-white rounded-xl flex items-center justify-center text-gray-400 text-sm">Mockup</div>
        </div>
        <div className="rounded-2xl border border-black/10 p-4 bg-[#ef7d8a]/10">
          <div className="text-sm font-semibold text-gray-800 mb-2">Nachher</div>
          <ul className="text-gray-700 text-sm space-y-1">
            {after.map((b, i) => (<li key={i}>• {b}</li>))}
          </ul>
          <div className="mt-3 h-28 bg-white rounded-xl flex items-center justify-center text-gray-400 text-sm">Mockup</div>
        </div>
      </div>
      <p className="mt-4 text-gray-700 text-sm">{note}</p>
    </div>
  )
}

const CaseStudies = () => {
  const cases = [
    {
      title: 'Handwerksbetrieb',
      before: ['300 Follower', 'Unregelmäßige Posts', 'Ø 500 Views/Monat'],
      after: ['+2.500 Follower in 4 Monaten', 'Tägliche Reels', 'Ø 120.000 Views/Monat'],
      note: 'Strategie, Content-Plan, 12 Reels/Monat, Community-Management',
    },
    {
      title: 'Lokales Restaurant',
      before: ['800 Follower', 'Kaum Video-Content', 'Wenig Reservierungen über Social'],
      after: ['+4.000 Follower in 3 Monaten', '+250% Views', 'Mehr Online-Reservierungen'],
      note: 'Kurzformat-Video, Creator-Drehs, Hashtag-Optimierung',
    },
    {
      title: 'Finanzdienstleister',
      before: ['Wenig Reichweite', 'Komplexe Inhalte', 'Keine klare Strategie'],
      after: ['7 Mio.+ Views insgesamt', 'Klare Content-Formate', 'Mehr qualifizierte Anfragen'],
      note: 'Thought-Leadership, Edutainment-Formate, Performance-Review',
    }
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black">Ergebnisse, die für sich sprechen</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((c, i) => (
            <CaseCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
