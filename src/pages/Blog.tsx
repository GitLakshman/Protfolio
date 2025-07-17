import { motion } from "framer-motion";
import BlogCard, { BlogPost } from "../components/BlogCard";

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "modern-react-hooks",
      title: "Modern React Hooks You Should Be Using",
      excerpt:
        "Explore advanced React hooks like useReducer, useCallback, useMemo, and custom hooks that will improve your component architecture and performance.",
      date: "June 12, 2025",
      author: "Alex Chen",
      category: "React",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "8 min read",
    },
    {
      id: "typescript-best-practices",
      title: "TypeScript Best Practices for Large Projects",
      excerpt:
        "Learn how to structure your TypeScript projects for scalability, implement proper type definitions, and leverage advanced TypeScript features.",
      date: "May 28, 2025",
      author: "Alex Chen",
      category: "TypeScript",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "10 min read",
    },
    {
      id: "building-accessible-websites",
      title: "Building Accessible Websites: A Comprehensive Guide",
      excerpt:
        "Discover the essential practices and tools for making your websites accessible to all users, including those with disabilities.",
      date: "May 15, 2025",
      author: "Alex Chen",
      category: "Accessibility",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "12 min read",
    },
    {
      id: "serverless-architecture",
      title: "Serverless Architecture: Benefits and Challenges",
      excerpt:
        "An in-depth look at serverless architectures, when to use them, and how they can reduce operational costs while improving scalability.",
      date: "April 22, 2025",
      author: "Alex Chen",
      category: "Cloud",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      readTime: "9 min read",
    },
    {
      id: "responsive-design-techniques",
      title: "Advanced Responsive Design Techniques for 2025",
      excerpt:
        "Explore modern responsive design approaches including fluid typography, container queries, and CSS Grid layouts for multi-device experiences.",
      date: "April 8, 2025",
      author: "Alex Chen",
      category: "CSS",
      image:
        "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "7 min read",
    },
    {
      id: "performance-optimization",
      title: "Web Performance Optimization Strategies",
      excerpt:
        "Learn practical techniques to improve your website's loading speed, rendering performance, and overall user experience metrics.",
      date: "March 27, 2025",
      author: "Alex Chen",
      category: "Performance",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
      readTime: "11 min read",
    },
  ];

  const categories = [
    "All",
    "React",
    "TypeScript",
    "CSS",
    "Accessibility",
    "Cloud",
    "Performance",
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Blog & Articles
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-primary-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Insights, tutorials, and thoughts on web development, design, and
            technology.
          </motion.p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full ${
                category === "All"
                  ? "bg-primary-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700"
              } transition-colors border border-gray-200 dark:border-gray-700`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <motion.button
            className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors dark:bg-primary-500 dark:hover:bg-primary-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Articles
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
