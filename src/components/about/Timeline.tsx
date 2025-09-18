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
      <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">My Journey</h3>
      <div className="space-y-6 sm:space-y-8">
        {timelineData.map((item, index) => (
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
  );
};

export default Timeline;