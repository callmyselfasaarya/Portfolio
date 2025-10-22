import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const ProjectsSection: React.FC = () => {
  const isMobile = useIsMobile();
  const projects = [
    
    {
      title: 'Class-Connect',
      description: 'An descriptive application which used to store the details aka information of the students of an desired institution, aiming to ease the stress of faculty and management.',
      image: 'public/images/ClassConnect.png',
      technologies: ['HTML','CSS','Flask','SQLite'],
      github: 'https://github.com/callmyselfasaarya/Class-Connect',
      live: 'https://classconnect.pythonanywhere.com/',
    },
    {
      title: 'Scorevant',
      description: 'Scorevant is an Web based application for effective handling of the scores of the racket based games such as Tennis, Shuttle, Table-Tennis...',
      image: 'public/images/Scorevant.png',
      technologies: ['React', 'vite', 'TypeScript', 'three.js', 'Express.js','Framer Motion','Tailwind CSS'],
      github: 'https://github.com/callmyselfasaarya/scorevant',
      live: 'https://data-dashboard-demo.netlify.app',
    },
    
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my machine learning and AI projects showcasing deep learning, computer vision, 
            natural language processing, and predictive analytics implementations.
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
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center gap-2 text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors touch-manipulation min-h-[44px]"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  {project.live && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex items-center justify-center gap-2 text-xs sm:text-sm touch-manipulation min-h-[44px]"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </Button>
                  )}
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