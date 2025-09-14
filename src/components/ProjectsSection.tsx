<<<<<<< HEAD

import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Image Classification CNN',
      description: 'A deep convolutional neural network built with TensorFlow for classifying images across 1000+ categories. Achieved 92% accuracy on ImageNet validation set with custom data augmentation techniques.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      technologies: ['TensorFlow', 'Python', 'OpenCV', 'NumPy'],
      github: '#',
    },
    {
      title: 'Natural Language Sentiment Analyzer',
      description: 'Advanced sentiment analysis model using BERT transformers and attention mechanisms. Processes social media data to classify emotions and sentiment with 94% accuracy across multiple languages.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['PyTorch', 'Transformers', 'BERT', 'Hugging Face'],
      github: '#',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Machine learning pipeline for time series forecasting and anomaly detection. Uses LSTM networks and ensemble methods to predict market trends and identify unusual patterns in real-time data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Scikit-learn', 'Pandas', 'LSTM', 'Plotly'],
      github: '#',
    },
    {
      title: 'Computer Vision Object Detection',
      description: 'Real-time object detection system using YOLO v8 architecture. Capable of identifying and tracking multiple objects simultaneously with bounding box predictions and confidence scores.',
      image: 'https://www.shutterstock.com/shutterstock/photos/2244549565/display_1500/stock-vector-vector-human-eye-illustration-made-by-halftone-patter-2244549565.jpg',
      technologies: ['YOLO', 'OpenCV', 'PyTorch', 'CUDA'],
      github: '#',
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
              className="group glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
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
                
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <Github size={14} />
                    View Code
                  </Button>
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
=======

import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Image Classification CNN',
      description: 'A deep convolutional neural network built with TensorFlow for classifying images across 1000+ categories. Achieved 92% accuracy on ImageNet validation set with custom data augmentation techniques.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      technologies: ['TensorFlow', 'Python', 'OpenCV', 'NumPy'],
      github: '#',
    },
    {
      title: 'Natural Language Sentiment Analyzer',
      description: 'Advanced sentiment analysis model using BERT transformers and attention mechanisms. Processes social media data to classify emotions and sentiment with 94% accuracy across multiple languages.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['PyTorch', 'Transformers', 'BERT', 'Hugging Face'],
      github: '#',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Machine learning pipeline for time series forecasting and anomaly detection. Uses LSTM networks and ensemble methods to predict market trends and identify unusual patterns in real-time data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Scikit-learn', 'Pandas', 'LSTM', 'Plotly'],
      github: '#',
    },
    {
      title: 'Computer Vision Object Detection',
      description: 'Real-time object detection system using YOLO v8 architecture. Capable of identifying and tracking multiple objects simultaneously with bounding box predictions and confidence scores.',
      image: 'https://www.shutterstock.com/shutterstock/photos/2244549565/display_1500/stock-vector-vector-human-eye-illustration-made-by-halftone-patter-2244549565.jpg',
      technologies: ['YOLO', 'OpenCV', 'PyTorch', 'CUDA'],
      github: '#',
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
              className="group glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
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
                
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <Github size={14} />
                    View Code
                  </Button>
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
>>>>>>> cf2fc0f2246e3c1aa52301b9ee3c1de1a35ce2ee
