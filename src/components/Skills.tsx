import { motion } from "motion/react";
import { Zap, Brain, MousePointer2, Sparkles } from "lucide-react";

const attributes = [
  {
    name: "Strength",
    skill: "Programming",
    value: 92,
    icon: <Zap className="w-5 h-5" />,
    description: "The raw power to forge complex systems and robust architectures."
  },
  {
    name: "Intelligence",
    skill: "Problem Solving",
    value: 95,
    icon: <Brain className="w-5 h-5" />,
    description: "The wisdom to unravel the most cryptic bugs and optimize the path."
  },
  {
    name: "Dexterity",
    skill: "Design & UI",
    value: 88,
    icon: <MousePointer2 className="w-5 h-5" />,
    description: "The grace to craft fluid interfaces and elegant visual experiences."
  },
  {
    name: "Arcane",
    skill: "AI & Blockchain",
    value: 85,
    icon: <Sparkles className="w-5 h-5" />,
    description: "The mystical knowledge of emerging technologies and future arts."
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-ash/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl text-gold gold-glow mb-4">Attributes</h2>
          <p className="font-cinzel text-xs text-gold/40 tracking-[0.4em] uppercase">Power System</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {attributes.map((attr, index) => (
            <motion.div 
              key={index}
              className="group bg-elden-bg/40 p-8 border border-gold/10 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                {attr.icon}
              </div>
              
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h3 className="text-xl text-gold mb-1">{attr.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{attr.skill}</p>
                </div>
                <span className="text-2xl font-cinzel text-gold/80">{attr.value}</span>
              </div>

              <div className="w-full h-2 bg-ash/30 rounded-full overflow-hidden mb-6">
                <motion.div 
                  className="h-full bg-gradient-to-r from-gold/40 to-gold gold-glow"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${attr.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>

              <p className="text-sm text-gray-400 font-serif italic leading-relaxed">
                {attr.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/20 group-hover:border-gold/60 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
