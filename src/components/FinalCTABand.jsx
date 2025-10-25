import { motion } from 'framer-motion'

export default function FinalCTABand({ onEnquire }) {
  return (
    <section id="knowledge" className="relative mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <ArticleCard title="Digital marketing course after 12th" tag="Guides" />
          <ArticleCard title="Performance marketing career path" tag="Careers" />
          <ArticleCard title="GA4 training. A simple start" tag="Analytics" />
        </div>
        <div className="flex items-center justify-between mt-8">
          <a href="#" className="text-sm text-white/80 hover:text-white">Explore more resources</a>
          <a id="hire" href="#" className="text-sm text-white/80 hover:text-white">Hire from NIHT</a>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-[#111419] via-[#0c0e12] to-[#111419] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Find your programme</h3>
            <p className="text-white/80 mt-2 text-sm max-w-xl">Answer a few quick questions. Get a personalised path and a pre-filled form. Takes under a minute.</p>
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onEnquire} className="px-5 py-3 rounded-lg bg-[#34E1E1] text-[#0c0e12] font-semibold">
            Start the short quiz
          </motion.button>
        </div>
      </div>
    </section>
  )
}

function ArticleCard({ title, tag }) {
  return (
    <motion.a href="#" whileHover={{ y: -2 }} className="block rounded-2xl overflow-hidden border border-white/10 bg-white/5">
      <div className="aspect-[16/9] bg-gradient-to-tr from-[#34E1E1]/20 to-[#FF5533]/20" />
      <div className="p-4">
        <div className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 inline-block mb-2 text-white/70">{tag}</div>
        <h4 className="text-sm md:text-base text-white/90">{title}</h4>
      </div>
    </motion.a>
  )
}
