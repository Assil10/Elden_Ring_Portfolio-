import { motion } from "motion/react";

export const FloatingEmbers = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-glow rounded-full opacity-40"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%", 
            opacity: 0 
          }}
          animate={{ 
            y: "-10%", 
            opacity: [0, 0.6, 0],
            x: (Math.random() * 100 + (Math.random() * 20 - 10)) + "%"
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            delay: Math.random() * 10,
            ease: "linear"
          }}
          style={{
            filter: "blur(1px)",
            boxShadow: "0 0 5px #ffbf00"
          }}
        />
      ))}
    </div>
  );
};

export const FogOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1/2 opacity-30 bg-gradient-to-t from-ash/40 to-transparent"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
