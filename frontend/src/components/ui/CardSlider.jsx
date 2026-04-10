import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowRightIcon from './icons/ArrowRightIcon';

const cards = [
  {
    title: 'Services & Offerings',
    desc: 'What we build and how we operate.',
    link: '/services',
    glow: 'from-[#61afef] to-[#98c379]', // blue to green
    tag: 'SERVICES'
  },
  {
    title: 'Selected Case Studies',
    desc: 'Real problems. Real systems. Real outcomes.',
    link: '/work',
    glow: 'from-[#e5c07b] to-[#d19a66]', // gold to orange
    tag: 'WORK'
  },
  {
    title: 'The Team & Mission',
    desc: "We're building the intelligence layer for modern business.",
    link: '/about',
    glow: 'from-[#c678dd] to-[#e06c75]', // purple to red
    tag: 'ABOUT'
  },
  {
    title: 'Latest Insights',
    desc: "Practical thinking on AI engineering.",
    link: '/blog',
    glow: 'from-[#56b6c2] to-[#61afef]', // cyan to blue
    tag: 'INSIGHT'
  },
  {
    title: 'Start a Project',
    desc: 'Would you like to work with Meet or Jash?',
    link: '/contact',
    glow: 'from-[#98c379] to-[#e5c07b]', // green to gold
    tag: 'CONTACT'
  }
];

export default function CardSlider() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const x = useMotionValue(0);
  
  // Create a continuous, seamless loop array (4 sets is plenty to ensure the screen is filled)
  const loopCards = [...cards, ...cards, ...cards, ...cards]; 
  
  const NORMAL_SPEED = 40; 
  const BOOST_SPEED = 1200;
  
  const [speed, setSpeed] = useState(NORMAL_SPEED);
  
  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();
    let setWidth = 0;

    // Calculate exact width of one set of cards perfectly
    if (cardRef.current) {
      // gap-6 in tailwind is 1.5rem = 24px
      const cardWidth = cardRef.current.offsetWidth;
      setWidth = (cardWidth + 24) * cards.length;
    }
    
    // Safety fallback
    if (!setWidth) setWidth = 1800;
    
    const animate = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      
      const currentX = x.get();
      let newX = currentX - (speed * delta);
      
      // Infinite scroll illusion: when we move exactly one set width to the left, 
      // snap back seamlessly by exactly one set width to the right.
      if (newX <= -setWidth) {
        newX += setWidth;
      } else if (newX > 0) {
        // Just in case of dragging to the right
        newX -= setWidth;
      }
      
      x.set(newX);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed, x]);

  const handleArrowClick = () => {
    setSpeed(BOOST_SPEED);
    
    // Smoothly decelerate back to normal speed
    let currentSpeed = BOOST_SPEED;
    const decelerate = setInterval(() => {
      currentSpeed -= (BOOST_SPEED - NORMAL_SPEED) / 15; 
      if (currentSpeed <= NORMAL_SPEED) {
        setSpeed(NORMAL_SPEED);
        clearInterval(decelerate);
      } else {
        setSpeed(currentSpeed);
      }
    }, 50);
  };

  return (
    <div className="relative w-full overflow-hidden py-10 pt-20 group">
      <motion.div 
        ref={containerRef}
        className="flex gap-6 px-10 cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }} // open constraints to allow infinite wrap
        dragElastic={0} // rigid drag to prevent weird elastic bounce fighting the loop
      >
        {loopCards.map((card, i) => (
          <Link 
            key={i} 
            to={card.link} 
            className="shrink-0" 
            style={{ textDecoration: 'none' }}
            ref={i === 0 ? cardRef : null} // Attach ref to the very first card to measure it
          >
            <div 
              className="relative overflow-hidden rounded-[2rem] flex flex-col justify-between p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] bg-[#0A0D14] border border-black/5 hover:border-[#e5c07b]/30 group/card"
              style={{
                width: 'clamp(220px, 60vw, 400px)',
                height: 'clamp(280px, 45vw, 500px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.08)'
              }}
            >
              {/* Dynamic Abstract Glow Orb */}
              <div className={`absolute -right-[20%] -bottom-[20%] w-[80%] aspect-square rounded-full bg-gradient-to-tr ${card.glow} opacity-10 blur-[80px] group-hover/card:opacity-30 group-hover/card:scale-110 transition-all duration-700 pointer-events-none`} />

              {/* Technical Dot Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.03] group-hover/card:opacity-[0.06] transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              
              {/* Top: Tech Tag & Icon */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="px-3 py-1.5 text-[10px] uppercase font-mono tracking-widest border border-white/10 rounded-full text-white/50 bg-white/[0.02]">
                  {card.tag}
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover/card:opacity-100 group-hover/card:border-white/30 transform group-hover/card:translate-x-0 -translate-x-4 transition-all duration-500 bg-white/[0.02]">
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Bottom: Typography */}
              <div className="relative z-10 text-white flex flex-col gap-3">
                <h3 className="text-3xl font-sans font-medium tracking-tight text-white group-hover/card:text-[#e5c07b] transition-colors duration-500 leading-tight">
                  {card.title}
                </h3>
                <p className="text-base text-white/60 font-sans leading-relaxed tracking-tight group-hover/card:text-white/80 transition-colors duration-500">
                  {card.desc}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>

      {/* Right Arrow Navigation Overlay - strictly triggered by right edge hover */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-24 md:w-48 hidden md:flex items-center justify-end pr-8 z-20 pointer-events-auto cursor-pointer"
        style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(245, 242, 237, 0.4) 60%, rgba(245, 242, 237, 0.9) 100%)'
        }}
        onMouseEnter={() => setIsHoveredRight(true)}
        onMouseLeave={() => setIsHoveredRight(false)}
        onClick={handleArrowClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHoveredRight ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg pointer-events-none">
          <ArrowRightIcon className="w-5 h-5" />
        </div>
      </motion.div>
    </div>
  );
}
