import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCode, FiUsers } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: 'Tech Innovations Inc.',
    period: 'May 2023 - Aug 2023',
    location: 'San Francisco, CA',
    description: [
      'Developed and maintained web applications using React and Node.js, improving user experience and performance',
      'Collaborated with cross-functional teams to design and implement new features',
      'Optimized database queries, reducing API response times by 30%',
      'Participated in code reviews and contributed to team knowledge sharing'
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Agile'],
    icon: <FiBriefcase className="w-6 h-6" />
  },
  {
    id: 2,
    role: 'Research Assistant',
    company: 'University AI Lab',
    period: 'Jan 2023 - Present',
    location: 'Boston, MA',
    description: [
      'Conducted research on machine learning algorithms for natural language processing',
      'Implemented and tested deep learning models using PyTorch',
      'Published research findings in a peer-reviewed conference',
      'Mentored junior students in machine learning concepts'
    ],
    skills: ['Python', 'PyTorch', 'NLP', 'Research'],
    icon: <FiCode className="w-6 h-6" />
  },
  {
    id: 3,
    role: 'Teaching Assistant - Data Structures',
    company: 'University Computer Science Dept.',
    period: 'Sep 2022 - Dec 2022',
    location: 'Boston, MA',
    description: [
      'Assisted 100+ students in understanding data structures and algorithms',
      'Conducted weekly office hours and review sessions',
      'Graded assignments and provided constructive feedback',
      'Created supplementary learning materials'
    ],
    skills: ['Java', 'Algorithms', 'Teaching', 'Mentorship'],
    icon: <FiUsers className="w-6 h-6" />
  }
];

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 group"
    >
      <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-blue-500 dark:border-blue-400 group-hover:scale-125 transition-transform"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.role}</h3>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="font-medium">{experience.company}</span>
              <span className="mx-2">•</span>
              <span>{experience.location}</span>
            </div>
          </div>
          <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
            {experience.period}
          </div>
        </div>
        
        <ul className="space-y-2 mb-4">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          {experience.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my career in technology.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-blue-500 dark:from-blue-900 dark:to-blue-400"></div>
          
          <div className="space-y-12">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
          
          <div className="absolute left-0 bottom-0 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent dark:from-blue-400"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
