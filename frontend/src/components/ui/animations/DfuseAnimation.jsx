import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const query = 'Which reps grew revenue the most last quarter?';

const results = [
  { name: 'Alex Morgan', value: '+$52K growth' },
  { name: 'Jordan Lee', value: '+$47K growth' },
  { name: 'Taylor Smith', value: '+$41K growth' },
  { name: 'Casey Nguyen', value: '+$38K growth' },
];

export default function DfuseAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const CYCLE = 10000;
    let timers = [];

    const run = () => {
      setStep(0);
      timers = [
        setTimeout(() => setStep(1), 700),
        setTimeout(() => setStep(2), 2400),
      ];
    };

    run();
    const interval = setInterval(run, CYCLE);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  const ease = [0.16, 1, 0.3, 1];

  return (
    <div className="absolute inset-0 flex flex-col p-3 sm:p-4 md:p-5 lg:p-6 overflow-hidden z-10">
      {/* Header badge */}
      <div className="flex items-center gap-2 mb-2 md:mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
        <span className="text-[7px] sm:text-[8px] md:text-[9px] font-mono text-white/25 tracking-widest uppercase truncate">
          247 tables · 1,400+ columns · Live
        </span>
      </div>

      {/* Natural language query */}
      <motion.div
        animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 8 }}
        transition={{ duration: 0.45, ease }}
        className="mb-2 md:mb-3 lg:mb-4"
      >
        <div className="inline-flex items-start gap-1.5 md:gap-2 bg-white/[0.06] border border-white/10 rounded-lg md:rounded-xl px-2.5 py-1.5 md:px-3.5 md:py-2.5 max-w-[92%] sm:max-w-[88%] lg:max-w-[78%]">
          <span className="text-white/30 text-[9px] md:text-xs mt-px shrink-0">→</span>
          <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-sm font-sans text-white/78 leading-relaxed">
            {query}
          </p>
        </div>
      </motion.div>

      {/* Bottom answer panel */}
      <motion.div
        animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 12 }}
        transition={{ duration: 0.55, ease }}
        className="mt-auto"
      >
        <div className="mb-2 md:mb-2.5 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[7px] md:text-[8px] lg:text-[9px] font-mono uppercase tracking-[0.24em] text-white/30 truncate">
              Answer table
            </div>
            <div className="text-[8px] md:text-[9px] lg:text-xs text-white/55 mt-0.5 truncate">
              Ranked results from your database
            </div>
          </div>

          <div className="shrink-0 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] font-mono uppercase tracking-wider text-emerald-300">
            Instant insight
          </div>
        </div>

        <div className="border border-white/[0.10] rounded-md md:rounded-lg overflow-hidden bg-white/[0.03] shadow-[0_0_0_1px_rgba(16,185,129,0.06),0_20px_60px_rgba(0,0,0,0.18)]">
          {/* Table header */}
          <div className="flex bg-white/[0.05]">
            <div className="flex-1 px-2 md:px-3 py-1 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] font-mono text-white/30 uppercase tracking-wider">
              Rep
            </div>
            <div className="w-16 sm:w-20 md:w-24 px-2 md:px-3 py-1 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] font-mono text-white/30 uppercase tracking-wider text-right">
              Revenue
            </div>
          </div>

          {/* Table rows */}
          {results.map((r, i) => (
            <motion.div
              key={i}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 8 }}
              transition={{ delay: 0.12 + i * 0.08, duration: 0.3 }}
              className={[
                'flex border-t border-white/[0.05] transition-all',
                i === 0 ? 'bg-emerald-400/[0.10]' : 'bg-transparent',
              ].join(' ')}
            >
              <div className="flex-1 min-w-0 px-2 md:px-3 py-1 md:py-1.5 text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-mono text-white/72 truncate">
                {r.name}
              </div>
              <div className="w-16 sm:w-20 md:w-24 px-2 md:px-3 py-1 md:py-1.5 text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-mono text-white/90 text-right font-medium whitespace-nowrap">
                {r.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tiny footer line for balance on large screens */}
        <div className="mt-2 md:mt-2.5 flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-emerald-400/40" />
          <span className="text-[6px] sm:text-[7px] md:text-[8px] font-mono text-white/25 truncate">
            Fast query resolution · compact dashboard view
          </span>
        </div>
      </motion.div>
    </div>
  );
}