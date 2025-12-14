import { motion } from "framer-motion";
import {
  SectionHeader,
  AnimatedContainer,
  StaggerItem,
  FadeIn,
  AnimatedCard,
  BackgroundOrb,
} from "./animations";

const StatCard = ({
  title,
  value,
  icon,
  index,
}: {
  title: string;
  value: string;
  icon: string;
  index: number;
}) => {
  return (
    <AnimatedCard
      delay={index * 0.1}
      className="relative bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600 overflow-hidden group"
    >
      {/* Background gradient */}
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <motion.div
        className="text-4xl mb-3"
        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.4 }}
      >
        {icon}
      </motion.div>

      {/* Value */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
        {value}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm">{title}</p>

      {/* Decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      />
    </AnimatedCard>
  );
};

const About = () => {
  const stats = [
    { title: "Education", value: "B.Tech ECE", icon: "🎓" },
    { title: "Experience", value: "1+ Years", icon: "💼" },
    { title: "Projects", value: "3+ Completed", icon: "🚀" },
    { title: "Clients", value: "1+ Happy", icon: "😊" },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundOrb
          position="absolute top-20 right-0"
          size="w-96 h-96"
          colors="from-primary-200/30 to-transparent dark:from-primary-900/20"
        />
        <BackgroundOrb
          position="absolute bottom-20 left-0"
          size="w-80 h-80"
          colors="from-purple-200/30 to-transparent dark:from-purple-900/20"
          duration={12}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header - Now just one line! */}
        <SectionHeader
          badge="👋 Get to know me"
          title="About Me"
          highlightedWord="Me"
        />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text content */}
          <AnimatedContainer className="lg:w-1/2">
            <StaggerItem>
              <div className="relative mb-8">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 rounded-full" />
                <div className="pl-6 space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Hello! I'm{" "}
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      Lakshman
                    </span>
                    , an enthusiastic full-stack developer based in India. I
                    enjoy creating web solutions that are efficient, responsive,
                    and user-friendly.
                  </p>

                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    With hands-on experience in{" "}
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      Java, Spring Boot, and React
                    </span>
                    , I've contributed to scalable applications during
                    internships and academic projects. I specialize in backend
                    systems, frontend interfaces, and cloud-based deployments.
                  </p>

                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    When I'm not coding, you can find me learning new
                    technologies, solving coding challenges, or collaborating on
                    GitHub. I believe a strong foundation and curiosity drive
                    innovation in software development.
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* CTA buttons */}
            <StaggerItem>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Let's Talk</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </motion.a>
              </div>
            </StaggerItem>
          </AnimatedContainer>

          {/* Stats grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} index={index} />
              ))}
            </div>

            {/* Fun facts */}
            <FadeIn delay={0.5} className="mt-8">
              <div className="p-6 bg-gradient-to-r from-primary-500/10 to-purple-500/10 dark:from-primary-900/30 dark:to-purple-900/30 rounded-2xl border border-primary-100 dark:border-primary-800">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span>⚡</span> Quick Facts
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {[
                    "🌍 Based in Amalapuram, Andhra Pradesh",
                    "☕ Fueled by coffee and curiosity",
                    "🎯 Always learning something new",
                    "🤝 Open to collaboration",
                  ].map((fact, index) => (
                    <FadeIn
                      key={index}
                      direction="left"
                      delay={0.6 + index * 0.1}
                    >
                      <li className="flex items-center gap-2">{fact}</li>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
