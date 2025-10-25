import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Play } from 'lucide-react'

const slides = [
  {
    key: 'Master',
    title: 'Build work that gets hired',
    sub: 'Master programme. Agency-backed training with real projects and placement support.',
    bullets: ['Full-funnel performance', 'Creative strategy', 'Analytics and GA4'],
  },
  {
    key: 'Certificate',
    title: 'From classroom to campaign',
    sub: 'Certificate. Core skills fast. Evenings and weekends.',
    bullets: ['Paid social basics', 'Search essentials', 'Reporting fundamentals'],
  },
  {
    key: 'Premier',
    title: 'Your studio for real practice',
    sub: 'Premier. Elite 1:1 mentorship and studio immersion.',
    bullets: ['Mentor-led sprints', 'Live case briefs', 'Portfolio polish'],
  },
]

export default function Hero({ onEnquire }) {
  const [current, setCurrent] = useState(0)

  return (
    <section className="relative overflow-hidden bg-[#0c0e12]">
      {/* Generative gradient background */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(closest-side, #34E1E1, transparent)' }} />
        <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(closest-side, #FF5533, transparent)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-16">
        <div className="flex items-center gap-2 mb-6">
          {slides.map((s, i) => (
            <button key={s.key} onClick={() => setCurrent(i)} className={`px-3 py-1.5 rounded-full text-xs border transition ${i===current? 'border-[#34E1E1] text-white bg-[#34E1E1]/10':'border-white/10 text-white/70 hover:text-white'}`}>
              {s.key}
            </button>
          ))}
        </div>

        <motion.h1 key={slides[current].title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-3xl md:text-6xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          {slides[current].title}
        </motion.h1>
        <motion.p key={slides[current].sub} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="mt-4 text-white/80 max-w-2xl">
          {slides[current].sub}
        </motion.p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {slides[current].bullets.map((b) => (
            <li key={b} className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-white/80">{b}</li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-3">
          <button onClick={onEnquire} className="px-5 py-3 rounded-lg bg-[#FF5533] text-white text-sm md:text-base font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#34E1E1]">
            Enquire now
          </button>
          <a href="#" className="px-5 py-3 rounded-lg border border-white/15 bg-white/5 text-white/90 text-sm md:text-base hover:bg-white/10 flex items-center gap-2">
            <Download size={16} /> Download brochure
          </a>
        </div>

        {/* Studio loop card */}
        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-6 items-center">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#121418]/40 to-transparent" />
            <div className="aspect-video flex items-center justify-center text-white/70">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121418]/70 border border-white/10 text-xs">
                <Play size={14} /> Studio reel. 10 sec
              </button>
            </div>
          </div>
          <div className="text-white/80 text-sm leading-relaxed">
            <p>Train like a marketer. Ship like a pro. Learn inside a working studio with briefs, mentors, and real outcomes. Short sprints. Fast feedback. Work you can present with pride.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
