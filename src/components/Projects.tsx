import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import {
  SectionHeader,
  BackgroundOrb,
  FadeIn,
  HoverScale,
} from "./animations";

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink,
  index,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="group relative perspective-1000"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring" as const,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
        {/* Image container with overlay */}
        <div className="relative h-52 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          {/* Quick action buttons on hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={demoLink}
              target="_self"
              rel="noreferrer"
              className="p-3 bg-white/90 rounded-full text-gray-800 hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.a>
            <motion.a
              href={codeLink}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/90 rounded-full text-gray-800 hover:bg-primary-500 hover:text-white transition-colors shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3
            className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, i) => (
              <HoverScale key={i} scale={1.05}>
                <span className="px-3 py-1 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/50 dark:to-purple-900/50 text-primary-700 dark:text-primary-300 text-sm rounded-full border border-primary-100 dark:border-primary-800">
                  {tag}
                </span>
              </HoverScale>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <motion.a
              href={demoLink}
              target="_self"
              rel="noreferrer"
              className="flex-1 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-xl text-center text-sm shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Live Demo
            </motion.a>
            <motion.a
              href={codeLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2.5 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl text-center text-sm hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Code
            </motion.a>
          </div>
        </div>

        {/* Decorative corner gradient */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-full" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Workout Planner",
      description:
        "A fitness app that uses AI to create personalized workout plans based on user goals and preferences.",
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["React", "Node.js", "TensorFlow.js", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Cloud Document Management",
      description:
        "A secure document management system with real-time collaboration and version control.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["React", "Firebase", "TypeScript", "Material UI"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "E-Learning Platform",
      description:
        "A comprehensive platform for online courses with progress tracking and interactive content.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Financial Dashboard",
      description:
        "An intuitive dashboard for tracking investments, expenses, and financial goals with data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["React", "D3.js", "Redux", "Node.js", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Smart Home Control Center",
      description:
        "A central hub to manage IoT devices, control home automation, and monitor energy usage.",
      image:
        "https://img.freepik.com/free-vector/gradient-smart-home-isometric-technology-background_52683-4498.jpg?t=st=1747639229~exp=1747642829~hmac=8f146d1f114d218bcc6db6bf43ca6bed107dac03078838ce8588be07f41ae391&w=1380",
      tags: ["React Native", "GraphQL", "AWS IoT", "Express"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Sustainable Travel App",
      description:
        "An app that helps travelers find eco-friendly accommodations, restaurants, and transportation options.",
      image:
        "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
      tags: ["React", "Google Maps API", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundOrb
          position="absolute top-20 left-10"
          size="w-72 h-72"
          colors="from-primary-200/30 to-transparent dark:from-primary-900/20"
        />
        <BackgroundOrb
          position="absolute bottom-20 right-10"
          size="w-96 h-96"
          colors="from-purple-200/30 to-transparent dark:from-purple-900/20"
          duration={12}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <SectionHeader
          badge="✨ Featured Work"
          title="My Projects"
          highlightedWord="Projects"
          description="Here are some of my recent projects. Each one presented unique challenges and opportunities to learn and grow as a developer."
        />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* View more button */}
        <FadeIn delay={0.5} className="text-center mt-12">
          <motion.a
            href="https://github.com/GitLakshman"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View More on GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
