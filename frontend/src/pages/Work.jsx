import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowUpRightIcon from '../components/ui/icons/ArrowUpRightIcon';

const caseStudies = [
  {
    id: 'dfuse',
    tag: 'DATA INTELLIGENCE',
    number: '01',
    title: 'Dfuse Data: Enterprise Text-to-SQL',
    subtitle: 'Making a highly interconnected enterprise sales database conversational without hallucinating joins.',
    industry: 'Enterprise Data Architecture',
    color: 'from-[#e06c75] to-[#c678dd]',
    problem: [
      'A massive bottleneck existed: every business insight required an engineer to manually write complex SQL queries across hundreds of database tables. Existing "AI SQL Gen" tools failed because they hallucinated column names or guessed wrong foreign-key relationships on complex schemas.',
    ],
    architecture: [
      'We designed a dual-pipeline architecture. First, an Offline Knowledge Base Pipeline uses LLMs to digest the MySQL schema, generating semantic embeddings in pgvector and mapping explicit table relationships as nodes and edges into Neo4j.',
      'Second, the Online Inference Pipeline uses LangGraph to orchestrate a safe query path: rewriting the user intent, fetching shortest JOIN paths dynamically from Neo4j, using pgvector for entity matching (resolving "Arjun\'s team" to the correct foreign key), and strictly validating the query against the database engine before execution.'
    ],
    stack: ['Neo4j', 'PostgreSQL (pgvector)', 'MySQL', 'LangGraph', 'FastAPI', 'React'],
    results: [
      { stat: '100%', label: 'Deterministic JOIN paths (Zero Hallucination)' },
      { stat: '0', label: 'Direct Database writes by LLMs (Read-only Safety)' },
      { stat: 'Sub-second', label: 'Graph traversal to find table relationships' },
    ],
    quote: 'This architecture specifically segregates responsibilities (Neo4j for joins, pgvector for semantic entity matching, MySQL for data, LLMs for reasoning) to maximize accuracy without requiring an LLM to blindly guess your company\'s internal structure.',
  },
  {
    id: 'Decider AI',
    tag: 'DECISION INTELLIGENCE',
    number: '02',
    title: 'Decider AI: Self-Mutating Dashboards',
    subtitle: 'An agent-driven platform that understands datasets, mutates dashboards dynamically, and recommends decisions.',
    industry: 'Business Analytics & Ops',
    color: 'from-[#e5c07b] to-[#d19a66]',
    problem: [
      'Dashboards are static and lack real decision-making power. Users log in, look at a chart, and still have to mentally calculate what to do next. Traditional BI tools are not truly intelligent.',
    ],
    architecture: [
      'We engineered Decider AI on a strict principle: Agents THINK, Tools DO. The frontend is intentionally kept entirely stateless. All reasoning lives in the backend inside a complex LangGraph state machine.',
      'An Orchestrator detects intent and summons specialist agents: a Data Agent to profile schemas, a Prediction Agent for forecasting, and a UI Agent that exclusively mutates dashboard JSON state. This creates self-mutating dashboards, the UI changes itself based on what the Data Agent discovers, completely autonomously.'
    ],
    stack: ['FastAPI', 'Pandas', 'LangGraph', 'Agentic Workflows', 'React JSON Rendering'],
    results: [
      { stat: 'Dynamic', label: 'Dashboard generation based on data profile' },
      { stat: 'Strict', label: 'Separation of Intelligence (Agents) and Execution (Tools)' },
      { stat: 'Infinite', label: 'Dataset adaptability (Time series, snapshots, etc.)' },
    ],
    quote: 'This is NOT a classic frontend-backend-database app. The database is a resource, not the brain. The frontend is intentionally kept dumb. All intelligence lives in the backend.',
  },
{
  id: 'support-os',
  tag: 'SUPPORT AI',
  number: '03',
  title: 'SupportOS',
  subtitle: 'A support system that not only resolves queries, but analyzes conversations to surface real customer insights.',
  industry: 'SaaS / Customer Operations',
  color: 'from-[#98c379] to-[#61afef]',

  problem: [
    'Customer support tools focus on resolving tickets, but give little visibility into what customers are actually experiencing. Teams lack clear insights into recurring issues, sentiment trends, and support patterns.'
  ],

  architecture: [
    'SupportOS is a plug-and-play AI system that instantly resolves customer queries using your knowledge base, while continuously analyzing every interaction in the background.',

    'It tracks sentiment, identifies recurring issues, and clusters conversations into meaningful themes, turning raw support chats into structured insights. A built-in dashboard highlights what users are struggling with, when demand peaks, and where your product or support flow needs attention.'
  ],

  stack: ['React Embed', 'LLMs · RAG', 'Vector Search', 'Analytics Engine'],

  results: [
    { stat: '24/7', label: 'Instant query resolution' },
    { stat: 'Clear', label: 'Visibility into customer issues & trends' },
    { stat: 'Live', label: 'Support insights from ongoing conversations' },
  ],

  quote: 'For teams that want more than automated replies, real visibility into what their customers are asking, feeling, and struggling with.'
},
];

