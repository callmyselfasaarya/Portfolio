import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const ProjectsSection: React.FC = () => {
  const isMobile = useIsMobile();
  const projects = [
    {
      title: 'CLASS-CONNECT',
      description: 'An descriptive application which used to store the details aka information of the students of an desired institution, aiming to ease the stress of faculty and management.',
      image: '/images/ClassConnect.png',
      technologies: ['HTML','CSS','Flask','SQLite'],
      github: 'https://github.com/callmyselfasaarya/Class-Connect',
      live: 'https://classconnect.pythonanywhere.com/',
      id: 'class-connect',
      status: 'Maintained',
      statusColor: 'bg-green-500/10 text-green-500 border-green-500/20',
    },
    {
      title: 'SCOREVANT',
      description: 'Scorevant is an Web based application for effective handling of the scores of the racket based games such as Tennis, Shuttle, Table-Tennis...',
      image: '/images/Scorevant.png',
      technologies: ['React', 'vite', 'TypeScript', 'three.js', 'Express.js','Framer Motion','Tailwind CSS'],
      github: 'https://github.com/callmyselfasaarya/scorevant',
      live: 'https://data-dashboard-demo.netlify.app',
      id: 'scorevant',
      status: 'In Development',
      statusColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    },
    {
      title: 'CAPSYNC',
      description: 'An AI-powered social media companion that generates platform-optimized captions, manages interaction schedules, and synchronizes content across multiple social platforms.',
      image: 'public/images/Capsync.png',
      technologies: ['Next.js', 'AI SDK', 'PostgreSQL', 'Tailwind', 'Clerk Auth'],
      github: 'https://github.com/callmyselfasaarya/capsync',
      live: 'https://capsync-demo.netlify.app',
      id: 'capsync',
      status: 'In Development',
      statusColor: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Deep dives into architectural decisions, technical challenges, and real-world results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group glass rounded-xl overflow-hidden transition-all duration-300 ${
                isMobile ? 'hover:scale-102' : 'hover:scale-105'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-3 font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-500/5 text-blue-500/80 border border-blue-500/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="w-full glass-card hover:bg-primary/5 border-primary/20"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={14} className="mr-2" />
                    Code
                  </Button>
                  <Link to={`/project/${project.id}`} className="w-full">
                    <Button
                      variant="default"
                      className="w-full bg-primary hover:opacity-90"
                    >
                      Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;