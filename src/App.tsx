import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Arsenal } from "./components/Arsenal";
import { Contact } from "./components/Contact";
import { FloatingEmbers, FogOverlay } from "./components/BackgroundEffects";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Cursor glow effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-gold/30 selection:text-gold overflow-x-hidden">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* Global Background Effects */}
          <FloatingEmbers />
          <FogOverlay />
          
          {/* Cursor Glow */}
          <div 
            className="fixed w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none z-50 transition-transform duration-300 ease-out"
            style={{ 
              transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` 
            }}
          />

          <Navbar />
          
          <main>
            <Hero />
            
            <div className="relative">
              {/* Section Dividers / Transitions */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-elden-bg to-transparent z-10" />
              
              <Journey />
              <Skills />
              <Projects />
              <Arsenal />
              <Contact />
            </div>
          </main>

          {/* Footer Decorative Line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </motion.div>
      )}
    </div>
  );
}
