import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';

// Sample projects data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Previous Business Builders Website',
    description: 'A dynamic website for the Business Builders student organization at The Ohio State University, designed to streamline member engagement and corporate relations. The platform features secure payment processing and an interactive interest form to connect students with professional development opportunities.',
    tags: ['React', 'Node.js', 'Stripe',"Firebase"],
    image: 'https://via.placeholder.com/600x400/1e40af/ffffff?text=Business+Builders',
    github: 'https://github.com/Aaron-Dhillon/businessbuilders',
    live: 'https://bbcosu.org/',
    features: [
      'Integrated Stripe payment processing for secure member dues and event payments',
      'Redesigned and enhanced the club interest form with updated fields and validation',
      'Improved user experience with responsive design and intuitive navigation',
      'Streamlined member data collection and management system',
      'Enhanced security measures for payment processing'
    ]
  },
  {
    id: 2,
    title: 'Simple Blackjack',
    description: 'A fully functional Blackjack game built with MATLAB featuring a graphical interface and computer opponent. Developed as a final assignment for a MATLAB-based course, this project demonstrates strong programming fundamentals and game logic implementation.',
    tags: ['MATLAB', 'SimpleGameEngine'],
    image: 'https://via.placeholder.com/600x400/1e40af/ffffff?text=MATLAB+Blackjack',
    github: 'https://github.com/Aaron-Dhillon/blackjack',
    live: null,
    features: [
      'Complete Blackjack gameplay with card dealing, hand valuation, and win conditions',
      'Interactive graphical user interface with retro-style card assets',
      'Computer-controlled dealer with basic AI for hit/stand decisions',
      'Built using MATLAB with custom functions for game mechanics',
      'Clean code structure following functional decomposition principles'
    ]
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Framer Motion to showcase my projects and professional journey. Features smooth animations, dark mode, and a clean, accessible design that highlights my work effectively.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    image: 'https://via.placeholder.com/600x400/1e40af/ffffff?text=Portfolio',
    github: 'https://github.com/Aaron-Dhillon/portfolio',
    live: null,
    features: [
      'Built with React 18 and Vite for optimal performance and fast development',
      'Responsive design that works seamlessly across all device sizes',
      'Dark/light mode toggle with system preference detection',
      'Smooth page transitions and animations using Framer Motion',
      'Modern UI with clean typography and accessible color schemes',
      'Optimized for performance and SEO best practices'
    ]
  },
  {
    id: 4,
    title: 'Turbine Web Application',
    description: 'A data visualization and machine learning platform for analyzing wind turbine efficiency, developed for the 2022 OHIO Hackathon. The application evaluates turbine performance using real-world data and weather conditions to predict efficiency and feasibility.',
    tags: ['Machine Learning', 'Data Visualization', 'Web Development', 'Hackathon Project'],
    image: 'https://via.placeholder.com/600x400/1e40af/ffffff?text=Wind+Turbine',
    github: 'https://github.com/SuvanD0/Hack2022',
    live: null,
    features: [
      'Analyzes AEP\'s Oklahoma wind turbine data using machine learning algorithms',
      'Interactive visualization of turbine performance metrics and efficiency ratings',
      'Integration with weather APIs to assess turbine feasibility in different conditions',
      'Developed as part of a team for the 2022 OHIO Hackathon',
      'Solves real-world challenges in renewable energy optimization'
    ]
  },
  // Add more projects as needed
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                aria-label="GitHub Repository"
              >
                <FiGithub className="w-5 h-5 text-white" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                aria-label="Live Demo"
              >
                <FiExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const scrollInterval = useRef();
  const scrollSpeed = 0.5; // pixels per frame
  const scrollRef = useRef(0);
  const animationRef = useRef();
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollContainer = container.querySelector('.projects-container');
    const projectWidth = 320; // Width of each project card + margin
    const projectCount = projects.length;
    const totalWidth = projectWidth * projectCount;
    
    let animationId;
    let lastTimestamp = 0;

    const animateScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (isScrolling.current) {
        scrollRef.current += (scrollSpeed * delta) / 16;
        if (scrollRef.current >= totalWidth) {
          scrollRef.current = 0;
        }
        scrollContainer.style.transform = `translateX(-${scrollRef.current}px)`;
      }
      
      animationId = requestAnimationFrame(animateScroll);
    };

    // Start the animation loop
    animationId = requestAnimationFrame(animateScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      isScrolling.current = false;
      scrollContainer.style.transition = 'transform 0.3s ease';
      scrollContainer.style.transform = `translateX(-${scrollRef.current}px)`;
    };

    const handleMouseLeave = () => {
      isScrolling.current = true;
      scrollContainer.style.transition = 'none';
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    isScrolling.current = true;

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [projects.length]);

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div className="overflow-hidden pb-6">
            <div className="projects-container flex space-x-8 w-max">
              {[...projects, ...projects].map((project, index) => (
                <div key={`${project.id}-${index}`} className="flex-shrink-0 w-80">
                  <ProjectCard project={project} index={index % projects.length} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900 pointer-events-none"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Aaron-Dhillon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            View All Projects on GitHub
            <FiGithub className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
