import { motion } from 'framer-motion'

const programmes = [
  {
    name: 'Master',
    value: 'Become a performance marketer who ships results.',
    outcomes: ['Run full-funnel campaigns', 'Build reports that close deals', 'Present like a pro'],
    duration: '16 weeks',
    feeCue: 'Speak to admissions',
  },
  {
    name: 'Certificate',
    value: 'Build core skills fast. Career-safe foundations.',
    outcomes: ['Search and social basics', 'Landing page basics', 'Reporting essentials'],
    duration: '8 weeks',
    feeCue: 'Flexible plans available',
  },
  {
    name: 'Premier',
    value: 'Elite mentorship and studio immersion.',
    outcomes: ['Mentor sprints', 'Live client briefs', 'Portfolio polish'],
    duration: '12 weeks',
    feeCue: 'By application',
  },
]

export default function ProgrammesOverview({ onEnquire }) {
  return (
    <section id="programmes" className="py-16 md:py-20 bg-[#0c0e12]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold">Programmes</h2>
          <a href="#" className="text-sm text-white/80 hover:text-white">See batch availability</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {programmes.map((p, idx) => (
            <Card key={p.name} p={p} delay={idx * 0.05} onEnquire={onEnquire} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ p, delay, onEnquire }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#34E1E1] via-[#FF5533] to-[#34E1E1] opacity-0 group-hover:opacity-100 transition" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <span className="text-xs text-white/60">{p.duration}</span>
        </div>
        <p className="mt-2 text-sm text-white/80">{p.value}</p>
        <ul className="mt-4 space-y-2">
          {p.outcomes.map((o) => (
            <li key={o} className="text-sm text-white/80 flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#34E1E1]" /> {o}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between">
          <div className="text-xs text-white/60">{p.feeCue}</div>
          <div className="flex items-center gap-2">
            <a href="#" className="text-sm text-white/80 hover:text-white">View details</a>
            <button onClick={onEnquire} className="text-sm px-3 py-1.5 rounded-md bg-[#FF5533] text-white hover:opacity-95">Enquire</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
