import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowUpRightIcon from '../components/ui/icons/ArrowUpRightIcon';

const services = [
{
  id: 'agents',
  number: '01',
  title: 'Autonomous AI Agents',
  tag: 'INTELLIGENCE',
  short: 'Build AI agents that understand context, make decisions, and automate complex workflows across your systems.',
  long: [
    'We design and deploy autonomous AI agents that go beyond chat - they analyze context, reason through tasks, and take actions across your tools. From handling customer operations to executing internal workflows, these systems reduce manual effort and improve response speed.',
    
    'Our approach ensures reliability and control, combining intelligent decision-making with structured workflows, system integrations, and human oversight when needed. The result is production-ready agents that handle real-world complexity, not just demos.'
  ],
  tech: ['Python', 'LangChain / LangGraph', 'LLMs', 'FastAPI', 'APIs & Integrations', 'Databases'],
  deliverables: ['Agent Design & Architecture', 'Workflow Automation', 'System Integrations', 'Monitoring & Human-in-loop']
},
{
  id: 'text-to-sql',
  number: '02',
  title: 'Text-to-SQL & Natural Language Systems',
  tag: 'DATA',
  short: 'Let anyone query your huge data using plain English, instantly and accurately.',
  long: [
    'We build natural language interfaces that allow teams to interact with complex databases without writing SQL. From business users to analysts, anyone can ask questions and get structured, reliable answers in seconds.',
    
    'Our systems are designed for accuracy and trust by understanding your schema, resolving relationships, and validating queries before execution. This eliminates dependency on engineering teams while ensuring safe, production-grade data access.'
  ],
  tech: ['PostgreSQL · MySQL · MongoDB', 'Vector Search', 'LLMs', 'APIs'],
  deliverables: ['Natural Language Query Interface', 'Schema Mapping & Validation', 'Secure Query Execution Layer']
},
{
  id: 'dashboards',
  number: '03',
  title: 'Intelligent Dashboards',
  tag: 'VISUALIZATION',
  short: 'Dashboards that don’t just display data, they explain it and guide decisions.',
  long: [
    'We build intelligent dashboards that go beyond static charts. These systems analyze your data in real time, surface key insights, and help you understand what’s happening and why.',
    
    'Instead of manually exploring reports, users can interact naturally with data, uncover trends, and receive actionable recommendations. The result is faster decision-making and clearer visibility across your business.'
  ],
  tech: ['React · Next.js', 'Data Processing', 'APIs', 'Analytics Pipelines'],
  deliverables: ['Interactive Dashboard UI', 'Data Processing & Insights Layer', 'Predictive & Analytical Modules']
},
{
  id: 'automation',
  number: '04',
  title: 'AI Workflow Integration',
  tag: 'INFRASTRUCTURE',
  short: 'Seamlessly integrate AI into your existing websites, workflows, and products.',
  long: [
    'We embed AI directly into your existing systems, from internal tools to customer-facing applications. Whether it’s automating workflows, enhancing search, or enabling intelligent assistants, we make AI a native part of your product.',
    
    'Our focus is on reliability, scalability, and clean integration. We connect your data, systems, and APIs into cohesive pipelines that deliver real value without disrupting your current operations.'
  ],
  tech: ['APIs · Microservices', 'Vector Databases', 'Docker', 'Python'],
  deliverables: ['AI Integration Architecture', 'Workflow Automation Pipelines', 'Knowledge Base & API Integration']
}
];

export default function Services() {
  const [openId, setOpenId] = useState('agents');

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <main className="bg-[var(--cream)] min-h-screen">
      {/* ─── REFINED HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 border-b border-black/10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <div className="max-w-[600px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-black/20" />
                <p className="text-xs font-mono tracking-widest uppercase text-black/50">Core Competencies</p>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[var(--ink)]">
                Engineering intelligence for production scale.
              </h1>
            </div>
            <div className="max-w-[500px] flex flex-col gap-6 md:pb-2">
              <div className="border-l border-black/10 pl-6">
                <p className="text-lg font-sans text-black/60 leading-relaxed">
                  We specialize in deep architectural problems. Integrating LLMs into business logic requires rigorous deterministic constraints, not just good prompts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICE ACCORDION ── */}
      <section className="dark-section py-24 md:py-32 px-6 md:px-12 bg-[#02040A] text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col border-t border-white/10">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => toggle(s.id)}
                  className="w-full flex items-center justify-between py-10 md:py-16 text-left group"
                >
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="font-mono text-sm tracking-widest text-white/30">{s.number}</span>
                    <h2 className={`text-4xl md:text-4xl lg:text-6xl font-sans transition-all duration-500 ${openId === s.id ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                      {s.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="hidden md:inline-flex px-4 py-1.5 text-xs font-mono font-bold tracking-widest border border-white/10 rounded-full text-white/50 bg-white/[0.02]">
                      {s.tag}
                    </span>
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${openId === s.id ? 'border-white bg-white text-black rotate-45' : 'border-white/20 text-white/50 group-hover:border-white/50 group-hover:text-white'}`}>
                      <span className="text-2xl font-light leading-none">+</span>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {openId === s.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="pb-16 md:pb-24 grid lg:grid-cols-2 gap-16 lg:gap-24 pl-0 md:pl-[6.5rem]">
                        
                        {/* Concept */}
                        <div className="flex flex-col gap-6">
                          <h3 className="text-2xl font-serif text-[#e5c07b] mb-4">{s.short}</h3>
                          {s.long.map((para, j) => (
                            <p key={j} className="text-lg md:text-xl text-white/60 font-serif leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>

                        {/* Tech & Deliverables */}
                        <div className="flex flex-col gap-12 border-l border-white/10 pl-8 md:pl-12">
                          
                          <div>
                            <p className="font-mono text-xs tracking-widest text-white/30 uppercase mb-6">Execution Stack</p>
                            <div className="flex flex-wrap gap-3">
                              {s.tech.map((techItem, j) => (
                                <span key={j} className="px-4 py-2 text-sm font-mono border border-white/10 text-white/80 bg-white/[0.02]">
                                  {techItem}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="font-mono text-xs tracking-widest text-white/30 uppercase mb-6">Key Engineering Focus</p>
                            <ul className="flex flex-col gap-4">
                              {s.deliverables.map((d, j) => (
                                <li key={j} className="flex items-start gap-4 text-lg text-white/80 font-serif">
                                  <span className="text-[#e5c07b] text-xs mt-2 relative top-[2px]">◆</span>
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif tracking-tight leading-none mb-12 max-w-[800px]"
          >
            Have a complex architecture in mind?
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
              Discuss technical details
              <ArrowUpRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
