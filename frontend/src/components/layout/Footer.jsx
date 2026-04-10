import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowRightIcon from '../ui/icons/ArrowRightIcon';
import ArrowUpRightIcon from '../ui/icons/ArrowUpRightIcon';

const expertiseTags = [
  'LLM Integration', 'Data Pipelines', 'AI Agents', 'Automation', 'Computer Vision', 'Dashboards', 'See all →'
];

export default function Footer() {
  return (
    <footer className="dark-section relative overflow-hidden pt-24 pb-12" style={{ background: '#070B14', color: 'white' }}>
      
      {/* Infinite Wave Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <svg className="absolute w-[100%] h-[200%] -top-[10%]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Pattern width 48 controls horizontal spacing of columns, height 24 controls vertical space between dashes */}
            <pattern id="dashes" width="48" height="24" patternUnits="userSpaceOnUse">
              <rect x="23" y="0" width="2" height="12" fill="rgba(255,255,255,0.25)" rx="1" />
            </pattern>
          </defs>
          <motion.rect 
            x="0" y="0" width="100%" height="100%" fill="url(#dashes)" 
            animate={{ y: [0, -24] }} // Move up exactly exactly one pattern height to create infinite loop
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </svg>
        
        {/* Lighting gradient masks to create the fading equalizer effect (bright in center, dark at edges) */}
        <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(7, 11, 20, 0) 0%, rgba(7, 11, 20, 1) 60%)'
        }} />
        <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, #070B14 0%, transparent 20%, transparent 80%, #070B14 100%)'
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between gap-16">
        
        {/* LEFT COLUMN: Heading & Developer Cards */}
        <div className="w-full md:w-[45%] flex flex-col items-start">
          
          <div className="mb-14">
            <h2 className="text-2xl md:text-[2rem] font-medium tracking-tight mb-8 leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>
              Would you like to work with us on a project?<br/>
              Contact Meet or Jash.
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-transform hover:scale-105 text-black" style={{ backgroundColor: '#F3EAC2' }}>
              SEND US A MESSAGE <ArrowRightIcon className="w-3 h-3" />
            </Link>
          </div>

          <div className="flex flex-col gap-4 w-full pr-0 lg:pr-12">
            {/* Developer 1: Meet */}
            <a
              href="mailto:vmeet@gmail.com"
              className="group flex items-center gap-5 px-5 py-4 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 hover:bg-white/[0.03]"
            >
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold tracking-tight select-none"
                style={{ background: 'linear-gradient(135deg, #1A2540 0%, #0A0F1A 100%)', border: '1px solid rgba(59,130,246,0.3)', color: '#93b4f5' }}
              >
                M
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-white tracking-tight">Meet</span>
                <span className="text-[10px] uppercase tracking-widest text-white/35 mt-0.5">AI Architect</span>
                <span className="text-[10px] font-mono text-white/50 mt-1 group-hover:text-white/80 transition-colors truncate">vmeet@gmail.com</span>
              </div>
              <ArrowUpRightIcon className="w-3.5 h-3.5 ml-auto shrink-0 text-white/20 group-hover:text-white/60 transition-colors" />
            </a>

            {/* Developer 2: Jash */}
            <a
              href="mailto:jashkevdiya@gmail.com"
              className="group flex items-center gap-5 px-5 py-4 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 hover:bg-white/[0.03]"
            >
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold tracking-tight select-none"
                style={{ background: 'linear-gradient(135deg, #2E1A1A 0%, #120505 100%)', border: '1px solid rgba(239,68,68,0.25)', color: '#f4a4a4' }}
              >
                J
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-white tracking-tight">Jash</span>
                <span className="text-[10px] uppercase tracking-widest text-white/35 mt-0.5">Lead Engineer</span>
                <span className="text-[10px] font-mono text-white/50 mt-1 group-hover:text-white/80 transition-colors truncate">jashkevdiya@gmail.com</span>
              </div>
              <ArrowUpRightIcon className="w-3.5 h-3.5 ml-auto shrink-0 text-white/20 group-hover:text-white/60 transition-colors" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: IT Services Links */}
        <div className="w-full md:w-[55%] flex flex-col justify-between mt-12 md:mt-0 pt-2 text-white/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-medium mb-1 md:mb-2 text-base md:text-lg">Services</h4>
              <div className="flex flex-col gap-2.5 text-sm">
                <Link to="/services" className="hover:text-white transition-colors">AI Agents</Link>
                <Link to="/services" className="hover:text-white transition-colors">LLM Applications</Link>
                <Link to="/services" className="hover:text-white transition-colors">Workflow Automation</Link>
                <Link to="/services" className="hover:text-white transition-colors">Analytics & Dashboards</Link>
                <Link to="/services" className="hover:text-white transition-colors">Text-to-SQL Systems</Link>
                <Link to="/services" className="hover:text-white transition-colors">Natural Language Systems</Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-white font-medium mb-1 md:mb-2 text-base md:text-lg">
                  Technologies
                </h4>
                <div className="flex flex-col gap-2.5 text-sm">
                  <span className="opacity-90">Python · PyTorch · LLMs</span>
                  <span className="opacity-90">LangChain · LangGraph · RAG</span>
                  <span className="opacity-90">FastAPI · Node.js · APIs</span>
                  <span className="opacity-90">React · Next.js</span>
                  <span className="opacity-90">PostgreSQL · Vector DBs</span>
                </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-medium mb-1 md:mb-2 text-base md:text-lg">Company</h4>
              <div className="flex flex-col gap-2.5 text-sm">
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
                <Link to="/work" className="hover:text-white transition-colors">Case Studies</Link>
                <Link to="/blog" className="hover:text-white transition-colors">Insights</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-medium mb-1 md:mb-2 text-base md:text-lg">Based in</h4>
              <div className="flex flex-col gap-2 text-sm leading-relaxed">
                <span>Bangalore, India</span>
                <span className="text-white/60">Available remotely worldwide</span>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-16 lg:mt-24 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider font-mono text-white/50">
            <p>© 2025 Ontara AI</p>
            <div className="flex items-center gap-6">
              <a href="mailto:ontaraai@gmail.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">ontaraai@gmail.com</a>
              <a href="https://www.linkedin.com/company/ontaraai/posts/?feedView=all" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
