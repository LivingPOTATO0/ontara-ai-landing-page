import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroContactForm from '../components/ui/HeroContactForm';
import ProjectShowcase from '../components/ui/ProjectShowcase';
import ServicesHighlight from '../components/ui/ServicesHighlight';
import ApproachSection from '../components/ui/ApproachSection';
import CtaBanner from '../components/ui/CtaBanner';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  // Subtle parallax on the text when scrolled
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main ref={containerRef} style={{ background: 'var(--cream)' }}>
      {/* ─── FOLD ONE: HERO & SLIDER ─── */}
      <div className="min-h-screen flex flex-col justify-between pt-32">
        {/* ─── SINGLE HERO MESSAGE ─── */}
        <motion.div 
          className="container-xl flex-grow flex flex-col justify-center max-w-[1100px] mx-auto px-6"
          style={{ y, opacity }}
        >
            <div className="flex flex-col gap-6 md:gap-10 mb-2 md:mb-6">
            <motion.h1 
              className="font-serif leading-[0.95] tracking-tight font-medium"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', color: 'var(--ink)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              From complexity <br className="hidden md:block"/>to capability.
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-2xl font-serif text-[var(--ink)]/60 max-w-[700px] leading-relaxed tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              We engineer intelligence for businesses that want AI to actually work.
            </motion.p>
          </div>
          
          <HeroContactForm />
        </motion.div>
      </div>

      {/* ─── FOLD TWO: SERVICES HIGHLIGHT ─── */}
      <ServicesHighlight />

      {/* ─── FOLD THREE: PROJECT SHOWCASE ─── */}
      <ProjectShowcase />

      {/* ─── FOLD FOUR: APPROACH SECTION ─── */}
      <ApproachSection />

      {/* ─── FOLD FIVE: CTA BANNER ─── */}
      <CtaBanner />
    </main>
  );
}
