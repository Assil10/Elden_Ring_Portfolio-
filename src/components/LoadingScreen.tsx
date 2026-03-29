import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-elden-bg flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Stylized Elden Ring Logo */}
        <svg width="200" height="200" viewBox="0 0 200 200" className="absolute z-10">
          <motion.circle 
            cx="100" cy="70" r="40" fill="none" stroke="#d4af37" strokeWidth="1" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
          />
          <motion.circle 
            cx="70" cy="110" r="40" fill="none" stroke="#d4af37" strokeWidth="1" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.circle 
            cx="130" cy="110" r="40" fill="none" stroke="#d4af37" strokeWidth="1" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }}
          />
          <motion.circle 
            cx="100" cy="130" r="40" fill="none" stroke="#d4af37" strokeWidth="1" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.5 }}
          />
          <motion.line 
            x1="100" y1="20" x2="100" y2="180" stroke="#d4af37" strokeWidth="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 2 }}
          />
        </svg>

        <motion.div 
          className="absolute inset-0 border-2 border-gold/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div 
          className="z-20 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <span className="font-cinzel text-gold text-3xl tracking-tighter gold-glow">ELDEN</span>
          <span className="font-cinzel text-gold/60 text-[10px] tracking-[0.5em] -mt-1">PORTFOLIO</span>
        </motion.div>
      </div>
      
      <motion.div className="mt-16 w-72 h-[1px] bg-ash/30 relative">
        <motion.div 
          className="h-full bg-gold shadow-[0_0_15px_rgba(212,175,55,1)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
        {/* Progress percentage */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-cinzel text-[8px] text-gold/40 tracking-widest">
          {progress}% AWAKENED
        </div>
      </motion.div>
      
      <motion.p 
        className="mt-12 font-serif italic text-gold/40 text-xs tracking-widest"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        "The Tarnished shall soon rise..."
      </motion.p>
    </motion.div>
  );
};
