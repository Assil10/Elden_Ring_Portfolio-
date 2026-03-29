import { motion } from "motion/react";

const tools = [
  { name: "React", stats: "S-Tier", desc: "The primary blade for crafting dynamic realms." },
  { name: "Tailwind", stats: "A-Tier", desc: "The armor that styles the world with speed." },
  { name: "Node.js", stats: "S-Tier", desc: "The dark magic that powers the hidden depths." },
  { name: "TypeScript", stats: "S-Tier", desc: "The shield of types that blocks all errors." },
  { name: "Framer Motion", stats: "A-Tier", desc: "The enchantment of fluid movement." },
  { name: "PostgreSQL", stats: "B-Tier", desc: "The ancient archives of persistent data." },
  { name: "Solidity", stats: "B-Tier", desc: "The arcane script of the block-chain." },
  { name: "Blender", stats: "C-Tier", desc: "The forge of three-dimensional artifacts." },
];

export const Arsenal = () => {
  return (
    <section id="arsenal" className="py-24 px-4 bg-ash/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl text-gold gold-glow mb-4">The Arsenal</h2>
          <p className="font-cinzel text-xs text-gold/40 tracking-[0.4em] uppercase">Tools & Armaments</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              className="group relative h-48 bg-elden-bg border border-gold/10 flex flex-col items-center justify-center p-4 cursor-help overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              {/* Metallic Shine Animation */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <h3 className="text-gold font-cinzel text-sm md:text-base mb-2 group-hover:gold-glow transition-all">{tool.name}</h3>
              <span className="text-[10px] text-gold/40 border border-gold/20 px-2 py-0.5 rounded-full mb-4">{tool.stats}</span>
              
              {/* Tooltip-like Info */}
              <div className="absolute inset-0 bg-gold/90 p-4 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-elden-bg font-serif text-xs italic font-bold">
                  {tool.desc}
                </p>
              </div>

              {/* Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/30" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
