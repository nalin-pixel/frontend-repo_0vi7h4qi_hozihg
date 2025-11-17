import React, { useEffect, useRef, useState } from 'react'

const useCountUp = (end, duration = 1500) => {
  const [value, setValue] = useState(0)
  const start = useRef(null)

  useEffect(() => {
    const step = (timestamp) => {
      if (!start.current) start.current = timestamp
      const progress = Math.min((timestamp - start.current) / duration, 1)
      setValue(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [end, duration])

  return value
}

const Counter = ({ label, target, plus = true }) => {
  const value = useCountUp(target)
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-extrabold text-[#ef7d8a] tracking-tight">{value.toLocaleString()} {plus && '+'}</div>
      <div className="mt-2 text-sm sm:text-base text-[#fff8de] opacity-90">{label}</div>
    </div>
  )
}

const Counters = () => {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <Counter label="Social Media Posts erstellt" target={1000} />
          <Counter label="Views für unsere Kund:innen generiert" target={7000000} />
          <Counter label="betreute Marken & Unternehmen" target={20} />
        </div>
      </div>
    </section>
  )
}

export default Counters
