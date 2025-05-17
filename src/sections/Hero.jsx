import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Aaron Dhillon</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
            Software Engineer in Test & Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              I build exceptional digital experiences with modern technologies and clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn btn-primary"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn btn-outline"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-4/5 mx-auto lg:w-full max-w-md">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl overflow-hidden">
                {/* Replace with your image */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll down</p>
          <Link to="about" smooth={true} duration={500} className="inline-block">
            <FiChevronDown className="w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
