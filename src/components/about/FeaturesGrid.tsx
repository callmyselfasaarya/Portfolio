import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { features } from './aboutData';
import { featureGridVariants, featureVariants } from './aboutAnimations';

interface FeaturesGridProps {
  isInView: boolean;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ isInView }) => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
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
    </motion.div>
  );
};

export default FeaturesGrid;