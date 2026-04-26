import React from 'react';
import { motion, useInView } from 'framer-motion';
import Timeline from './about/Timeline';
import FeaturesGrid from './about/FeaturesGrid';

const AboutSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden" ref={ref}>
      <div className="container-standard">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Myself
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm a Computer Science student passionate about Artificial Intelligence and Machine Learning. 
            As a fresher entering the tech industry, I'm excited to apply my knowledge in AI/ML, 
            data science, and modern web technologies to create innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Timeline isInView={isInView} />
          <FeaturesGrid isInView={isInView} />
        </div>
      </div>
    </section>
  );

};

export default AboutSection;
