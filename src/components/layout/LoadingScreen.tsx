import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a bit before completing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[999] bg-[#0C0C0C] flex flex-col items-center justify-center"
      >
        <div className="w-64">
          <div className="flex justify-between items-end mb-4">
            <span className="text-xl font-medium tracking-widest uppercase text-[#D7E2EA]/80">Loading</span>
            <span className="text-3xl font-light text-[#D7E2EA]">{Math.min(progress, 100)}%</span>
          </div>
          <div className="h-[2px] w-full bg-[#D7E2EA]/10 overflow-hidden relative rounded-full">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#D7E2EA]"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "linear", duration: 0.15 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
