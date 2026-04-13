import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import SupportOSAnimation from './animations/SupportOSAnimation';
import DfuseAnimation from './animations/DfuseAnimation';
import DeciderAnimation from './animations/DeciderAnimation';

const projects = [
  {
    id: 'supportos',
    name: 'SupportOS',
    tags: ['SUPPORT', 'ANALYSIS', 'INTELLIGENCE'],
    title: "Support teams are usually drowned in tickets with no visibility into patterns. We built an AI system that resolves queries instantly while continuously analyzing conversations - surfacing sentiment trends, recurring issues, and actionable intelligence from every interaction.",
    glow: 'from-[#98c379] to-[#61afef]',
    link: 'https://supportos.site',
    external: true,
    Animation: SupportOSAnimation,
  },
  {
    id: 'dfuse',
    name: 'Dfuse Data',
    tags: ['TEXT-TO-SQL', 'ENTERPRISE', 'BIG DATA'],
    title: "Databases with hundreds of tables have one bottleneck: every insight requires an engineer to write SQL. We built a system for massive enterprise schemas where anyone types a question in plain English and gets the right answer instantly - with deterministic JOINs and zero hallucination.",
    glow: 'from-[#e06c75] to-[#c678dd]',
    link: 'https://dfuse.site',
    external: true,
    Animation: DfuseAnimation,
  },
  {
    id: 'decider',
    name: 'Decider AI',
    tags: ['DASHBOARD', 'SELF-MUTATING', 'AGENTS'],
    title: "Sales teams usually export CSVs and wait days for reports. We built an agent-driven Intelligence Dashboard: upload raw data, get instant AI-generated visualizations, and receive actionable recommendations. The dashboard mutates itself based on what it discovers in your data.",
    glow: 'from-[#e5c07b] to-[#d19a66]',
    link: '/work',
    external: false,
    Animation: DeciderAnimation,
  }
];

export default function ProjectShowcase() {
  return (
    <section className="dark-section py-20 md:py-48 px-6 md:px-12 w-full relative" style={{ background: 'var(--navy)' }}>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h2 
            className="font-sans text-3xl md:text-6xl text-white font-medium tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineering Outcomes.
          </motion.h2>
          <motion.p
            className="hidden md:block text-base md:text-lg font-mono text-white/50 w-full md:w-1/3 leading-relaxed tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            A selection of intelligence systems built to eliminate real business bottlenecks.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const { Animation } = project;

            // Visual box inner content (shared between <a> and <Link>)
            const visualBox = (
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#02040A]">
                {/* Dot grid overlay */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                
                {/* Ambient glow orb (behind animation) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className={`w-[50%] aspect-square rounded-full bg-gradient-to-tr ${project.glow} opacity-20 blur-[80px] mix-blend-screen transition-all duration-1000 group-hover:scale-110 group-hover:opacity-40 group-hover:blur-[100px]`} />
                </div>

                {/* Live animation */}
                <Animation />
              </div>
            );

            const boxClasses = "w-full lg:w-[50%] shrink-0 group block border border-white/10 bg-white/[0.01] rounded-[2rem] p-2 md:p-4 hover:border-white/20 transition-colors duration-500";

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-12 lg:gap-24 items-center`}>
                  
                  {/* Visual Box Container — external vs internal link */}
                  {project.external ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className={boxClasses}>
                      {visualBox}
                    </a>
                  ) : (
                    <Link to={project.link} className={boxClasses}>
                      {visualBox}
                    </Link>
                  )}

                  {/* Copy */}
                  <div className="w-full lg:w-[50%] flex flex-col items-start gap-5 md:gap-8">
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 md:px-4 py-1 md:py-1.5 text-[9px] md:text-[10px] font-mono font-bold tracking-widest border border-white/10 rounded-full text-white/50 bg-white/[0.02]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4">
                      {/* Project Name */}
                      <span className="text-xl md:text-2xl font-bold tracking-tight font-sans text-white group-hover:text-[#e5c07b] transition-colors duration-500">
                        {project.name}
                      </span>
                      
                      {/* Description */}
                      <p className="text-sm md:text-lg lg:text-xl text-white/60 font-sans leading-relaxed tracking-tight group-hover:text-white/80 transition-colors duration-500">
                        {project.title}
                      </p>
                    </div>

                    {/* CTA */}
                    {project.external ? (
                      <a href={project.link} target="_blank" rel="noreferrer" className="mt-2 md:mt-4 flex items-center gap-3 md:gap-4 group/btn">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300">
                          <ArrowUpRightIcon className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </div>
                        <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#e5c07b] uppercase group-hover/btn:text-white transition-colors duration-300">
                          Visit Project
                        </span>
                      </a>
                    ) : (
                      <Link to={project.link} className="mt-2 md:mt-4 flex items-center gap-3 md:gap-4 group/btn">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300">
                          <ArrowUpRightIcon className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </div>
                        <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#e5c07b] uppercase group-hover/btn:text-white transition-colors duration-300">
                          Read Case Study
                        </span>
                      </Link>
                    )}

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
