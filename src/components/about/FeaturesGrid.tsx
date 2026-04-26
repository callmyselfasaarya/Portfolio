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
    <div>
      <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">What I Do</h3>
      <motion.div
        variants={featureGridVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 gap-4 sm:gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={featureVariants}
            className={`glass rounded-2xl p-4 sm:p-6 text-center cursor-pointer transition-all duration-300 dark:bg-gray-800/20 dark:border-gray-700/30 flex flex-col items-center justify-center ${
              hoveredFeature === index ? 'shadow-xl -translate-y-1' : ''
            }`}
            onMouseEnter={() => setHoveredFeature(index)}
            onMouseLeave={() => setHoveredFeature(null)}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              rotateX: 2,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className={`mb-4 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center shadow-inner`}
              animate={hoveredFeature === index ? {
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <feature.icon className={feature.color} size={24} />
            </motion.div>
            <h4 className="font-bold mb-2 text-gray-900 dark:text-white text-sm sm:text-base">
              {feature.title}
            </h4>
            <motion.p 
              className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
              animate={hoveredFeature === index ? {
                opacity: 1
              } : { opacity: 0.8 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesGrid;