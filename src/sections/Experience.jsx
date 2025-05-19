import hubbleLogo from '../assets/hubble_vote_logo.jpeg';
import webstaurantLogo from '../assets/webstaurantstore_com_logo.jpeg';
import bbLogo from '../assets/bb_logo.jpeg';
import osuLogo from '../assets/osu_logo.jpeg';
import appianLogo from '../assets/appian_corporation_logo.jpeg';

import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCode, FiUsers } from 'react-icons/fi';

const COMPANY_LOGOS = {
  'Hubble': hubbleLogo,
  'WebstaurantStore': webstaurantLogo,
  'Business Builders': bbLogo,
  'The Ohio State University': osuLogo,
  'Appian': appianLogo,
};

const experiences = [
  {
    id: 1,
    role: 'Software Development Intern',
    company: 'Hubble',
    period: 'Jan 2024 - Apr 2024',
    location: 'Worthington, OH',
    skills: ['Ruby', 'Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'Hotwired'],
    icon: <FiBriefcase className="w-6 h-6" />
  },
  {
    id: 2,
    role: 'Software QA Intern',
    company: 'WebstaurantStore',
    period: 'May 2024 - Sep 2024',
    location: 'Lititz, PA',
    skills: ['Groovy', 'Selenium WebDriver', 'SQL', 'Azure DevOps'],
    icon: <FiCode className="w-6 h-6" />
  },
  {
    id: 3,
    role: 'VP of Technology',
    company: 'Business Builders',
    period: 'Sep 2024 - May 2025',
    location: 'Columbus, OH',
    skills: ['React', 'Agile', 'Notion'],
    icon: <FiUsers className="w-6 h-6" />
  },
  {
    id: 4,
    role: 'Undergraduate Teaching Assistant',
    company: 'The Ohio State University',
    period: 'Jan 2025 - May 2025',
    location: 'Columbus, OH',
    skills: ['Data Structures', 'Object-Oriented Programming', 'Recursion', 'Java'],
    icon: <FiBriefcase className="w-6 h-6" />
  },
  {
    id: 5,
    role: 'Software QE Intern',
    company: 'Appian',
    period: 'June 2025 - August 2025',
    location: 'McLean, VA',
    skills: [],
    icon: <FiBriefcase className="w-6 h-6" />,
    isUpcoming: true
  }

];

const ExperienceCard = ({ experience }) => {
  const logoUrl = COMPANY_LOGOS[experience.company];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 pb-8"
    >
      {/* Company Logo Container */}
      <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 dark:border-blue-400 flex items-center justify-center overflow-hidden shadow-md z-10">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${experience.company} logo`}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load image: ${e.target.src}`);
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="w-6 h-6 flex items-center justify-center text-blue-500" style={{ display: logoUrl ? 'none' : 'flex' }}>
          {experience.icon}
        </div>
      </div>
      
      {/* Timeline dot */}
      <div className="absolute left-5 top-5 w-2 h-2 bg-blue-500 rounded-full z-0"></div>
      
      {/* Card Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.role}</h3>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="font-medium">{experience.company}</span>
              <span className="mx-2">•</span>
              <span>{experience.location}</span>
            </div>
          </div>
          <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full whitespace-nowrap">
            {experience.period}
          </div>
        </div>
        
        {experience.isUpcoming && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="text-gray-600 dark:text-gray-300 text-lg font-medium text-center">Coming Soon...</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800/30 py-20">
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
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-blue-500 dark:from-blue-900 dark:to-blue-400"></div>
          
          <div className="space-y-12">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
          
          <div className="absolute left-5 bottom-0 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent dark:from-blue-400"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
