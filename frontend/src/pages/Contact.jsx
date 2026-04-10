import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ui/ScrollReveal';
import { sendEmail } from '../lib/emailService';

const fields = [
  { id: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Smith' },
  { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corp' },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@acme.com' },
];

// Shared key used by both HeroContactForm and Contact page
const STORAGE_KEY = 'ontara_submitted';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '', intent: '' });
  const [focused, setFocused] = useState(null);
  // Read shared key — if Hero form was also submitted, show success here too
  const [submitted, setSubmitted] = useState(() =>
    localStorage.getItem(STORAGE_KEY) === 'true'
  );
  const [submitting, setSubmitting] = useState(false);
  const [sendError, setSendError] = useState(false);

  const intents = [
    'Start a custom project', 'Explore a retainer', 'Embed SupportOS', 'Integrate Decider AI', 'Something else',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSendError(false);

    try {
      await sendEmail({
        from_name: form.name,
        from_email: form.email,
        subject: `New project enquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`,
        message: `Name: ${form.name}\nCompany: ${form.company || 'N/A'}\nEmail: ${form.email}\nIntent: ${form.intent || 'Not specified'}\n\nMessage:\n${form.message}`,
      });
      localStorage.setItem(STORAGE_KEY, 'true');
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-[var(--cream)] min-h-screen text-[var(--ink)]">
      {/* ─── REFINED HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[50%] h-[150%] rounded-full bg-gradient-to-tr from-[#98c379] to-[#61afef] blur-[150px] opacity-[0.05] mix-blend-screen pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <div className="max-w-[600px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-black/20" />
                <p className="text-xs font-mono tracking-widest uppercase text-black/50">Direct Access</p>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[var(--ink)] mb-4">
                Ready to engineer your intelligence layer?
              </h1>
            </div>
            <div className="max-w-[500px] flex flex-col gap-6 md:pb-2">
              <div className="border-l border-[var(--ink)]/20 pl-6">
                <p className="text-lg font-sans text-[var(--ink)]/80 leading-relaxed">
                  We don't outsource. You will speak directly with the architects who build the systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ── */}
      <div className="dark-section bg-[#02040A] text-white py-24 md:py-32 px-6 md:px-12 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-32">
            
            {/* Left: Contact Info */}
            <ScrollReveal>
              <div className="flex flex-col gap-16 lg:sticky lg:top-32">
                <div>
                   <p className="font-mono text-xs tracking-widest text-[#e5c07b] uppercase mb-6">Primary Contact</p>
                   <a 
                     href="mailto:ontaraai@gmail.com" 
                     className="text-3xl md:text-4xl font-sans text-white hover:text-white/70 transition-colors break-all"
                   >
                     ontaraai@gmail.com
                   </a>
                </div>

                <div>
                  <p className="font-mono text-xs tracking-widest text-white/30 uppercase mb-6">Direct Line To</p>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-4 border border-white/10 bg-white/[0.02] p-4 rounded-2xl w-full">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black">
                        <span className="font-sans font-bold text-lg text-[#e5c07b]">MV</span>
                      </div>
                      <div>
                        <p className="font-sans text-lg">Meet</p>
                        <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider">AI/ML Engineer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 border border-white/10 bg-white/[0.02] p-4 rounded-2xl w-full">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black">
                        <span className="font-sans font-bold text-lg text-[#61afef]">J</span>
                      </div>
                      <div>
                        <p className="font-sans text-lg">Jash</p>
                        <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider">AI Architect</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                   <p className="font-mono text-xs tracking-widest text-[#e5c07b] uppercase mb-4">Response Guarantee</p>
                   <p className="font-sans text-lg text-white/70 leading-relaxed">
                     We reply to all technical inquiries within 24 hours. Because we exclusively handle engineering in-house, we only take on projects where we can genuinely extract value.
                   </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: The Form */}
            <ScrollReveal delay={0.2}>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-12 bg-white/[0.01] border border-white/10 rounded-[3rem] p-8 md:p-16"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Intents */}
                    <div>
                      <p className="font-mono text-xs tracking-widest uppercase text-white/40 mb-6">What are we building?</p>
                      <div className="flex flex-wrap gap-3">
                        {intents.map((intent) => (
                          <button
                            key={intent}
                            type="button"
                            onClick={() => setForm(f => ({ ...f, intent }))}
                            className={`px-5 py-3 rounded-full text-sm font-mono tracking-widest transition-all duration-300 border ${
                              form.intent === intent 
                                ? 'border-[#e5c07b] bg-[#e5c07b]/10 text-[#e5c07b]' 
                                : 'border-white/10 bg-transparent text-white/40 hover:border-white/30 hover:text-white'
                            }`}
                          >
                            {intent}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="flex flex-col gap-8">
                      {fields.map(({ id, label, type, placeholder }) => (
                        <div key={id} className="flex flex-col relative group">
                          <label
                            htmlFor={id}
                            className={`absolute left-0 transition-all duration-300 font-mono text-xs tracking-widest uppercase pointer-events-none ${
                              focused === id || form[id] ? '-top-5 text-[#e5c07b]' : 'top-3 text-white/30'
                            }`}
                          >
                            {label}
                          </label>
                          <input
                            id={id}
                            type={type}
                            required
                            value={form[id]}
                            onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                            onFocus={() => setFocused(id)}
                            onBlur={() => setFocused(null)}
                            className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-2xl font-sans text-white focus:outline-none focus:border-[#e5c07b] transition-colors"
                          />
                        </div>
                      ))}

                      {/* Message Textarea */}
                      <div className="flex flex-col relative mt-4 group">
                        <label
                          htmlFor="message"
                          className={`absolute left-0 transition-all duration-300 font-mono text-xs tracking-widest uppercase pointer-events-none ${
                            focused === 'message' || form.message ? '-top-5 text-[#e5c07b]' : 'top-3 text-white/30'
                          }`}
                        >
                          Project Details (Data sources, bottlenecks, tools)
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                          className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-xl font-sans text-white focus:outline-none focus:border-[#e5c07b] transition-colors resize-none mt-2"
                        />
                      </div>
                    </div>

                    {/* Error state */}
                    {sendError && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs font-mono text-red-400 mt-4 tracking-widest"
                      >
                        ⚠ Send failed. Please email us directly at ontaraai@gmail.com
                      </motion.p>
                    )}

                    {/* Submit Btn */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-4 flex items-center justify-center gap-4 bg-white text-black w-full py-6 rounded-2xl hover:bg-[#e5c07b] transition-colors disabled:opacity-50"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase font-bold">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="font-mono text-sm tracking-widest uppercase font-bold">Deploy Request</span>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center text-center gap-8 py-16 px-6 md:py-36 md:px-0 bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-[3rem] relative overflow-hidden"
                  >
                    {/* Background glow — capped so it doesn't overflow on mobile */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(500px,100%)] h-[200px] md:h-[300px] bg-gradient-to-tr from-[#98c379]/20 to-[#61afef]/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

                    {/* Check orb */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.6, type: 'spring', stiffness: 180 }}
                      className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(152, 195, 121, 0.12)', border: '1px solid rgba(152,195,121,0.35)' }}
                    >
                      <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                        <motion.path
                          d="M7 17L13 23L25 10"
                          stroke="#98c379"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                        />
                      </svg>
                    </motion.div>

                    <div className="relative z-10 flex flex-col gap-3 px-4">
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.5 }}
                        className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#98c379] mb-1"
                      >
                        Request Received
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.5 }}
                        className="text-3xl md:text-5xl font-sans font-medium text-white tracking-tight"
                      >
                        We'll be in touch.
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-sm md:text-lg font-sans text-white/40 max-w-[320px] md:max-w-[360px] mx-auto leading-relaxed"
                      >
                        Meet or Jash will personally follow up with you shortly.
                      </motion.p>
                    </div>

                    {/* Resubmit button */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      onClick={() => {
                        localStorage.removeItem(STORAGE_KEY);
                        setSubmitted(false);
                      }}
                      className="relative z-10 text-[10px] font-mono tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors underline underline-offset-4"
                    >
                      Wrong info? Resubmit
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </ScrollReveal>
            
          </div>
        </div>
      </div>
    </main>
  );
}
