import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';

const projects = [
  {
    id: 'support-agent',
    name: 'Customer Support Agent',
    tags: ['SUPPORT', 'ANALYSIS', 'PIPELINE'],
    title: "Support teams are usually drowned in tickets with no visibility into patterns. We built an AI agent that answers questions, escalates edge cases, and automatically generates dashboards, turning support into a strategic intelligence source.",
    glow: 'from-[#98c379] to-[#61afef]'
  },
  {
    id: 'text-to-sql',
    name: 'Enterprise Text-to-SQL',
    tags: ['DATA', 'INSIGHTS', 'VISUALIZATION'],
    title: "Databases with hundreds of tables have one bottleneck: every insight requires an engineer to write SQL. We built a system where anyone types a question in plain English and gets the right answer instantly, including automatic entity resolution.",
    glow: 'from-[#e06c75] to-[#c678dd]'
  },
  {
    id: 'sales-dashboard',
    name: 'Intelligent Sales Dashboard',
    tags: ['DASHBOARD', 'CHAT INTERFACE', 'SALES'],
    title: "Sales teams usually export CSVs and wait days for reports. We built a standalone Intelligence Dashboard: upload raw sales data, view instant visualizations, and ask questions in natural language. From raw data to actionable insight in under a minute.",
    glow: 'from-[#e5c07b] to-[#d19a66]'
  }
];

export default function ProjectShowcase() {
  return (
    <section className="dark-section py-32 md:py-48 px-6 md:px-12 w-full relative" style={{ background: 'var(--navy)' }}>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h2 
            className="font-sans text-4xl md:text-6xl text-white font-medium tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineering Outcomes.
          </motion.h2>
          <motion.p
            className="text-base md:text-lg font-mono text-white/50 w-full md:w-1/3 leading-relaxed tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            A selection of intelligence systems built to eliminate real business bottlenecks.
          </motion.p>
        </div>

        {/* Projects List: Hybrid Layout */}
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                  
                  {/* Visual Box Container */}
                  <Link to="/work" className="w-full lg:w-[50%] shrink-0 group block border border-white/10 bg-white/[0.01] rounded-[2rem] p-3 md:p-4 hover:border-white/20 transition-colors duration-500">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#02040A]">
                      {/* Technical dot grid overlay */}
                      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                      
                      {/* Abstract Glow Orb */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className={`w-[60%] aspect-square rounded-full bg-gradient-to-tr ${project.glow} opacity-40 blur-[80px] mix-blend-screen transition-all duration-1000 group-hover:scale-110 group-hover:opacity-70 group-hover:blur-[100px]`} />
                        <h2 className="absolute text-[6vw] lg:text-[4vw] font-serif font-medium leading-none tracking-tighter text-white opacity-[0.02] select-none transition-opacity duration-700 group-hover:opacity-10 uppercase">
                          {project.id.replace('-', ' ')}
                        </h2>
                      </div>
                    </div>
                  </Link>

                  {/* Restructured Copy */}
                  <div className="w-full lg:w-[50%] flex flex-col items-start gap-8">
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 text-[10px] font-mono font-bold tracking-widest border border-white/10 rounded-full text-white/50 bg-white/[0.02]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-4">
                      {/* Clean Project Name */}
                      <span className="text-xl md:text-2xl font-bold tracking-tight font-sans text-white group-hover:text-[#e5c07b] transition-colors duration-500">
                        {project.name}
                      </span>
                      
                      {/* Readable Sans-Serif Description */}
                      <p className="text-lg md:text-xl text-white/60 font-sans leading-relaxed tracking-tight group-hover:text-white/80 transition-colors duration-500">
                        {project.title}
                      </p>
                    </div>

                    {/* Modern CTAs */}
                    <Link to="/work" className="mt-4 flex items-center gap-4 group/btn">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300">
                        <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-[#e5c07b] uppercase group-hover/btn:text-white transition-colors duration-300">
                        Read Case Study
                      </span>
                    </Link>

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
