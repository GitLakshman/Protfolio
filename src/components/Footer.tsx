import { motion } from "framer-motion";
import {
  AnimatedContainer,
  StaggerItem,
  FadeIn,
  BackgroundOrb,
  Pulse,
} from "./animations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/GitLakshman",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/lakshman23/",
      path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
  ];

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-950 dark:to-black text-white py-16 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundOrb
          position="absolute top-0 left-1/4"
          size="w-96 h-96"
          colors="from-primary-600/10 to-purple-600/10"
        />
        <BackgroundOrb
          position="absolute bottom-0 right-1/4"
          size="w-80 h-80"
          colors="from-blue-600/10 to-cyan-600/10"
          duration={12}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedContainer className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand section */}
          <StaggerItem className="lg:w-1/3">
            <motion.a
              href="#"
              className="inline-block text-3xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Lakshman Prasad
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Building digital solutions for the modern web. Passionate about
              creating efficient, scalable, and user-friendly applications.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-primary-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/10"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" as const }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </StaggerItem>

          {/* Quick links */}
          <StaggerItem>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <FadeIn key={index} direction="left" delay={0.3 + index * 0.05}>
                  <li>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span className="w-0 h-0.5 bg-primary-500 group-hover:w-4 transition-all duration-300" />
                      {link}
                    </motion.a>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </StaggerItem>

          {/* Contact info */}
          <StaggerItem>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              Contact
            </h3>
            <ul className="space-y-4 text-gray-400">
              <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:lakshman23122001@gmail.com" className="hover:text-white transition-colors">
                  lakshman23122001@gmail.com
                </a>
              </motion.li>
              <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918465022789" className="hover:text-white transition-colors">
                  +91 84650 22789
                </a>
              </motion.li>
              <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Amalapuram, India</span>
              </motion.li>
            </ul>
          </StaggerItem>

          {/* CTA section */}
          <StaggerItem className="lg:w-1/4">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              Let's Work Together
            </h3>
            <p className="text-gray-400 mb-4">
              Have a project in mind? Let's create something amazing together.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </StaggerItem>
        </AnimatedContainer>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© {currentYear} Lakshman Prasad. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with
              <Pulse scale={1.3} duration={0.8}>
                <span className="text-red-500">❤️</span>
              </Pulse>
              in India
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Back to top button */}
      <motion.a
        href="#home"
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-primary-500/50 transition-shadow"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring" as const }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.a>
    </footer>
  );
};

export default Footer;
