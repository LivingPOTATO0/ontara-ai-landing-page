import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowUpRightIcon from '../components/ui/icons/ArrowUpRightIcon';

const team = [
{
  name: 'Meet',
  role: 'AI Architect & Co-founder',
  bio: 'Leads AI system design and architecture, focusing on agent frameworks, LLM pipelines, and scalable system design. Specializes in turning complex AI capabilities into structured, production-ready architectures.',
  initials: 'M',
  glow: 'from-[#98c379] to-[#61afef]',
  link: 'https://www.linkedin.com/in/meet-virani/',
},
{
  name: 'Jash',
  role: 'AI Engineer & Co-founder',
  bio: 'Builds and deploys production AI systems, from backend APIs to data pipelines and integrations. Focused on connecting models with real-world systems, ensuring reliability, performance, and seamless execution.',
  initials: 'J',
  glow: 'from-[#e06c75] to-[#c678dd]',
},
];

const values = [
  {
    number: '01',
    title: 'Agents think. Systems execute.',
    desc: 'We design AI systems where models handle reasoning, while structured tools handle execution. This ensures reliability, safety, and predictable behavior in production environments.',
  },
  {
    number: '02',
    title: 'Outcomes over outputs.',
    desc: 'We focus on building systems that work in the real world, handling edge cases, scaling with demand, and continuing to deliver value long after deployment.',
  },
  {
    number: '03',
    title: 'We solve what others avoid.',
    desc: 'We take on complex, ambiguous problems where off-the-shelf solutions fall short,   delivering systems that are tailored, robust, and built for real-world use.',
  }
]

export default function About() {
  return (
    <main className="bg-[var(--cream)] min-h-screen">
      {/* ─── REFINED HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <div className="max-w-[700px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-black/20" />
                <p className="text-xs font-mono tracking-widest uppercase text-black/50">Engineering Culture</p>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[var(--ink)]">
                We build the intelligence layer for modern business.
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MISSION ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-4xl font-sans text-[var(--ink)] leading-tight"
            >
              Two engineers.<br />One obsession.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-8 text-xl md:text-2xl font-sans text-black/60 leading-relaxed"
            >
              <p>
                Ontara AI was born from a simple frustration: most AI products are impressive as demos and disappointing in production. We saw companies investing in AI initiatives that generated great slide decks but didn't change how anyone actually worked.
              </p>
              <p>
                We started Ontara to do the opposite. We're engineers first, we care about systems that work reliably, architecture that routes safely, and AI that earns its place in a business by doing something genuinely useful.
              </p>
              <p className="text-black">
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ── */}
      <section className="dark-section py-24 md:py-32 px-6 md:px-12 bg-black text-white rounded-t-[3rem] md:rounded-t-[4rem]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-20 md:mb-32">
            <div className="w-12 h-[1px] bg-white/20" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-white/50">The Team</h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-[1000px] mx-auto">
            {team.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden w-full bg-white/[0.01] border border-white/10 hover:border-[#e5c07b]/30 rounded-[2rem] p-8 md:p-12 transition-all duration-500"
              >
                {/* Tech Inner Glow */}
                <div className={`absolute top-0 right-0 w-[60%] h-[150%] bg-gradient-to-bl ${member.glow} opacity-[0.03] blur-[100px] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-700`} />
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

                <div className="relative z-10 grid md:grid-cols-[1.5fr_2fr] gap-8 md:gap-16 items-start">
                  
                  {/* Left block */}
                  <div className="flex flex-col">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center font-sans text-xl font-bold tracking-tight text-white/80 bg-white/[0.02] mb-8 group-hover:border-white/30 group-hover:text-white transition-colors duration-500">
                      {member.initials}
                    </div>
                    <h3 className="font-sans text-3xl md:text-4xl leading-tight mb-3 text-white group-hover:text-[#e5c07b] transition-colors duration-500 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Right block: Bio */}
                  <div className="flex flex-col justify-end h-full pt-6 md:pt-0 border-t border-white/10 md:border-none">
                    <p className="text-white/60 text-lg md:text-xl font-sans leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                      {member.bio}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex items-center gap-4 mb-20 md:mb-32">
            <div className="w-12 h-[1px] bg-white/20" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-white/50">Core Philosophy</h2>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-[150px_1fr_1fr] gap-8 md:gap-16 py-12 md:py-16 border-b border-white/10 group hover:border-[#e5c07b]/30 transition-colors"
                style={{ cursor: 'default' }}
              >
                <span className="font-mono text-sm tracking-widest text-[#e5c07b]/50 group-hover:text-[#e5c07b] transition-colors">{v.number}</span>
                <h3 className="text-3xl md:text-4xl font-sans font-medium tracking-tight group-hover:text-[#e5c07b] transition-colors">{v.title}</h3>
                <p className="text-lg text-white/50 font-sans leading-relaxed group-hover:text-white/70 transition-colors">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ── */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#e5c07b] text-black">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest uppercase text-black/60 mb-8"
          >
            Work Together
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-sans font-medium tracking-tight leading-none mb-12 max-w-[800px] px-4"
          >
            Ready to pull AI out of the sandbox?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full uppercase tracking-widest text-xs font-bold hover:scale-105 transition-transform"
            >
              Contact the founders
              <ArrowUpRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
