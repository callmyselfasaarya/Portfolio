import React from 'react';
import { motion } from 'framer-motion';
import GitHubGraph from './GitHubGraph';
import VisitorCounter from './VisitorCounter';

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 bg-black/5 dark:bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GitHubGraph />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <VisitorCounter />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
