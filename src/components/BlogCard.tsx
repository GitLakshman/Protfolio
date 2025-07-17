import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="h-48 overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{post.category}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{post.date} · {post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">By {post.author}</span>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={`/blog/${post.id}`}
              className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Read More →
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
