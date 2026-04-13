import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const chatMessages = [
  { role: 'user', text: 'Where is my refund?' },
  { role: 'bot', text: 'Your refund is being processed and should reflect in 3–5 business days. I can also check the latest status for you.' },
];

const insights = [
  { label: 'Refunds', pct: 34, color: 'bg-rose-400' },
  { label: 'Order Status', pct: 28, color: 'bg-amber-400' },
  { label: 'Account Access', pct: 22, color: 'bg-blue-400' },
];

export default function SupportOSAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const CYCLE = 10000;
    let timers = [];

    const run = () => {
      setStep(0);
      timers = [
        setTimeout(() => setStep(1), 600),
        setTimeout(() => setStep(2), 2200),
        setTimeout(() => setStep(3), 4000),
      ];
    };

    run();
    const interval = setInterval(run, CYCLE);
    return () => { timers.forEach(clearTimeout); clearInterval(interval); };
  }, []);

  const ease = [0.16, 1, 0.3, 1];

  return (
    <div className="absolute inset-0 flex flex-col p-3 sm:p-4 md:p-6 overflow-hidden z-10">
      {/* Header badge */}
      <div className="flex items-center gap-2 mb-2 md:mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
        <span className="text-[7px] sm:text-[8px] md:text-[9px] font-mono text-white/25 tracking-widest uppercase">
          Support + Intelligence Engine
        </span>
      </div>

      {/* Chat conversation */}
      <div className="flex flex-col gap-1.5 md:gap-2.5 mb-2 md:mb-4">
        {/* User bubble */}
        <motion.div
          animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 8 }}
          transition={{ duration: 0.4, ease }}
          className="self-end max-w-[85%]"
        >
          <div className="bg-white/[0.08] border border-white/10 rounded-lg rounded-br-sm px-2.5 py-1.5 md:px-3 md:py-2">
            <p className="text-[8px] sm:text-[9px] md:text-xs font-sans text-white/70 leading-relaxed">{chatMessages[0].text}</p>
          </div>
        </motion.div>

        {/* Bot response */}
        <motion.div
          animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 8 }}
          transition={{ duration: 0.4, ease }}
          className="self-start max-w-[88%]"
        >
          <div className="bg-emerald-500/[0.08] border border-emerald-400/15 rounded-lg rounded-bl-sm px-2.5 py-1.5 md:px-3 md:py-2">
            <p className="text-[8px] sm:text-[9px] md:text-xs font-sans text-white/70 leading-relaxed">{chatMessages[1].text}</p>
          </div>
          <span className="text-[6px] md:text-[7px] font-mono text-emerald-400/30 mt-0.5 ml-1 block">Resolved in 0.4s</span>
        </motion.div>
      </div>

      {/* Analytics Panel — conveys "not just a chatbot" */}
      <motion.div
        animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 12 }}
        transition={{ duration: 0.5, ease }}
        className="mt-auto"
      >
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-md md:rounded-lg p-2 md:p-3">
          <div className="flex items-center justify-between mb-1.5 md:mb-2.5">
            <span className="text-[6px] md:text-[8px] font-mono text-white/30 uppercase tracking-wider">Conversation Intelligence</span>
            <span className="text-[6px] md:text-[8px] font-mono text-emerald-400/50">94% auto-resolved</span>
          </div>
          <div className="flex flex-col gap-1 md:gap-1.5">
            {insights.map((item, i) => (
              <motion.div
                key={i}
                animate={{ opacity: step >= 3 ? 1 : 0 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.3 }}
                className="flex items-center gap-1.5 md:gap-2"
              >
                <span className="text-[7px] md:text-[9px] font-mono text-white/40 w-12 md:w-16 shrink-0 truncate">{item.label}</span>
                <div className="flex-1 h-1 md:h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: step >= 3 ? `${item.pct}%` : '0%' }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease }}
                    className={`h-full rounded-full ${item.color} opacity-50`}
                  />
                </div>
                <span className="text-[6px] md:text-[8px] font-mono text-white/25 w-5 text-right">{item.pct}%</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-1.5 md:mt-2 pt-1.5 border-t border-white/[0.05] flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-amber-400/40" />
            <span className="text-[6px] md:text-[8px] font-mono text-white/25">Sentiment: 78% positive · 42 sessions today</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
