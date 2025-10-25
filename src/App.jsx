import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import ValueProofStrip from './components/ValueProofStrip'
import ProgrammesOverview from './components/ProgrammesOverview'
import FinalCTABand from './components/FinalCTABand'
import { Phone, MessageCircle } from 'lucide-react'

function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [intent, setIntent] = useState('Student')
  const [formData, setFormData] = useState({
    intent: 'Student',
    goal: '',
    experience: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    consent: false,
  })

  useEffect(() => {
    if (!enquiryOpen) {
      setStep(1)
    }
  }, [enquiryOpen])

  const openEnquiry = () => setEnquiryOpen(true)
  const closeEnquiry = () => setEnquiryOpen(false)

  const nextStep = () => setStep((s) => Math.min(3, s + 1))
  const prevStep = () => setStep((s) => Math.max(1, s - 1))

  const onChange = (field, value) => {
    if (field === 'intent') setIntent(value)
    setFormData((d) => ({ ...d, [field]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // For sandbox demo, just close and alert
    closeEnquiry()
    alert('Thanks. We will contact you shortly.')
  }

  return (
    <div className="min-h-screen bg-[#0c0e12] text-white font-inter">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-black/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#34E1E1] to-[#FF5533]" />
            <span className="text-sm tracking-wide uppercase text-white/80">NIHT Digital Marketing</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#programmes" className="hover:text-white">Programmes</a>
            <a href="#proof" className="hover:text-white">Outcomes</a>
            <a href="#knowledge" className="hover:text-white">Knowledge</a>
            <a href="#hire" className="hover:text-white">Hire</a>
          </nav>
          <button onClick={openEnquiry} className="px-4 py-2 rounded-md bg-[#FF5533] text-white text-sm font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34E1E1] focus:ring-offset-[#0c0e12]">
            Enquire now
          </button>
        </div>
      </header>

      <main>
        <Hero onEnquire={openEnquiry} />
        <ValueProofStrip />
        <ProgrammesOverview onEnquire={openEnquiry} />
        <FinalCTABand onEnquire={openEnquiry} />
      </main>

      {/* Sticky mobile action bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40">
        <div className="mx-3 mb-3 rounded-2xl shadow-lg border border-white/10 bg-[#121418]/95 backdrop-blur">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            <a href="tel:+910000000000" className="flex items-center justify-center gap-2 py-3 text-white/90">
              <Phone size={18} />
              <span className="text-xs">Call</span>
            </a>
            <a href="https://wa.me/910000000000" className="flex items-center justify-center gap-2 py-3 text-white/90">
              <MessageCircle size={18} />
              <span className="text-xs">WhatsApp</span>
            </a>
            <button onClick={openEnquiry} className="flex items-center justify-center gap-2 py-3 text-white/90">
              <span className="text-xs">Apply</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enquiry modal */}
      <AnimatePresence>
        {enquiryOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }} className="w-full max-w-lg bg-[#0f1218] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Enquire about NIHT programmes</h3>
                <button onClick={closeEnquiry} className="text-white/60 hover:text-white text-sm">Close</button>
              </div>
              <div className="px-6 pt-4">
                <div className="flex items-center gap-2 text-xs text-white/70 pb-4">
                  <span className={"px-2 py-1 rounded-md " + (step === 1 ? 'bg-[#34E1E1]/20 text-white' : 'bg-white/5')}>1. Intent</span>
                  <span className="text-white/30">→</span>
                  <span className={"px-2 py-1 rounded-md " + (step === 2 ? 'bg-[#34E1E1]/20 text-white' : 'bg-white/5')}>2. Background</span>
                  <span className="text-white/30">→</span>
                  <span className={"px-2 py-1 rounded-md " + (step === 3 ? 'bg-[#34E1E1]/20 text-white' : 'bg-white/5')}>3. Contact</span>
                </div>
              </div>
              <form onSubmit={onSubmit} className="p-6 pt-0 space-y-4">
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">I am a</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Student','Employer'].map((opt) => (
                          <button type="button" key={opt} onClick={() => onChange('intent', opt)} className={`px-3 py-2 rounded-md border ${intent===opt? 'border-[#34E1E1] bg-[#34E1E1]/10': 'border-white/10 bg-white/5'} text-sm`}>{opt}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="goal" className="block text-sm mb-2">Goal</label>
                      <select id="goal" value={formData.goal} onChange={(e)=>onChange('goal', e.target.value)} className="w-full bg-[#0c0e12] border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#34E1E1]">
                        <option value="">Select a goal</option>
                        <option>Start a career in marketing</option>
                        <option>Upskill for current role</option>
                        <option>Hire talent</option>
                      </select>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">Experience level</label>
                      <select value={formData.experience} onChange={(e)=>onChange('experience', e.target.value)} className="w-full bg-[#0c0e12] border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#34E1E1]">
                        <option value="">Select</option>
                        <option>Beginner</option>
                        <option>1–3 years</option>
                        <option>3+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">When do you plan to start</label>
                      <select value={formData.timeline} onChange={(e)=>onChange('timeline', e.target.value)} className="w-full bg-[#0c0e12] border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#34E1E1]">
                        <option value="">Choose</option>
                        <option>Immediately</option>
                        <option>Within 1 month</option>
                        <option>Within 3 months</option>
                      </select>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm mb-2">Full name</label>
                        <input required value={formData.name} onChange={(e)=>onChange('name', e.target.value)} className="w-full bg-[#0c0e12] border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#34E1E1]" />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">Email</label>
                        <input type="email" required value={formData.email} onChange={(e)=>onChange('email', e.target.value)} className="w-full bg-[#0c0e12] border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#34E1E1]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Phone</label>
                      <input type="tel" required value={formData.phone} onChange={(e)=>onChange('phone', e.target.value)} className="w-full bg-[#0c0e12] border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#34E1E1]" />
                    </div>
                    <label className="flex items-center gap-2 text-xs text-white/70">
                      <input type="checkbox" checked={formData.consent} onChange={(e)=>onChange('consent', e.target.checked)} className="accent-[#34E1E1]" />
                      I agree to be contacted about programmes.
                    </label>
                  </div>
                )}
                <div className="pt-2 flex items-center justify-between">
                  <button type="button" onClick={step===1? closeEnquiry: prevStep} className="text-sm text-white/80 hover:text-white">{step===1? 'Cancel': 'Back'}</button>
                  {step < 3 ? (
                    <button type="button" onClick={nextStep} className="px-4 py-2 rounded-md bg-[#FF5533] text-white text-sm font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34E1E1] focus:ring-offset-[#0f1218]">Next</button>
                  ) : (
                    <button type="submit" className="px-4 py-2 rounded-md bg-[#34E1E1] text-[#0c0e12] text-sm font-semibold hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34E1E1] focus:ring-offset-[#0f1218]">Submit</button>
                  )}
                </div>
                <div className="pb-4 text-[11px] text-white/50">Fast response. We reply within one business day.</div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-20 border-t border-white/10 bg-[#0f1218]">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-white/70">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-[#34E1E1] to-[#FF5533]" />
              <span className="text-white">NIHT</span>
            </div>
            <p>Agency-backed learning. Results that outlast trends.</p>
          </div>
          <div>
            <p className="text-white mb-2">Programmes</p>
            <ul className="space-y-1">
              <li><a className="hover:text-white" href="#programmes">Master</a></li>
              <li><a className="hover:text-white" href="#programmes">Certificate</a></li>
              <li><a className="hover:text-white" href="#programmes">Premier</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white mb-2">Contact</p>
            <p>Call +91 00000 00000</p>
            <p>Email hello@niht.ac</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
