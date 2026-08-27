import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none overflow-hidden bg-transparent">
      {/* Background glowing aura */}
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-emerald-400 via-[#3B719F] to-[#D7E2EA] shadow-[0_0_12px_rgba(52,211,153,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
