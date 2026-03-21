import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Code2, GitCommit, Layout, Zap } from 'lucide-react';

const data = [
  { name: 'React', value: 95, color: '#61DAFB' },
  { name: 'Node.js', value: 85, color: '#339933' },
  { name: 'TypeScript', value: 90, color: '#3178C6' },
  { name: 'Python', value: 80, color: '#3776AB' },
  { name: 'AWS', value: 75, color: '#FF9900' },
];

const stats = [
  { label: 'Projects Completed', value: '24+', icon: Layout, color: 'text-blue-500' },
  { label: 'GitHub Commits', value: '1.2k+', icon: GitCommit, color: 'text-purple-500' },
  { label: 'System Uptime', value: '99.9%', icon: Zap, color: 'text-yellow-500' },
  { label: 'Tech Stack', value: '12+', icon: Code2, color: 'text-green-500' },
];

const DashboardStats: React.FC = () => {
  return (
    <section id="dashboard" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Product Analytics</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-time metrics of my building activity, tech stack distribution, and system performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center"
            >
              <stat.icon className={`h-8 w-8 ${stat.color} mb-4`} />
              <div className="text-3xl font-bold mb-1 tracking-tight">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 glass-card p-8 rounded-2xl min-h-[400px]"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-blue-500" />
              Tech Stack Utilization
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#888888', fontSize: 12 }}
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 25, 40, 0.8)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      backdropFilter: 'blur(8px)'
                    }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-8 rounded-2xl flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6">Recent Status</h3>
            <div className="space-y-6 flex-grow">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 animate-pulse" />
                <div>
                  <h4 className="font-medium text-blue-400 text-sm mb-1">Now Building</h4>
                  <p className="text-sm">Scalable Microservices with Go and Kubernetes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 animate-pulse" />
                <div>
                  <h4 className="font-medium text-purple-400 text-sm mb-1">Currently Learning</h4>
                  <p className="text-sm">Advanced System Design & Distributed Caching</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-xs text-gray-500">
                <span>Last updated: 2 hours ago</span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Live
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;
