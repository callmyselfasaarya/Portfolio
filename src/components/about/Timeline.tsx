import React from 'react';
import { motion, useInView } from 'framer-motion';
import { timelineData } from './aboutData';
import { timelineVariants, timelineItemVariants } from './aboutAnimations';

interface TimelineProps {
  isInView: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ isInView }) => {
  return (
    <motion.div
      variants={timelineVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">My Journey</h3>
      <div className="space-y-8 relative">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            variants={timelineItemVariants}
            className="flex items-start space-x-4 group relative"
            whileHover={{ x: 10 }}
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full z-10"
                whileHover={{ 
                  scale: 1.5,
                  boxShadow: "0 0 20px rgba(102, 126, 234, 0.6)"
                }}
              />
              {index !== timelineData.length - 1 && (
                <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 absolute top-4 bottom-0 left-2 -translate-x-1/2" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-1">
                <h4 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">{item.title}</h4>
                <span className="text-sm text-blue-500 font-semibold">{item.year}</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;