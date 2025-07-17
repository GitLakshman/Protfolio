import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary-600 mx-auto"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Hello! I'm Lakshman, an enthusiastic full-stack developer based in
              India. I enjoy creating web solutions that are efficient,
              responsive, and user-friendly.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              With hands-on experience in Java, Spring Boot, and React, I’ve
              contributed to scalable applications during internships and
              academic projects. I specialize in backend systems, frontend
              interfaces, and cloud-based deployments.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              When I'm not coding, you can find me learning new technologies,
              solving coding challenges, or collaborating on GitHub. I believe a
              strong foundation and curiosity drive innovation in software
              development.
            </motion.p>
          </motion.div>

          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                BTech in Electronics and Communication
                <br />
                JNTUK, 2021-2025
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                1+ Years
                <br />
                Full-Stack Java Development
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                3+ Projects
                <br />
                Completed
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Clients
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                1+ Happy
                <br />
                Clients
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
