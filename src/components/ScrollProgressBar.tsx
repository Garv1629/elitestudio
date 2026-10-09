import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.div
        className="h-[2px] bg-gradient-to-r from-[#E09290] via-[#111111] to-[#E09290] origin-left shadow-[0_0_8px_rgba(224,146,144,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
};
