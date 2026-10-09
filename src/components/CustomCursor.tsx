import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return;

    let hasShown = false;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!hasShown) {
        hasShown = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('[data-cursor]');
      const clickableEl = target?.closest('button, a, input, [role="button"]');

      if (interactiveEl) {
        setIsHovered(true);
        setHoverText(interactiveEl.getAttribute('data-cursor') || 'VIEW');
      } else if (clickableEl) {
        setIsHovered(true);
        setHoverText('');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleElementHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? (hoverText ? 3.2 : 1.8) : 1,
          backgroundColor: isHovered ? (hoverText ? 'rgba(224, 146, 144, 0.95)' : 'rgba(242, 238, 216, 0.4)') : 'rgba(224, 146, 144, 0.45)',
          borderColor: isHovered ? '#111111' : 'rgba(17, 17, 17, 0.3)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-7 h-7 rounded-full border flex items-center justify-center backdrop-blur-[1px]"
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[4px] font-sans font-bold tracking-widest text-[#111111] uppercase"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};
