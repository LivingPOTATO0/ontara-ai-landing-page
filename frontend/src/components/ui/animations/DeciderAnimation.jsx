import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const chartData = [
  { label: 'Q1', value: 42 },
  { label: 'Q2', value: 61 },
  { label: 'Q3', value: 78 },
  { label: 'Q4', value: 93 },
];

const metrics = [
  { label: 'Revenue Growth', value: '+23%' },
  { label: 'Forecast Acc.', value: '94.2%' },
  { label: 'Live Agents', value: '3' },
];

export default function DeciderAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const CYCLE = 10000;
    let timers = [];

    const run = () => {
      setStep(0);
      timers = [
        setTimeout(() => setStep(1), 600),
        setTimeout(() => setStep(2), 3000),
        setTimeout(() => setStep(3), 5000),
      ];
    };

    run();
    const interval = setInterval(run, CYCLE);
    return () => { timers.forEach(clearTimeout); clearInterval(interval); };
  }, []);

  const ease = [0.16, 1, 0.3, 1];
  const barColors = ['bg-blue-400', 'bg-emerald-400', 'bg-amber-400', 'bg-rose-400'];

  return (
    <div className="absolute inset-0 flex flex-col p-3 sm:p-4 md:p-6 overflow-hidden z-10">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2 md:mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 animate-pulse" />
        <span className="text-[7px] sm:text-[8px] md:text-[9px] font-mono text-white/25 tracking-widest uppercase">
          Self-Mutating Dashboard
        </span>
      </div>

      {/* Bar chart */}
      <motion.div
        animate={{ opacity: step >= 1 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 min-h-0 flex items-end gap-1.5 sm:gap-2 md:gap-3 px-1 md:px-3 mb-2 md:mb-3"
      >
        {chartData.map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-0.5 md:gap-1 h-full">
            <div className="w-full flex-1 relative rounded-t-sm md:rounded-t-md overflow-hidden bg-white/[0.02]">
              <motion.div
                animate={{ height: step >= 1 ? `${bar.value}%` : '0%' }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease }}
                className={`absolute bottom-0 left-0 right-0 ${barColors[i]} opacity-35 rounded-t-sm md:rounded-t-md`}
              />
              {/* Value label on top of bar */}
              <motion.span
                animate={{ opacity: step >= 1 ? 1 : 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
                className="absolute left-1/2 -translate-x-1/2 text-[6px] md:text-[8px] font-mono text-white/40"
                style={{ bottom: `${bar.value + 3}%` }}
              >
                {bar.value}
              </motion.span>
            </div>
            <span className="text-[6px] md:text-[8px] font-mono text-white/25">{bar.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Metrics row */}
      <motion.div
        animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 8 }}
        transition={{ duration: 0.4, ease }}
        className="grid grid-cols-3 gap-1 md:gap-2 mb-2 md:mb-3"
      >
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            animate={{ opacity: step >= 2 ? 1 : 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-md md:rounded-lg p-1 md:p-2 text-center"
          >
            <div className="text-[9px] md:text-sm font-mono text-white/80 font-medium">{m.value}</div>
            <div className="text-[5px] md:text-[7px] font-mono text-white/20 uppercase tracking-wider mt-0.5 leading-tight">{m.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* AI Recommendation card */}
      <motion.div
        animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 12 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="bg-amber-500/[0.06] border border-amber-400/15 rounded-md md:rounded-lg p-2 md:p-3">
          <div className="flex items-center gap-1.5 mb-0.5 md:mb-1">
            <div className="w-1 h-1 rounded-full bg-amber-400/60" />
            <span className="text-[6px] md:text-[8px] font-mono text-amber-400/50 uppercase tracking-wider">AI Recommendation</span>
          </div>
          <p className="text-[7px] sm:text-[8px] md:text-[10px] font-sans text-white/50 leading-relaxed">
            Revenue trending +23% QoQ. Consider expanding enterprise tier pricing for maximum capture.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
