import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy, Globe } from 'lucide-react';

const events = [
  {
    year: '2027',
    title: 'Full Stack Engineer',
    company: 'TBD',
    description: 'Aspiring to be a Full Stack Engineer ready to face the industry requirements and challenges.',
    icon: Briefcase,
    color: 'bg-blue-500',
  },
  {
    year: '2026',
    title: 'Conducted a Workshop on AI and Automation tools',
    company: 'Mahendra Institute of Technology',
    description: 'Conducted a workshop on AI and Automation tools such as N8N, Visily, etc... to help students and faculty to learn about the latest trends in AI and automation.',
    icon: Globe,
    color: 'bg-purple-500',
  },
  {
    year: '2026',
    title: 'JUST PROMPT IT',
    company: 'Mahendra Institute of Technology',
    description: 'Just Prompt It is a competition organized by the members of INNOVERSE to help students and faculty to learn about the need of Prompt Engineering in AI.',
    icon: Globe,
    color: 'bg-purple-500',
  },
  {
    year: '2025',
    title: 'Found INNOVERSE',
    company: 'Mahendra Institute of Technology',
    description: 'Founding a club named INNOVERSE to bring together students with innovative ideas and provide them with a platform to showcase their projects and creativity.',
    icon: Globe,
    color: 'bg-purple-500',
  },
  {
    year: '2024',
    title: 'RUNNER UP - IDEATHON ',
    company: 'Mahendra Institute of Technology',
    description: 'Runner up for developing an Idea of a platform for sports based applications in the intra-institute level',
    icon: Trophy,
    color: 'bg-yellow-500',
  },
  {
    year: '2023',
    title: 'UNDERGRADUATE - CSE(AI & ML)',
    company: 'Mahendra Institute of Technology',
    description: 'Currently pursuing a Bachelor of Engineering in Computer Science and Engineering, focusing on core computer science fundamentals and emerging technologies.',
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
