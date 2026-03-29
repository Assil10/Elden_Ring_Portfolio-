import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "The Golden Citadel",
    type: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
    description: "A massive marketplace forged with Next.js and Stripe. Capable of handling thousands of Tarnished customers simultaneously.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Rune Weaver",
    type: "AI Content Engine",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
    description: "An arcane tool that weaves content using OpenAI's powerful models. Automating the lore of the digital age.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    link: "#",
  },
  {
    title: "Shadow Realm",
    type: "Web3 Ecosystem",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop",
    description: "A decentralized realm where runes are traded as NFTs. Built on the Ethereum blockchain with iron-clad security.",
    tags: ["Solidity", "Ethers.js", "Hardhat"],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl text-gold gold-glow mb-4">Legacy Dungeons</h2>
          <p className="font-cinzel text-xs text-gold/40 tracking-[0.4em] uppercase">Great Works & Boss Encounters</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group relative bg-ash/20 border border-gold/10 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elden-bg to-transparent opacity-60" />
                
                {/* Aura Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-gold/40 animate-pulse" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] text-gold/60 uppercase tracking-widest mb-1 block">{project.type}</span>
                    <h3 className="text-xl text-gold group-hover:gold-glow transition-all">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.link} className="text-gold/40 hover:text-gold transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="text-gold/40 hover:text-gold transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-gray-400 font-serif italic mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 border border-gold/20 text-gold/60 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay Line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
