import { motion } from "motion/react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Journey", id: "journey" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Arsenal", id: "arsenal" },
  { name: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Basic intersection observer logic for active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });
      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 flex justify-center py-6 ${
        scrolled ? "bg-elden-bg/80 backdrop-blur-md border-b border-gold/10" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <ul className="flex items-center gap-4 md:gap-12">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              className={`relative font-cinzel text-xs md:text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:text-gold ${
                activeSection === item.id ? "text-gold" : "text-gray-400"
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 w-full h-[1px] bg-gold gold-glow"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
