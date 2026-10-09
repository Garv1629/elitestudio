import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreWork }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll scrub transformations
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.14, 1.0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.85, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.65]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-36 sm:pt-44 lg:pt-48 pb-16 px-6 lg:px-12 overflow-hidden bg-[#111111]"
    >
      {/* Cinematic Background Layer with Scroll-scrubbed scale & pan */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{
            scale: imageScale,
            y: imageY,
          }}
          className="w-full h-full relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
            alt="Elite Studios luxury interior architecture in Greater Noida West"
            className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.04]"
            loading="eager"
            decoding="async"
          />
          {/* Architectural Vignette */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-[#111111]/30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-[#111111]/40" />
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
        </motion.div>
      </div>

      {/* Center Cinematic Editorial Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 md:py-24"
      >
        <div className="max-w-5xl space-y-8">
          {/* High-Contrast Luxury Serif Headline with Clean Proportional Fit */}
          <div className="space-y-2">
            <div className="overflow-hidden pb-1">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] leading-[1.05] tracking-tight font-normal text-[#F2EED8]"
              >
                Spaces{' '}
                <span className="italic font-normal font-serif text-[#E09290]">
                  worth
                </span>
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-2">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] leading-[1.05] tracking-tight font-normal text-[#F2EED8]"
              >
                coming home to.
              </motion.h1>
            </div>
          </div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
            className="text-base sm:text-xl md:text-2xl text-[#F2EED8]/90 font-light max-w-2xl leading-relaxed font-sans"
          >
            Turnkey interior solutions, bespoke factory joinery, and tactile architecture crafted around the way you live.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: 'easeOut' }}
            className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onExploreWork}
              data-cursor="EXPLORE"
              className="group"
              icon={<ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />}
            >
              EXPLORE OUR WORK
            </Button>

            <Button
              variant="glass"
              size="lg"
              onClick={onOpenConsultation}
              data-cursor="CONSULT"
              className="group"
              icon={<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
            >
              BOOK A CONSULTATION
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
