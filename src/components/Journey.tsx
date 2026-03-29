import { motion } from "motion/react";

const chapters = [
  {
    title: "The First Inscription",
    period: "Age of Discovery",
    content: "In the shadowed halls of curiosity, the first lines of code were inscribed upon the digital void. A simple script, a spark of light amidst the unknown. The journey began with a thirst for creation that could not be quenched by mere observation.",
  },
  {
    title: "The Great Expansion",
    period: "Age of Forging",
    content: "Crossing the fog-veiled borders of complex architectures, the Tarnished mastered the arts of React and the arcane secrets of the backend. Great structures were built, and many bugs were vanquished in the fires of production, their code refined in the heat of battle.",
  },
  {
    title: "The Lord of Logic",
    period: "Age of Mastery",
    content: "Now, a Lord of Logic and Design, weaving together AI, Blockchain, and immersive interfaces. The quest for the perfect user experience continues, ever seeking the ultimate synergy between form and function, the Elden Code that binds the digital world together.",
  },
];

export const Journey = () => {
  return (
    <section id="journey" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl text-gold gold-glow mb-6">The Lore</h2>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <div className="space-y-32">
          {chapters.map((chapter, index) => (
            <motion.div 
              key={index}
              className="relative parchment-bg p-10 md:p-16 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-l-8 border-gold/60"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Chapter Badge */}
              <div className="absolute -top-8 left-12 bg-elden-bg px-6 py-3 border-2 border-gold/40 shadow-xl">
                <span className="font-cinzel text-gold text-sm tracking-[0.3em] font-bold">{chapter.period}</span>
              </div>
              
              <h3 className="text-3xl font-cinzel mb-8 border-b-2 border-ash/10 pb-4 text-ash/90">{chapter.title}</h3>
              <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-ash/80 first-letter:text-5xl first-letter:font-cinzel first-letter:mr-3 first-letter:float-left first-letter:text-gold">
                {chapter.content}
              </p>
              
              <div className="mt-12 flex justify-between items-center opacity-40">
                <div className="h-[1px] flex-grow bg-ash/20 mr-4" />
                <span className="font-cinzel text-xs uppercase tracking-[0.5em]">Chapter {index + 1}</span>
              </div>

              {/* Decorative corner accents for parchment */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-20" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};
