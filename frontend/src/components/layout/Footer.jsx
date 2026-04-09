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

          <div className="flex flex-col sm:flex-row gap-6 w-full pr-0 lg:pr-12">
            {/* Developer 1: Meet */}
            <div className="flex-1 flex flex-col group cursor-pointer">
              <div className="w-full mx-auto aspect-[3/4] sm:w-full sm:aspect-[4/5] rounded-xl overflow-hidden mb-4 relative bg-gray-900 border border-white/10 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2540] to-[#0A0F1A] opacity-80" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#3b82f6]/30 to-transparent blur-3xl mix-blend-screen transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[18vw] sm:text-[5rem] lg:text-[7rem] font-medium text-white/5 transition-colors duration-500 group-hover:text-white/20 select-none">
  M
</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-base font-medium tracking-tight">Meet V.</h3>
                <span className="text-[9px] uppercase tracking-widest text-white/40 mb-1">AI Architect</span>
                <a href="mailto:vmeet@gmail.com" target="_blank" rel="noreferrer" className="text-[10px] text-white/70 uppercase tracking-wider font-mono hover:text-white transition-colors w-fit">vmeet@gmail.com</a>
              </div>
            </div>

            {/* Developer 2: Jash */}
            <div className="flex-1 flex flex-col group cursor-pointer">
              <div className="w-full mx-auto aspect-[3/4] sm:w-full sm:aspect-[4/5] rounded-xl overflow-hidden mb-4 relative bg-gray-900 border border-white/10 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A1A] to-[#120505] opacity-80" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#ef4444]/20 to-transparent blur-3xl mix-blend-screen transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[18vw] sm:text-[5rem] lg:text-[7rem] font-medium text-white/5 transition-colors duration-500 group-hover:text-white/20 select-none">
  J
</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-base font-medium tracking-tight">Jash K.</h3>
                <span className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Lead Engineer</span>
                <a href="mailto:jashkevdiya@gmail.com" target="_blank" rel="noreferrer" className="text-[10px] text-white/70 uppercase tracking-wider font-mono hover:text-white transition-colors w-fit">jashkevdiya@gmail.com</a>
              </div>
            </div>
            
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
