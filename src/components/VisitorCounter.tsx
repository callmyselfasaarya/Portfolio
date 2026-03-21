import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Radio } from 'lucide-react';

const VisitorCounter: React.FC = () => {
  const [visitors, setVisitors] = useState(1284);
  const [liveNow, setLiveNow] = useState(3);
  const [lastUpdated, setLastUpdated] = useState('2 hours ago');

  useEffect(() => {
    // Simulated live updates
    const interval = setInterval(() => {
      setLiveNow(Math.floor(Math.random() * 5) + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-6 rounded-2xl h-full flex flex-col justify-between">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-500" />
          Product Reach
        </h3>
        <span className="flex items-center gap-1.5 text-xs font-medium text-green-500">
           <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          {liveNow} live now
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <div className="text-4xl font-bold tracking-tighter mb-1">
            {visitors.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-2">
             Total Views
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 flex items-center gap-2">
              <Clock size={14} />
              Last Content Update
            </span>
            <span className="font-medium">{lastUpdated}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 flex items-center gap-2">
              <Radio size={14} />
              API Status
            </span>
            <span className="text-green-500 font-bold">Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
