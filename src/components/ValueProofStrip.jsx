import { motion } from 'framer-motion'

export default function ValueProofStrip() {
  return (
    <section id="proof" className="relative py-10 md:py-12 border-t border-b border-white/10 bg-[#0f1218]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            {["Google","Meta","Amazon","Tata","Swiggy","Byju's"].map((logo) => (
              <div key={logo} className="shrink-0 px-4 py-2 rounded-md border border-white/10 text-white/70 bg-white/5 text-xs">
                {logo}
              </div>
            ))}
          </div>
          <div className="hidden md:block text-center text-white/80 text-sm">
            Mentors from leading brands and agencies
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Stat label="Placement rate" value="92%" />
            <Stat label="Median CTC" value="₹5.8L" />
            <Stat label="Projects" value="5+" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-xl font-semibold">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </motion.div>
  )
}
