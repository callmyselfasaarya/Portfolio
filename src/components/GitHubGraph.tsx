import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const GitHubGraph: React.FC = () => {
  // Simulating GitHub activity squares
  const weeks = 20;
  const daysPerWeek = 7;
  
  const generateLevel = () => Math.floor(Math.random() * 5);
  const getLevelColor = (level: number) => {
    switch(level) {
      case 0: return 'bg-gray-100 dark:bg-gray-900';
      case 1: return 'bg-green-200 dark:bg-green-900/30';
      case 2: return 'bg-green-400 dark:bg-green-700/50';
      case 3: return 'bg-green-500 dark:bg-green-500/70';
      case 4: return 'bg-green-600 dark:bg-green-400';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Github className="h-5 w-5" />
          Open Source Activity
        </h3>
        <span className="text-xs text-gray-500">Last 12 months</span>
      </div>

      <div className="flex gap-1 overflow-x-auto pb-4 no-scrollbar">
        {Array.from({ length: weeks }).map((_, wIndex) => (
          <div key={wIndex} className="flex flex-col gap-1 shrink-0">
            {Array.from({ length: daysPerWeek }).map((_, dIndex) => {
              const level = generateLevel();
              return (
                <motion.div
                  key={dIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (wIndex * 7 + dIndex) * 0.005 }}
                  className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}
                  title={`${level} commits`}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(l => (
              <div key={l} className={`w-3 h-3 rounded-sm ${getLevelColor(l)}`} />
            ))}
          </div>
          <span>More</span>
        </div>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer"
          className="text-xs text-blue-500 hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default GitHubGraph;
