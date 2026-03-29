import { motion } from "motion/react";
import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Site of Grace Visual Effect - Improved */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        {/* Base Glow */}
        <motion.div 
          className="w-96 h-96 bg-gold/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        {/* The Grace Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          {/* Wispy particles rising */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-20 grace-wisp opacity-0"
              animate={{ 
                y: [-20, -150], 
                opacity: [0, 0.8, 0],
                x: [0, (i - 2) * 15, 0],
                scale: [1, 0.5]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity, 
                delay: i * 0.6,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Core of the Grace */}
          <motion.div 
            className="w-2 h-24 bg-gradient-to-t from-gold via-gold-bright to-transparent rounded-full blur-[2px]"
            animate={{ 
              height: [80, 120, 80],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Ground Impact */}
          <motion.div 
            className="w-32 h-8 bg-gold/20 rounded-[100%] blur-md -mt-4"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl text-gold gold-glow mb-4">Site of Grace</h2>
          <p className="font-cinzel text-xs text-gold/40 tracking-[0.5em] uppercase">Rest & Communicate</p>
        </motion.div>

        <motion.div 
          className="bg-elden-bg/40 backdrop-blur-md border border-gold/20 p-8 md:p-12 rounded-sm relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Stone Engraved Texture Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/rock.png')]" />

          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="font-cinzel text-[10px] text-gold/60 uppercase tracking-widest font-bold">Thy Name</label>
                <input 
                  type="text" 
                  className="w-full bg-elden-bg/80 border border-gold/20 px-4 py-4 text-gold focus:border-gold outline-none transition-all duration-300 font-serif italic text-lg"
                  placeholder="Enter thy name..."
                />
              </div>
              <div className="space-y-3">
                <label className="font-cinzel text-[10px] text-gold/60 uppercase tracking-widest font-bold">Thy Messenger Address</label>
                <input 
                  type="email" 
                  className="w-full bg-elden-bg/80 border border-gold/20 px-4 py-4 text-gold focus:border-gold outline-none transition-all duration-300 font-serif italic text-lg"
                  placeholder="Enter thy email..."
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="font-cinzel text-[10px] text-gold/60 uppercase tracking-widest font-bold">Thy Message</label>
              <textarea 
                rows={6}
                className="w-full bg-elden-bg/80 border border-gold/20 px-4 py-4 text-gold focus:border-gold outline-none transition-all duration-300 font-serif italic text-lg resize-none"
                placeholder="Speak thy truth to the Erdtree..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full group relative py-5 border border-gold/40 bg-transparent overflow-hidden flex items-center justify-center gap-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Send className="w-5 h-5 text-gold group-hover:gold-glow transition-all" />
              <span className="relative z-10 font-cinzel text-gold tracking-[0.4em] text-sm uppercase font-bold">
                Send Message
              </span>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/40" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/40" />
            </motion.button>
          </form>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="font-cinzel text-[10px] text-gold/20 tracking-[0.6em] uppercase">
            © 2026 Assil Khaldi • Tarnished of the Lands Between
          </p>
        </div>
      </div>
    </section>
  );
};
