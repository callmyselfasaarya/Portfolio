import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy, Globe } from 'lucide-react';

const events = [
  {
    year: '2024',
    title: 'Senior Full Stack Engineer',
    company: 'TechFlow Systems',
    description: 'Leading the development of real-time collaboration tools scaling to 10k+ concurrent users.',
    icon: Briefcase,
    color: 'bg-blue-500',
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Innovate AI',
    description: 'Architected and deployed machine learning pipelines for predictive customer analytics.',
    icon: Globe,
    color: 'bg-purple-500',
  },
  {
    year: '2022',
    title: 'Hackathon Winner',
    company: 'Global CodeFest',
    description: 'First place for building a decentralized identity management system using blockchain.',
    icon: Trophy,
    color: 'bg-yellow-500',
  },
  {
    year: '2021',
    title: 'Computer Science Degree',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in Distributed Systems and Cloud Computing.',
    icon: GraduationCap,
    color: 'bg-green-500',
  },
];

const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-gray-600 dark:text-gray-400">
            From learning the basics to building scalable production systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800 hidden md:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary z-10 hidden md:block" />

                <motion.div className={`w-full md:w-[45%] glass-card p-6 rounded-2xl relative overflow-hidden group`}>
                   <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10 group-hover:opacity-20 transition-opacity ${event.color}`} />
                   
                   <div className="flex items-center gap-4 mb-4">
                     <div className={`p-3 rounded-lg ${event.color} text-white`}>
                       <event.icon size={20} />
                     </div>
                     <div>
                       <span className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-wider">{event.year}</span>
                       <h3 className="text-lg font-bold">{event.title}</h3>
                     </div>
                   </div>
                   
                   <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{event.company}</div>
                   <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                     {event.description}
                   </p>
                </motion.div>
                
                {/* Spacer for MD screens to align with timeline */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