export default function Work() {
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
            <div className="max-w-[600px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-black/20" />
                <p className="text-xs font-mono tracking-widest uppercase text-black/50">Production Case Studies</p>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[var(--ink)] mb-4">
                Our engineering architecture.
              </h1>
            </div>
            <div className="max-w-[500px] flex flex-col gap-6 md:pb-2">
              <div className="border-l border-black/10 pl-6">
                <p className="text-lg font-sans text-black/60 leading-relaxed">
                  We don't just build wrappers. We build deep, multi-agent systems connected to enterprise databases and specific business logic.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CASE STUDIES ── */}
      <div className="flex flex-col dark-section bg-[#02040A] text-white pt-24 border-t border-white/10">
        {caseStudies.map((cs, i) => (
          <section
            key={cs.id}
            className="py-24 md:py-32 px-6 md:px-12 border-b border-white/10 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-10">
              <div className={`absolute top-0 right-[-10%] w-[50%] h-[100%] rounded-full bg-gradient-to-tr ${cs.color} blur-[120px]`} />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 md:mb-24">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-4 py-1.5 text-xs font-mono font-bold tracking-widest border border-white/20 rounded-full text-white/60 bg-white/[0.02]">
                      {cs.tag}
                    </span>
                    <span className="font-mono text-sm tracking-widest text-white/30">/ {cs.number}</span>
                  </div>
                  <h2 className="text-4xl md:text-4xl lg:text-7xl font-sans text-white mb-6 tracking-tight">{cs.title}</h2>
                  <p className="text-xl md:text-2xl font-sans text-[#e5c07b] max-w-[800px] leading-snug">
                    "{cs.subtitle}"
                  </p>
                </div>
              </div>

              {/* Problem / Architecture Grid */}
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 mb-20 md:mb-32">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-[1px] bg-white/20" />
                    <p className="font-mono text-xs tracking-widest uppercase text-white/40">The Business Problem</p>
                  </div>
                  <div className="flex flex-col gap-6">
                    {cs.problem.map((p, j) => (
                      <p key={j} className="text-lg text-white/60 font-sans leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-[1px] bg-[#e5c07b]/50" />
                    <p className="font-mono text-xs tracking-widest uppercase text-[#e5c07b]">Architectural Solution</p>
                  </div>
                  <div className="flex flex-col gap-6">
                    {cs.architecture.map((p, j) => (
                      <p key={j} className="text-xl md:text-2xl text-white/90 font-sans leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack & Results */}
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 pb-16 md:pb-24 border-b border-white/10 mb-16 md:mb-24">
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-white/40 mb-6">Technologies Used</p>
                  <div className="flex flex-wrap gap-3">
                    {cs.stack.map((s, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 text-sm font-mono border border-white/20 text-white bg-white/[0.05] rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cs.results.map((r, j) => (
                      <div key={j} className="flex flex-col gap-3">
                        <span className="text-4xl font-sans text-white">{r.stat}</span>
                        <div className="w-full h-[1px] bg-white/10" />
                        <span className="text-sm font-mono text-white/50 leading-relaxed max-w-[200px]">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Engineering Quote */}
              <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-16 relative overflow-hidden group hover:border-[#e5c07b]/30 transition-colors duration-500">
                <div className="absolute top-8 left-8 text-[#e5c07b]/20 font-sans text-8xl leading-none">"</div>
                <p className="relative z-10 text-xl md:text-3xl lg:text-4xl font-sans text-white/80 leading-snug tracking-tight">
                  {cs.quote}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-6 h-[1px] bg-[#e5c07b]" />
                  <p className="font-mono text-xs tracking-widest uppercase text-[#e5c07b]">Architectural Note</p>
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* ─── CTA ── */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#e5c07b] text-black">
        <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center">
           <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest uppercase text-black/60 mb-8"
          >
            Start your own
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-sans tracking-tight leading-none mb-12 max-w-[800px]"
          >
            Does your internal data need a brain?
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
              Start the conversation
              <ArrowUpRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
