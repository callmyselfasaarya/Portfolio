
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Coffee, Lightbulb, Users, Zap, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Learning modern programming languages like Python, JavaScript, and frameworks',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Lightbulb,
      title: 'AI & ML',
      description: 'Passionate about machine learning algorithms, neural networks, and AI applications',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Eager to work in teams and contribute to open-source projects in AI/ML domain',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Coffee,
      title: 'Learning',
      description: 'Constantly exploring new technologies, research papers, and industry trends',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Applying algorithmic thinking and data structures to solve complex problems',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Heart,
      title: 'Innovation',
      description: 'Building projects that combine creativity with cutting-edge AI technologies',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const timelineItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const featureGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            whileHover={{ 
              scale: 1.05
            }}
          >
            About Me
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            I'm a Computer Science student passionate about Artificial Intelligence and Machine Learning. 
            As a fresher entering the tech industry, I'm excited to apply my knowledge in AI/ML, 
            data science, and modern web technologies to create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">My Journey</h3>
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  year: '2021',
                  title: 'Started Computer Science',
                  description: 'Began my CS journey, discovering programming fundamentals and algorithmic thinking'
                },
                {
                  year: '2022',
                  title: 'Discovered AI & ML',
                  description: 'Fell in love with machine learning concepts, neural networks, and data science'
                },
                {
                  year: '2023',
                  title: 'Built First Projects',
                  description: 'Created machine learning models and web applications using modern frameworks'
                },
                {
                  year: '2024',
                  title: 'Ready for Industry',
                  description: 'Seeking opportunities to apply AI/ML skills in real-world projects and contribute to innovation'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={timelineItemVariants}
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.5,
                      boxShadow: "0 0 20px rgba(102, 126, 234, 0.6)"
                    }}
                  />
                  <div className="flex-1">
                    <motion.div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{item.title}</h4>
                      <span className="text-xs sm:text-sm text-blue-500 font-medium">({item.year})</span>
                    </motion.div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={featureGridVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                className={`glass rounded-lg p-3 sm:p-4 text-center cursor-pointer transition-all duration-300 dark:bg-gray-800/20 dark:border-gray-700/30 ${
                  hoveredFeature === index ? 'scale-105 shadow-2xl' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`mx-auto mb-2 sm:mb-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${feature.bgColor} flex items-center justify-center`}
                  animate={hoveredFeature === index ? {
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className={feature.color} size={20} />
                </motion.div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-gray-900 dark:text-white text-xs sm:text-sm">
                  {feature.title}
                </h4>
                <motion.p 
                  className="text-xs text-gray-600 dark:text-gray-300 leading-tight"
                  animate={hoveredFeature === index ? {
                    opacity: [0.7, 1, 0.7]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
