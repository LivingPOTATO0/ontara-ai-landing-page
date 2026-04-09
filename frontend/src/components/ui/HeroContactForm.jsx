import { useState } from 'react';
import { motion } from 'framer-motion';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import { sendEmail } from '../../lib/emailService';

// Shared key used by both HeroContactForm and Contact page
const STORAGE_KEY = 'ontara_submitted';

const reset = (setStatus) => {
  localStorage.removeItem(STORAGE_KEY);
  setStatus('idle');
};

export default function HeroContactForm() {
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  // Read shared key — if Contact page was also submitted, show success here too
  const [status, setStatus] = useState(() =>
    localStorage.getItem(STORAGE_KEY) === 'true' ? 'success' : 'idle'
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendEmail({
        from_name: name,
        from_email: email,
        subject: `New enquiry from ${name}`,
        message: `Name: ${name}\nEmail: ${email}\n\nLooking to build:\n${project}`,
      });
      // Write to shared key so Contact page also sees it as submitted
      localStorage.setItem(STORAGE_KEY, 'true');
      setStatus('success');
      setName(''); setEmail(''); setProject('');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1000px] mt-10 lg:mt-20 flex flex-col gap-4 px-5 py-5 sm:px-8 sm:py-7 rounded-2xl sm:rounded-[2rem]"
        style={{
          background: 'rgba(26, 26, 24, 0.04)',
          border: '1px solid rgba(26, 26, 24, 0.1)',
        }}
      >
        {/* Top row: orb + text */}
        <div className="flex items-center gap-4">
          {/* Animated check orb */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(152, 195, 121, 0.15)', border: '1px solid rgba(152,195,121,0.4)' }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <motion.path
                d="M4 10.5L8 14.5L16 6"
                stroke="#98c379"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
              />
            </svg>
          </motion.div>

          <div className="flex flex-col gap-0.5 min-w-0">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-sans font-semibold text-[var(--ink)] tracking-tight text-base sm:text-lg"
            >
              Message sent.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-[var(--ink)]/40 leading-snug"
            >
              Meet or Jash will reply shortly.
            </motion.p>
          </div>
        </div>

        {/* Resubmit — sits below on all sizes */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          onClick={() => reset(setStatus)}
          className="self-start text-[10px] font-mono tracking-widest uppercase text-[var(--ink)]/30 hover:text-[var(--ink)]/70 transition-colors underline underline-offset-4 pl-14 sm:pl-16"
        >
          Wrong info? Resubmit
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[1000px] mt-16 lg:mt-20"
      onSubmit={handleSubmit}
    >
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-mono text-red-400 mb-3 px-2"
        >
          Something went wrong. Please email us directly at ontaraai@gmail.com
        </motion.p>
      )}
      <div
        className="relative rounded-3xl md:rounded-full p-2 md:p-3 flex flex-col md:flex-row items-center gap-3 transition-all duration-500 ease-out"
        style={{
          background: 'rgba(232, 226, 217, 0.4)',
          border: '1px solid',
          borderColor: isFocused ? 'rgba(26, 26, 24, 0.2)' : 'rgba(26, 26, 24, 0.1)',
          boxShadow: isFocused ? '0 10px 40px rgba(0,0,0,0.06)' : 'none'
        }}
      >
        <div className="flex w-full md:w-[75%] flex-col md:flex-row">
          <input
            type="text"
            placeholder="Hi, I'm..."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent px-6 py-4 outline-none text-lg placeholder:text-[var(--ink)]/40 border-b md:border-b-0 md:border-r border-[var(--ink)]/10"
            style={{ color: 'var(--ink)' }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <input
            type="email"
            placeholder="My email is..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent px-6 py-4 outline-none text-lg placeholder:text-[var(--ink)]/40 border-b md:border-b-0 md:border-r border-[var(--ink)]/10"
            style={{ color: 'var(--ink)' }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <input
            type="text"
            placeholder="I'm looking to build..."
            required
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full bg-transparent px-6 py-4 outline-none text-lg placeholder:text-[var(--ink)]/40"
            style={{ color: 'var(--ink)' }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full md:w-[25%] h-full min-h-[60px] bg-[var(--ink)] text-white rounded-2xl md:rounded-full py-4 px-6 font-medium text-xs md:text-sm tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Sending...
            </span>
          ) : (
            <>Get started <ArrowUpRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>
          )}
        </button>
      </div>
    </motion.form>
  );
}
