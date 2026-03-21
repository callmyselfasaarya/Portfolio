import React from 'react';
import { motion, useInView } from 'framer-motion';
import Timeline from './about/Timeline';
import FeaturesGrid from './about/FeaturesGrid';

const AboutSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="about" className="container-standard" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" 
          whileHover={{ scale: 1.02 }}
        >
          About Myself
        </motion.h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm a Computer Science student passionate about Artificial Intelligence and Machine Learning. 
          As a fresher entering the tech industry, I'm excited to apply my knowledge in AI/ML, 
          data science, and modern web technologies to create innovative solutions.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Timeline isInView={isInView} />
        <FeaturesGrid isInView={isInView} />
      </div>
    </div>
  );

};

export default AboutSection;
