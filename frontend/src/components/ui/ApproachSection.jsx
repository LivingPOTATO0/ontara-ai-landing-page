import { motion } from 'framer-motion';

const approaches = [
  {
    num: "01",
    title: "We build for outcomes, not delivery.",
    desc: "A system that doesn't solve the real problem is a failure, no matter how impressive the code. We engineer solutions focused exclusively on measurable business impact."
  },
  {
    num: "02",
    title: "You work directly with the engineers.",
    desc: "No account managers, no handoffs. Meet and Jash are on every single project from the first discovery call all the way to final deployment and maintenance."
  },
  {
    num: "03",
    title: "We start from your problem, not our stack.",
    desc: "We don't push a fixed solution. We rigorously understand your bottleneck first, then objectively choose the absolute right tools and architectures to solve it."
  }
];

export default function ApproachSection() {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12 relative w-full" style={{ backgroundColor: '#F3EAC2', color: 'var(--ink)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          
          {/* Header Column */}
          <div className="w-full md:w-1/3 md:sticky md:top-32 mb-12 md:mb-0 z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
              className="font-sans leading-tight text-[clamp(2.5rem,4vw,4rem)] tracking-tight font-medium"
            >
              Why Ontara AI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg mt-6 opacity-70 leading-relaxed font-mono tracking-tight"
            >
              The difference between an agency and an engineering partner.
            </motion.p>
          </div>

          {/* Points Column */}
          <div className="w-full md:w-2/3 flex flex-col gap-12 md:gap-20">
            {approaches.map((point, index) => (
              <motion.div 
                key={point.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start group"
              >
                <div className="text-4xl md:text-4xl font-mono text-black/10 font-medium tracking-tighter shrink-0 transition-colors duration-500 group-hover:text-black/40">
                  {point.num}
                </div>
                <div className="flex flex-col gap-3 md:gap-4 mt-2">
                  <h3 className="text-xl md:text-3xl font-medium tracking-tight font-sans leading-snug group-hover:text-[var(--ink)] transition-colors duration-500">
                    {point.title}
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed opacity-60 max-w-2xl group-hover:opacity-100 transition-opacity duration-500 text-[var(--ink)]">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
