import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Laskhman Prasad
        </motion.a>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none text-gray-800 dark:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
