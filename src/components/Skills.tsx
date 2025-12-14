import { motion } from "framer-motion";
import {
  SectionHeader,
  AnimatedCard,
  AnimatedProgress,
  BackgroundOrb,
  FadeIn,
  HoverScale,
} from "./animations";

const SkillCard = ({
  category,
  skills,
  index,
  icon,
}: {
  category: string;
  skills: { name: string; level: number }[];
  index: number;
  icon: string;
}) => {
  return (
    <AnimatedCard
      delay={index * 0.15}
      className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group"
    >
      {/* Background gradient on hover */}
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-100 dark:from-primary-900/30 to-transparent rounded-bl-full" />

      {/* Icon and title */}
      <div className="flex items-center gap-4 mb-6 relative">
        <motion.div
          className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-primary-500/25"
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category}
        </h3>
      </div>

      {/* Skills list */}
      <div className="space-y-5 relative">
        {skills.map((skill, i) => (
          <div key={i} className="group/skill">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors">
                {skill.name}
              </span>
              <FadeIn delay={0.5 + i * 0.1}>
                <span className="text-gray-500 dark:text-gray-400 font-semibold">
                  {skill.level}%
                </span>
              </FadeIn>
            </div>
            <AnimatedProgress
              value={skill.level}
              delay={0.3 + i * 0.1}
              showDot={true}
            />
          </div>
        ))}
      </div>
    </AnimatedCard>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "⚛️",
      skills: [
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "CSS/SCSS/Tailwind", level: 95 },
        { name: "Redux & Context API", level: 77 },
      ],
    },
    {
      category: "Backend Development",
      icon: "🍃",
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
      icon: "🛠️",
      skills: [
        { name: "Git & CI/CD", level: 92 },
        { name: "TDD & Jest", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Agile & Scrum", level: 90 },
        { name: "UI/UX Design", level: 85 },
      ],
    },
  ];

  const additionalSkills = [
    "Java",
    "Python",
    "JavaScript",
    "PostgreSQL",
    "Redis",
    "Kubernetes",
    "AWS",
    "Linux",
    "Nginx",
    "Webpack",
    "Vite",
    "Figma",
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundOrb
          position="absolute top-1/4 -left-20"
          size="w-80 h-80"
          colors="from-primary-200/40 to-purple-200/40 dark:from-primary-900/30 dark:to-purple-900/30"
        />
        <BackgroundOrb
          position="absolute bottom-1/4 -right-20"
          size="w-96 h-96"
          colors="from-blue-200/40 to-cyan-200/40 dark:from-blue-900/30 dark:to-cyan-900/30"
          duration={12}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <SectionHeader
          badge="💪 Technical Expertise"
          title="My Skills"
          highlightedWord="Skills"
          description="I've developed expertise in a wide range of technologies across the full stack. Here's a breakdown of my technical proficiency."
        />

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} index={index} />
          ))}
        </div>

        {/* Additional skills cloud */}
        <FadeIn delay={0.5} className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Also familiar with:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((tech, index) => (
              <HoverScale key={tech} scale={1.1}>
                <FadeIn delay={0.6 + index * 0.03}>
                  <span className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md border border-gray-100 dark:border-gray-700 text-sm font-medium hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default">
                    {tech}
                  </span>
                </FadeIn>
              </HoverScale>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;
