import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 md:pt-28 pb-16 md:pb-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-primary-600 dark:text-primary-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Laskhman
            </motion.span>
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Java Developer & Web Enthusiast
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I specialize in building full-stack Java applications with Spring
            Boot and React. My passion is crafting responsive frontends that
            ensure smooth and engaging user experiences.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors dark:bg-primary-500 dark:hover:bg-primary-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Profile image */}
            <img
              src="src\assets\DSC_New.jpeg"
              alt="Alex Chen"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
