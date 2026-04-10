// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowRightIcon from '../ui/icons/ArrowRightIcon';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Insight', path: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const [logoColor, setLogoColor] = useState('var(--ink)');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const logoEl = document.getElementById('navbar-logo');
      if (!logoEl) return;
      const rect = logoEl.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;

      const darkSections = document.querySelectorAll('.dark-section');
      let isDark = false;
      darkSections.forEach(sec => {
        const secRect = sec.getBoundingClientRect();
        if (secRect.top <= centerY && secRect.bottom >= centerY) {
          isDark = true;
        }
      });
      setLogoColor(isDark ? 'white' : 'var(--ink)');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  const actualLogoColor = mobileOpen ? 'white' : logoColor;

  return (
    <>
      {/* Logo Extracted from Header to preserve mix-blend-mode context */}
      <Link 
        to="/" 
        id="navbar-logo"
        onClick={() => setMobileOpen(false)}
        className="fixed z-[60] flex items-center group pointer-events-auto transition-colors duration-300" 
        style={{ 
          top: '1.25rem', // py-5
          left: '2rem',   // px-8
          textDecoration: 'none',
          color: actualLogoColor
        }}
      >
        <span style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontWeight: 800, 
          fontSize: '1.75rem',
          letterSpacing: '-0.04em',
          margin: 0,
          padding: 0
        }}>
          Ontara AI
        </span>
      </Link>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-end md:justify-between px-8 py-5 pointer-events-none"
        style={{
          background: 'transparent',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Placeholder div to push everything to the right since logo is extracted */}
        <div className="hidden md:block w-[150px]" />

        {/* Center pill nav */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full px-2 py-2 pointer-events-auto"
          style={{ background: 'rgba(232, 226, 217, 0.8)', border: '1px solid var(--border)' }}
        >
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: isActive(path) ? 'var(--ink)' : 'var(--muted)',
                background: isActive(path) ? 'var(--cream)' : 'transparent',
                boxShadow: isActive(path) ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: Contact */}
        <div className="hidden md:flex items-center gap-4 pointer-events-auto">
          <Link to="/contact" className="btn-primary flex items-center justify-center" style={{ padding: '0.6rem 1.25rem', fontSize: '0.8125rem' }}>
            Get in touch <ArrowRightIcon className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 items-end pointer-events-auto absolute right-6 top-5 z-[70] p-2"
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }} className="block h-[2px] w-6" style={{ backgroundColor: actualLogoColor, transformOrigin: 'center', transition: 'all 0.3s ease' }} />
          <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block h-[2px] w-4" style={{ backgroundColor: actualLogoColor, transition: 'all 0.3s ease' }} />
          <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }} className="block h-[2px] w-6" style={{ backgroundColor: actualLogoColor, transformOrigin: 'center', transition: 'all 0.3s ease' }} />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[50] flex flex-col justify-center px-8"
            style={{ background: 'var(--navy)' }}
          >
            <nav className="flex flex-col gap-1 mt-12 w-full max-w-[360px] mx-auto">
              {[...navLinks, { label: 'Contact', path: '/contact' }].map(({ label, path }, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={path}
                    onClick={() => setMobileOpen(false)}
                    className="flex justify-between items-center w-full px-3 py-3.5 rounded-xl group transition-colors duration-200"
                    style={{
                      color: isActive(path) ? '#e5c07b' : 'white',
                      background: isActive(path) ? 'rgba(229,192,123,0.08)' : 'transparent',
                      textDecoration: 'none',
                    }}
                  >
                    <span className="font-sans text-xl font-medium tracking-tight">{label}</span>
                    <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: '#e5c07b' }} />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-10 flex justify-center pb-6 border-t border-white/10 pt-6 max-w-[360px] mx-auto w-full">
              <a href="https://www.linkedin.com/company/ontaraai/posts/?feedView=all" target="_blank" rel="noreferrer" className="text-xs tracking-widest uppercase font-mono transition-colors" style={{ color: 'var(--muted)' }}>Connect on LinkedIn ↗</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
