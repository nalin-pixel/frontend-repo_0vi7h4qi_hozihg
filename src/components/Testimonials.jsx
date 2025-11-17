import React from 'react'

const testimonials = [
  {
    name: 'Lea M., Inhaberin Café Luna',
    quote:
      'Seit BEEdit unsere Reels übernimmt, bekommen wir jede Woche neue Anfragen über Instagram. Die Videos treffen genau unseren Ton.',
  },
  {
    name: 'Jonas K., Geschäftsführer Handwerksbetrieb',
    quote:
      'Die Zusammenarbeit ist super unkompliziert – wir müssen nur zum Dreh erscheinen, den Rest erledigt das Team. Sichtbarkeit und Bewerbungen sind spürbar gestiegen.',
  },
  {
    name: 'HR-Team, Tech-Startup',
    quote:
      'Klare Formate, ein roter Faden und messbare Ergebnisse. Unser Recruiting über Social läuft endlich planbar.',
  },
]

const Avatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
  return (
    <div className="h-10 w-10 rounded-full bg-[#ef7d8a] text-white flex items-center justify-center text-sm font-bold">
      {initials}
    </div>
  )
}

const TestimonialCard = ({ name, quote }) => (
  <div className="rounded-3xl bg-white p-6 sm:p-8 border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
    <div className="flex items-center gap-3 mb-4">
      <Avatar name={name} />
      <div>
        <div className="text-sm text-gray-600">Kund:innenstimme</div>
        <div className="font-semibold text-black">{name}</div>
      </div>
    </div>
    <p className="text-gray-800 leading-relaxed">“{quote}”</p>
  </div>
)

const Testimonials = () => {
  return (
    <section className="bg-[#fff8de] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black">Was unsere Kund:innen sagen</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
