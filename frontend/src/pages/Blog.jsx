import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowRightIcon from '../components/ui/icons/ArrowRightIcon';
import ArrowUpRightIcon from '../components/ui/icons/ArrowUpRightIcon';

const articles = [
  {
    number: '01',
    tag: 'GRAPH DATABASES & ORCHESTRATION',
    date: 'March 2026',
    title: 'Why Neo4j outperforms vector databases for LLM SQL Schema mapping.',
    excerpt: "Building a Text-to-SQL system that translates natural language into database operations is easy. Building one that doesn't hallucinate foreign-key relationships on a 400-table enterprise schema is incredibly difficult. Here is why you must calculate shortest path joins deterministically.",
    readTime: '12 min read',
    glow: 'from-[#e06c75] to-[#c678dd]',
  },
  {
    number: '02',
    tag: 'AI ARCHITECTURE',
    date: 'February 2026',
    title: 'Agents THINK, Tools DO: Safe architecture for decision intelligence.',
    excerpt: "You should never give an LLM direct WRITE access to your database. In this article, we map out the exact LangGraph state machine we use to strictly isolate reasoning nodes from deterministic execution layers.",
    readTime: '8 min read',
    glow: 'from-[#e5c07b] to-[#d19a66]',
  },
  {
    number: '03',
    tag: 'LLM APPLICATIONS',
    date: 'January 2026',
    title: 'The difference between a chatbot and an AI agent (and why it matters).',
    excerpt: "Businesses keep buying chatbots when they actually need agents. The distinction isn't semantic, it's functional, architectural, and strategic. Chatbots retrieve; Agents execute. Let's break it down.",
    readTime: '6 min read',
    glow: 'from-[#98c379] to-[#61afef]',
  },
];

export default function Blog() {
  return (
    <main className="bg-[var(--cream)] min-h-screen">
      {/* ─── REFINED HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
        {/* Background Ambient Glow */}
        <div className="absolute top-[-50%] left-[20%] w-[60%] h-[200%] rounded-full bg-gradient-to-tr from-[#1a2540] to-transparent blur-[150px] opacity-10 mix-blend-screen pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <div className="max-w-[600px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-black/20" />
                <p className="text-xs font-mono tracking-widest uppercase text-black/50">Engineering Library</p>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[var(--ink)] mb-4">
                What we're thinking.
              </h1>
            </div>
            <div className="max-w-[500px] flex flex-col gap-6 md:pb-2">
              <div className="border-l border-black/10 pl-6">
                <p className="text-lg font-sans text-black/60 leading-relaxed">
                  Highly technical breakdowns on AI engineering, multi-agent frameworks, and building systems that don't hallucinate.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ARTICLES ── */}
      <div className="dark-section bg-[#02040A] text-white pt-24 border-t border-black/10">
        
        <section className="pb-24 md:pb-32 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-8 md:gap-12">
            
            {articles.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden bg-white/[0.01] border border-white/10 hover:border-[#e5c07b]/30 rounded-[2rem] p-8 md:p-16 transition-all duration-500"
              >
                {/* Internal Glow Effect */}
                <div className={`absolute top-0 right-[-10%] w-[50%] h-[120%] rounded-full bg-gradient-to-tr ${a.glow} blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 mix-blend-screen pointer-events-none`} />

                <div className="relative z-10 grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-end">
                  
                  <div className="flex flex-col gap-6 md:gap-8">
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="font-mono text-sm tracking-widest text-[#e5c07b] bg-[#e5c07b]/10 border border-[#e5c07b]/20 px-3 py-1 rounded-full">
                        {a.number}
                      </span>
                      <span className="font-mono text-xs tracking-widest uppercase text-white/40 border border-white/10 px-3 py-1 rounded-full">
                        {a.tag}
                      </span>
                      <span className="font-mono text-xs tracking-widest text-white/30 hidden md:block">
                        {a.date}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-sans  leading-tight tracking-tight text-white group-hover:text-[#e5c07b] transition-colors duration-500">
                      {a.title}
                    </h2>
                    
                    <p className="text-lg md:text-xl font-sans text-white/50 leading-relaxed max-w-[700px]">
                      {a.excerpt}
                    </p>
                  </div>

                  <div className="flex lg:flex-col lg:items-end justify-between lg:justify-end gap-6 h-full">
                    <span className="font-mono text-xs tracking-widest text-white/30">{a.readTime}</span>
                    <div className="flex items-center gap-3">
                       <span className="text-xs uppercase font-mono tracking-widest font-bold text-white/50 group-hover:text-white transition-colors">
                         Read Study
                       </span>
                       <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#e5c07b] group-hover:border-[#e5c07b] group-hover:text-black transition-all">
                         <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                       </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ─── NOTIFICATION ── */}
        <section className="pb-32 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="bg-[#e5c07b]/10 border border-[#e5c07b]/30 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex flex-col gap-2">
                <p className="font-mono text-xs tracking-widest uppercase text-[#e5c07b]">Library Status</p>
                <p className="text-lg font-sans text-white/70">
                  More architectural breakdowns are currently being documented. We publish when we have extreme technical value to share.
                </p>
              </div>
              <Link 
                to="/contact" 
                className="whitespace-nowrap px-6 py-3 border border-white/20 rounded-full font-mono text-xs tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all"
              >
                Request a topic
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
