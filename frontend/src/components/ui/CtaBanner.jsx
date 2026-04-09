import { motion } from 'framer-motion';
import CardSlider from './CardSlider';

export default function CtaBanner() {
  return (
    <section className="w-full relative overflow-hidden pb-32 pt-16 border-t border-black/5" style={{ backgroundColor: '#F3EAC2' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row items-end justify-between gap-10">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif leading-tight text-[clamp(2rem,4vw,4rem)] tracking-tight font-medium"
            style={{ color: 'var(--ink)' }}
          >
            Explore our universe.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[var(--ink)]/70 mt-4 md:mt-6 max-w-lg leading-relaxed"
          >
             Navigate through our insights, case studies, and core offerings to discover how we engineer intelligent systems.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <CardSlider />
      </motion.div>
    </section>
  );
}
