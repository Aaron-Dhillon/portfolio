import { motion } from 'framer-motion';
import { FiCode, FiServer, FiLayers } from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend',
    icon: <FiCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: <FiServer className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: ['Node.js', 'Express', 'Python', 'SQL', 'MongoDB'],
  },
  {
    category: 'Tools & More',
    icon: <FiLayers className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    items: ['Git', 'Docker', 'AWS', 'Figma', 'Agile/Scrum'],
  },
];

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating beautiful, functional,
            and user-friendly applications. With a strong foundation in both frontend
            and backend technologies, I enjoy bringing ideas to life through code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Who Am I?</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm Aaron, a Computer Science student with a passion for web development
                  and problem-solving. I enjoy turning complex problems into simple, beautiful,
                  and intuitive solutions.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or enjoying outdoor activities.
                </p>
                <p>
                  I'm always looking for new opportunities to learn and grow as a developer.
                  Let's connect and build something amazing together!
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Download Resume
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
