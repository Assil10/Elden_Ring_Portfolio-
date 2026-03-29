import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden god-rays"
    >
      {/* Background Image - Erdtree/Ruins style */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-110"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop')" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-elden-bg via-transparent to-elden-bg" />
      </div>

      {/* Elden Ring Stylized Logo (SVG) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 200 200" className="animate-pulse">
          <circle cx="100" cy="70" r="40" fill="none" stroke="#d4af37" strokeWidth="0.5" />
          <circle cx="70" cy="110" r="40" fill="none" stroke="#d4af37" strokeWidth="0.5" />
          <circle cx="130" cy="110" r="40" fill="none" stroke="#d4af37" strokeWidth="0.5" />
          <circle cx="100" cy="130" r="40" fill="none" stroke="#d4af37" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#d4af37" strokeWidth="0.5" />
          <path d="M60,40 Q100,20 140,40" fill="none" stroke="#d4af37" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Character Silhouette */}
      <motion.div 
        className="absolute bottom-0 z-10 w-full flex justify-center pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <img 
          src="https://www.transparentpng.com/download/knight/knight-png-image-free-download-23.png" 
          alt="Knight Silhouette" 
          className="h-[70vh] object-contain brightness-0 invert opacity-30"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-8xl font-cinzel text-gold gold-glow mb-2 tracking-[0.2em]">
            ASSIL KHALDI
          </h1>
          <h2 className="text-xl md:text-3xl font-cinzel text-gold/60 tracking-[0.4em] uppercase mb-8">
            Tarnished Developer
          </h2>
        </motion.div>

        <motion.p
          className="max-w-2xl mx-auto text-gray-400 font-serif italic text-xl mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          "The fallen leaves tell a story... of a developer who crossed the fog to forge greatness in the Lands Between of Code."
        </motion.p>

        <motion.button
          onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-16 py-5 border border-gold/40 bg-transparent overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 font-cinzel text-gold tracking-[0.3em] text-sm font-bold">
            Enter the Lands Between
          </span>
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-cinzel text-[10px] text-gold/40 tracking-widest uppercase mb-2">Seek Below</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};
