import { motion } from 'framer-motion';

const services = [
  {
    tag: 'AUTONOMOUS AGENTS',
    title: 'Manual workflows are draining your resources.',
    desc: 'Your team spends countless hours on repetitive, multi-step tasks. We build Autonomous AI Agents that operate 24/7, automating complex data processing, research, and operational workflows without human intervention.'
  },
  {
    tag: 'NATURAL LANGUAGE',
    title: 'Data accessibility is too slow and technical.',
    desc: 'Decision-makers wait days for analysts to write SQL just to answer basic business questions. We implement Natural Language Systems that let anyone securely query and converse with your database in simple English.'
  },
  {
    tag: 'INTELLIGENT DASHBOARDS',
    title: 'Your analytics are scattered across silos.',
    desc: 'You have massive amounts of data trapped in CSV exports and static spreadsheets. We engineer Intelligent Dashboards that instantly unify fragmented data streams, providing real-time visualization and forecasting.'
  },
  {
    tag: 'AI INTEGRATION',
    title: 'Your existing software feels outdated.',
    desc: 'Legacy internal tooling lacks modern intelligence. We seamlessly integrate generative AI, classification models, and intelligent co-pilots directly into your existing applications to instantly upgrade their capabilities.'
  }
];

export default function ServicesHighlight() {
  return (
    <section className="dark-section py-32 md:py-48 px-6 md:px-12 w-full" style={{ background: '#000000', color: 'white' }}>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.h2 
            className="font-serif leading-tight font-medium w-full md:w-1/2"
            style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', tracking: '-0.02em', color: 'rgba(255,255,255,0.95)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            The problems<br />we solve.
          </motion.h2>
          <motion.p
            className="text-base md:text-lg font-mono text-white/50 w-full md:w-1/3 leading-relaxed tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We don't just write code. We engineer intelligent systems to eliminate your operational bottlenecks.
          </motion.p>
        </div>

        {/* Full-width Stacked List */}
        <div className="flex flex-col w-full border-t border-white/10">
            {services.map((service, index) => (
              <motion.div 
                key={service.tag}
                className="group relative flex flex-col lg:flex-row gap-6 lg:gap-12 py-12 lg:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 cursor-default px-4 -mx-4 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Tag Column */}
                <div className="lg:w-[20%] shrink-0 flex flex-col justify-start pt-2">
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/30 group-hover:text-white/80 transition-colors duration-500 font-mono">
                    0{index + 1} — {service.tag}
                  </span>
                </div>
                
                {/* Title Column */}
                <div className="lg:w-[40%] flex flex-col justify-start">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white/80 font-serif leading-snug group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Desc Column */}
                <div className="lg:w-[40%] flex flex-col justify-start pt-1 lg:pt-2">
                  <p className="text-base md:text-lg text-white/50 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-sans max-w-xl">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
