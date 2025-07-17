import { motion } from "framer-motion";

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
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 text-sm rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-3">
          <motion.a
            href={demoLink}
            target="_self"
            rel="noreferrer"
            className="px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors text-sm dark:bg-primary-500 dark:hover:bg-primary-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
          <motion.a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors text-sm dark:border-primary-400 dark:text-primary-400 dark:hover:bg-gray-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Code
          </motion.a>
        </div>
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
      className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Here are some of my recent projects. Each one presented unique
            challenges and opportunities to learn and grow as a developer.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
