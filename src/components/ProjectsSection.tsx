import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const ProjectsSection: React.FC = () => {
  const isMobile = useIsMobile();
  const projects = [
    {
      title: 'Visual Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Three.js. Features interactive 3D elements, smooth animations, and a clean design showcasing my projects and skills.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/callmyselfasaarya/visual-narrative-01',
      live: 'https://yourportfolio.com',
    },
    {
      title: 'AI-Powered Chat Application',
      description: 'Real-time chat application with AI integration using OpenAI API. Features message history, user authentication, and intelligent responses with a modern, responsive interface.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'OpenAI API', 'MongoDB'],
      github: 'https://github.com//ai-chat',
      live: 'https://ai-chat-demo.vercel.app',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data analysis and visualization. Built with D3.js and React, featuring real-time charts, filtering capabilities, and responsive design for various screen sizes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'TypeScript', 'Chart.js', 'Express.js'],
      github: 'https://github.com/yourusername/data-dashboard',
      live: 'https://data-dashboard-demo.netlify.app',
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication, payment integration, and admin panel. Features product management, order tracking, and secure payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.vercel.app',
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
                      <ExternalLink size={16} />
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