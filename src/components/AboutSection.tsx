
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
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with modern ES6+ features',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies like Three.js, Framer Motion, and creative solutions',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams using modern development workflows and tools',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Coffee,
      title: 'Dedication',
      description: 'Passionate about continuous learning and improvement in web technologies',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency using latest web standards',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Heart,
      title: 'User Focus',
      description: 'Creating delightful user experiences with interactive animations and smooth transitions',
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
        type: "spring",
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
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            About Me
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate frontend developer with 3+ years of experience creating 
            engaging digital experiences using cutting-edge technologies like React, 
            Three.js, Framer Motion, and modern JavaScript (ES6+).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">My Journey</h3>
            <div className="space-y-8">
              {[
                {
                  year: '2020',
                  title: 'Started Programming',
                  description: 'Fell in love with JavaScript and modern web development, exploring ES6+ features'
                },
                {
                  year: '2022',
                  title: 'First Professional Role',
                  description: 'Joined as a Junior Frontend Developer, working with React and modern tooling'
                },
                {
                  year: '2023',
                  title: 'Specialized in Animations',
                  description: 'Mastered Framer Motion, Three.js, and interactive web experiences'
                },
                {
                  year: '2024',
                  title: 'Present Day',
                  description: 'Senior Frontend Developer creating immersive web applications with cutting-edge technologies'
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
                  <div>
                    <motion.div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <span className="text-sm text-blue-500 font-medium">({item.year})</span>
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
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
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                className={`glass rounded-lg p-4 text-center cursor-pointer transition-all duration-300 dark:bg-gray-800/20 dark:border-gray-700/30 ${
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
                  className={`mx-auto mb-3 w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center`}
                  animate={hoveredFeature === index ? {
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className={feature.color} size={24} />
                </motion.div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white text-sm">
                  {feature.title}
                </h4>
                <motion.p 
                  className="text-xs text-gray-600 dark:text-gray-300"
                  animate={hoveredFeature === index ? {
                    opacity: [0.7, 1, 0.7]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
