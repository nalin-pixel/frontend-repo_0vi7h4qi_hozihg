import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Placeholder submit – can be wired to backend later
    setTimeout(() => setSent(true), 600)
  }

  return (
    <section id="kontakt" className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black">Bereit, dein Unternehmen sichtbar zu machen?</h2>
          <p className="mt-3 text-lg text-gray-700">Lass uns über deine Ziele sprechen und schauen, wie wir deine Marke auf Social Media groß machen können.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-3xl bg-[#fff8de] p-6 sm:p-8 border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-full border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ef7d8a] bg-white" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">E-Mail</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-full border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ef7d8a] bg-white" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-800 mb-1">Unternehmen</label>
                <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-full border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ef7d8a] bg-white" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-800 mb-1">Nachricht</label>
                <textarea name="message" rows="4" value={form.message} onChange={handleChange} className="w-full rounded-2xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ef7d8a] bg-white" placeholder="Erzähl uns kurz von deinem Projekt..." />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#ef7d8a] text-white px-6 py-3 text-base font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all">
              Jetzt kostenloses Erstgespräch anfragen
            </button>
            <p className="mt-4 text-sm text-gray-700">Oder schreib uns direkt eine E-Mail an: <span className="font-semibold">hallo@beedit.de</span></p>
            {sent && <p className="mt-3 text-green-700 text-sm">Danke! Wir melden uns in Kürze bei dir.</p>}
          </form>

          <div className="rounded-3xl bg-black text-white p-6 sm:p-8 border border-white/10">
            <h3 className="text-2xl font-bold">Warum BEEdit?</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              <li>• Fokus auf Videos, die wirklich performen</li>
              <li>• Klarer Prozess von Strategie bis Upload</li>
              <li>• Transparente Reportings & Learnings</li>
              <li>• Nahbare Zusammenarbeit auf Augenhöhe</li>
            </ul>
            <div className="mt-8 rounded-2xl bg-white/5 p-4">
              <div className="text-[#ef7d8a] font-semibold">Kontakt</div>
              <p className="text-white/90">+49 (0) 000 000000</p>
              <p className="text-white/90">hallo@beedit.de</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
