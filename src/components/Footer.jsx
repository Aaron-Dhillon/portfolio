import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FiGithub size={20} />,
    url: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin size={20} />,
    url: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    icon: <FiTwitter size={20} />,
    url: 'https://twitter.com/yourusername',
  },
  {
    name: 'Email',
    icon: <FiMail size={20} />,
    url: 'mailto:your.email@example.com',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer text-gray-900 dark:text-white"
            >
              Aaron Dhillon
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Full Stack Developer & Tech Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center md:text-left"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Aaron Dhillon. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Built with React, Framer Motion, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
