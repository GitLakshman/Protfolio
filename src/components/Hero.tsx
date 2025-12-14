import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { techStackIcons } from "./icons";

// Typewriter effect component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setIsStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, isStarted]);

  return (
    <span>
      {displayedText}
      <motion.span
        className="inline-block w-[3px] h-[1.1em] bg-primary-600 dark:bg-primary-400 ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
};

// Floating particles background component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary-500/20 dark:bg-primary-400/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-28 pb-16 md:pb-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500 overflow-hidden min-h-screen flex items-center"
    >
      {/* Floating particles background */}
      <FloatingParticles />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/30 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8 relative z-10">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Greeting badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/80 dark:bg-primary-900/50 rounded-full mb-6 backdrop-blur-sm"
            variants={itemVariants}
          >
            <motion.span
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-primary-700 dark:text-primary-300 font-medium">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span
              className="gradient-text-animated inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TypewriterText text="Lakshman" delay={800} />
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 flex items-center gap-2"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
            >
              👨‍💻
            </motion.span>
            <span className="relative">
              Software Developer
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.5 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-8 max-w-md text-lg leading-relaxed"
            variants={itemVariants}
          >
            I build{" "}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">
              scalable full-stack applications
            </span>{" "}
            using Spring Boot and React, combining robust backend architecture
            with intuitive, high-performance interfaces that drive user
            engagement.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow duration-300"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Me
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-700 to-purple-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#projects"
              className="group px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-800 relative overflow-hidden"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </span>
            </motion.a>
          </motion.div>

          {/* Tech stack icons */}
          <motion.div
            className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700"
            variants={itemVariants}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Tech Stack:
            </span>
            <div className="flex gap-4">
              {techStackIcons.slice(0, 5).map((tech, index) => (
                <motion.div
                  key={index}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    boxShadow: `0 10px 25px ${tech.color}40`,
                    transition: { duration: 0.2 },
                  }}
                  title={tech.name}
                >
                  <tech.Icon size={24} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Profile image with 3D parallax effect */}
        <motion.div
          className="md:w-1/2 flex justify-center perspective-1000"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            className="relative"
            style={{ rotateX, rotateY }}
          >
            {/* Glowing ring behind image */}
            <motion.div
              className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 blur-sm"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ margin: "-4px" }}
            />

            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center overflow-hidden shadow-2xl animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={assets.profileImage}
                alt="Lakshman Prasad"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating badges around image */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                🚀 1+ Years Exp
              </span>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                ⚡ Full Stack
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs mb-2 uppercase tracking-wider">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
