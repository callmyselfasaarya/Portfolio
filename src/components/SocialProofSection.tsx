import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users, GitBranch, Coffee, Award } from 'lucide-react';

const stats = [
  { icon: GitBranch, label: 'GitHub Commits', value: '500+' },
  { icon: Users,     label: 'Collaborators',  value: '20+'  },
  { icon: Coffee,    label: 'Hours Coded',    value: '1.2k+' },
  { icon: Award,     label: 'Certifications', value: '5+'   },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Senior Developer @ TechCorp',
    avatar: 'PS',
    rating: 5,
    text: 'Exceptional attention to detail and a strong grasp of modern web architecture. Delivered a clean, well-documented codebase ahead of schedule.',
  },
  {
    name: 'Rahul Menon',
    role: 'Project Lead @ OpenStartups',
    avatar: 'RM',
    rating: 5,
    text: 'One of the most self-driven freshers I\'ve worked with. Has a rare ability to bridge design thinking with solid engineering.',
  },
  {
    name: 'Sneha Kapoor',
    role: 'ML Engineer @ DataLabs',
    avatar: 'SK',
    rating: 5,
    text: 'Collaborated on an AI pipeline project — brought fresh ideas and kept the team energized. Already thinking at a senior level.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const SocialProofSection: React.FC = () => {
  return (
    <section id="social-proof" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            By the Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A snapshot of my journey — commitments made, relationships built, and milestones reached.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="glass rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 mb-3 group-hover:bg-blue-500/20 transition-colors">
                <Icon size={20} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {value}
              </p>
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            What People Say
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed text-sm">
            Feedback from teammates, mentors, and collaborators I've had the privilege to work alongside.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="glass rounded-xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300 group"
            >
              {/* Quote icon */}
              <Quote
                size={20}
                className="text-blue-500/50 group-hover:text-blue-500/70 transition-colors"
              />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1 font-light italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SocialProofSection;
