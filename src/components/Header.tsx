import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-gray-200/20 dark:shadow-gray-900/20"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold gradient-text relative group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="relative z-10">Lakshman Prasad</span>
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden focus:outline-none text-gray-800 dark:text-white relative w-8 h-8 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="absolute w-6 h-0.5 bg-current transition-all duration-300"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 0 : -6,
              }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-current transition-all duration-300"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                x: isMenuOpen ? 20 : 0,
              }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-current transition-all duration-300"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? 0 : 6,
              }}
            />
          </motion.button>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center gap-1"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${isActive
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  variants={navItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 bg-primary-100 dark:bg-primary-900/50 rounded-full -z-10"
                      layoutId="navIndicator"
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </motion.nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl px-4 py-4 border-t border-gray-100 dark:border-gray-700"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                      ? "bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 font-medium"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      }`}
                    onClick={toggleMenu}
                    variants={mobileItemVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-3">
                      {isActive && (
                        <motion.span
                          className="w-2 h-2 bg-primary-500 rounded-full"
                          layoutId="mobileNavDot"
                        />
                      )}
                      {item}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
