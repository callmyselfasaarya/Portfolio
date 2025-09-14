<<<<<<< HEAD

import React from 'react';
import { motion, useInView } from 'framer-motion';
import Timeline from './about/Timeline';
import FeaturesGrid from './about/FeaturesGrid';

const AboutSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            About Myself
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            I'm a Computer Science student passionate about Artificial Intelligence and Machine Learning. 
            As a fresher entering the tech industry, I'm excited to apply my knowledge in AI/ML, 
            data science, and modern web technologies to create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <Timeline isInView={isInView} />
          <FeaturesGrid isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
=======

import React from 'react';
import { motion, useInView } from 'framer-motion';
import Timeline from './about/Timeline';
import FeaturesGrid from './about/FeaturesGrid';

const AboutSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            About Myself
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            I'm a Computer Science student passionate about Artificial Intelligence and Machine Learning. 
            As a fresher entering the tech industry, I'm excited to apply my knowledge in AI/ML, 
            data science, and modern web technologies to create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <Timeline isInView={isInView} />
          <FeaturesGrid isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
>>>>>>> cf2fc0f2246e3c1aa52301b9ee3c1de1a35ce2ee
