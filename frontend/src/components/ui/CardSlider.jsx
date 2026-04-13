import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowRightIcon from './icons/ArrowRightIcon';

const cards = [
  {
    title: 'Services & Offerings',
    desc: 'What we build and how we operate.',
    link: '/services',
    glow: 'from-[#61afef] to-[#98c379]',
    tag: 'SERVICES',
  },
  {
    title: 'Selected Case Studies',
    desc: 'Real problems. Real systems. Real outcomes.',
    link: '/work',
    glow: 'from-[#e5c07b] to-[#d19a66]',
    tag: 'WORK',
  },
  {
    title: 'The Team & Mission',
    desc: "We're building the intelligence layer for modern business.",
    link: '/about',
    glow: 'from-[#c678dd] to-[#e06c75]',
    tag: 'ABOUT',
  },
  {
    title: 'Latest Insights',
    desc: 'Practical thinking on AI engineering.',
    link: '/blog',
    glow: 'from-[#56b6c2] to-[#61afef]',
    tag: 'INSIGHT',
  },
  {
    title: 'Start a Project',
    desc: 'Would you like to work with Meet or Jash?',
    link: '/contact',
    glow: 'from-[#98c379] to-[#e5c07b]',
    tag: 'CONTACT',
  },
];

export default function CardSlider() {
  const cardRef = useRef(null);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const x = useMotionValue(0);

  const loopCards = [...cards, ...cards, ...cards, ...cards];

  const NORMAL_SPEED = 40;
  const BOOST_SPEED = 1200;
  const [speed, setSpeed] = useState(NORMAL_SPEED);

  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();
    let setWidth = 0;

    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      setWidth = (cardWidth + 24) * cards.length;
    }

    if (!setWidth) setWidth = 1800;

    const animate = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const currentX = x.get();
      let newX = currentX - speed * delta;

      if (newX <= -setWidth) {
        newX += setWidth;
      } else if (newX > 0) {
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
    <div className="relative w-full overflow-hidden py-8 pt-16 group">
      <motion.div
        className="flex gap-6 px-8 cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }}
        dragElastic={0}
      >
        {loopCards.map((card, i) => (
          <Link
            key={i}
            to={card.link}
            className="shrink-0"
            style={{ textDecoration: 'none' }}
            ref={i === 0 ? cardRef : null}
          >
            <div
              className="group/card relative overflow-hidden rounded-[1.75rem] flex flex-col justify-between p-5 md:p-6 xl:p-6 transition-all duration-500 hover:scale-[1.02] bg-[#0A0D14] border border-white/6 hover:border-white/14"
              style={{
                width: 'clamp(220px, 22vw, 320px)',
                height: 'clamp(220px, 20vw, 290px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.10)',
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-[0.03] group-hover/card:opacity-[0.07] transition-opacity duration-700 pointer-events-none`}
              />

              <div
                className="absolute inset-0 opacity-[0.035] group-hover/card:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '22px 22px',
                }}
              />

              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div
                className={`absolute -right-[18%] -bottom-[18%] w-[72%] aspect-square rounded-full bg-gradient-to-tr ${card.glow} opacity-10 blur-[70px] group-hover/card:opacity-25 group-hover/card:scale-110 transition-all duration-700 pointer-events-none`}
              />

              <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="px-3 py-1.5 text-[9px] uppercase font-mono tracking-[0.22em] border border-white/10 rounded-full text-white/55 bg-white/[0.03]">
                  {card.tag}
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover/card:opacity-100 group-hover/card:border-white/30 transform group-hover/card:translate-x-0 -translate-x-3 transition-all duration-500 bg-white/[0.03]">
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="text-2xl xl:text-[1.85rem] font-sans font-medium tracking-tight text-white leading-[1.05] group-hover/card:text-[#e5c07b] transition-colors duration-500">
                  {card.title}
                </h3>

                <p className="text-sm xl:text-[0.95rem] text-white/60 font-sans leading-relaxed tracking-tight group-hover/card:text-white/78 transition-colors duration-500 max-w-[92%]">
                  {card.desc}
                </p>
              </div>

              <div className="relative z-10 flex items-end justify-between gap-3 pt-3">
                <div className="flex flex-col gap-1">
                  <div className="h-px w-10 bg-white/15" />
                  <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/28">
                    Explore more
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>

      <motion.div
        className="absolute right-0 top-0 bottom-0 w-24 md:w-48 hidden md:flex items-center justify-end pr-8 z-20 pointer-events-auto cursor-pointer"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, rgba(245, 242, 237, 0.4) 60%, rgba(245, 242, 237, 0.9) 100%)',
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