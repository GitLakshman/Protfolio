import { motion } from "framer-motion";

const SkillCard = ({
  category,
  skills,
  index,
}: {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
  index: number;
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <motion.div
                className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
                style={{ width: 0 }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "CSS/SCSS/Tailwind", level: 95 },
        { name: "Redux & Context API", level: 77 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Spring Framework & Spring Boot", level: 90 },
        { name: "GraphQL", level: 72 },
        { name: "REST API Design", level: 90 },
        { name: "MySQL & MongoDB", level: 84 },
        { name: "Oracle & AWS", level: 80 },
      ],
    },
    {
      category: "Tools & Practices",
      skills: [
        { name: "Git & CI/CD", level: 92 },
        { name: "TDD & Jest", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Agile & Scrum", level: 90 },
        { name: "UI/UX Design", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
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
            My Skills
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
            I've developed expertise in a wide range of technologies across the
            full stack. Here's a breakdown of my technical proficiency.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
