import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Web Development',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React & Hooks', level: 10, description: 'Advanced React patterns, custom hooks, context API' },
        { name: 'TypeScript', level: 30, description: 'Type-safe development, advanced types, generics' },
        { name: 'JavaScript ES6+', level: 20, description: 'Modern JS features, async/await, modules, destructuring' },
        { name: 'HTML5/CSS3', level: 50, description: 'Semantic HTML, modern CSS features, flexbox, grid' },
        { name: 'Tailwind CSS', level: 50, description: 'Utility-first CSS, responsive design, custom components' },
        { name: 'Next.js', level: 0, description: 'SSR, SSG, API routes, performance optimization' },
      ],
    },
    {
      title: 'Animation & 3D',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Framer Motion', level: 0, description: 'Complex animations, gesture recognition, layout transitions' },
        { name: 'Three.js', level: 0, description: '3D graphics, WebGL, interactive scenes, shaders' },
        { name: 'GSAP', level: 0, description: 'Timeline animations, morphing, scroll-triggered animations' },
        { name: 'CSS Animations', level: 0, description: 'Keyframes, transforms, transitions, performance optimization' },
        { name: 'Particles.js', level: 0, description: 'Interactive particle systems, canvas animations' },
        { name: 'WebGL', level: 0, description: 'Custom shaders, performance optimization, 3D rendering' },
      ],
    },
    {
      title: 'Backend & Tools',
      gradient: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 0, description: 'Server-side development, API creation, middleware' },
        { name: 'Express.js', level: 0, description: 'RESTful APIs, authentication, real-time features' },
        { name: 'PostgreSQL', level: 20, description: 'NoSQL databases, aggregation, indexing strategies' },
        { name: 'Git & GitHub', level: 50, description: 'Version control, collaborative workflows, CI/CD' },
        { name: 'Docker', level: 0, description: 'Containerization, microservices, deployment automation' },
        { name: 'AWS/Vercel', level: 0, description: 'Cloud deployment, serverless functions, CDN optimization' },
      ],
    },
    {
      title: 'AI & Data Science',
      gradient: 'from-cyan-500 to-violet-500',
      skills: [
        { name: 'Python', level: 40, description: 'Data analysis, automation, web scraping, and scripting' },
        { name: 'Machine Learning', level: 20, description: 'Scikit-learn, TensorFlow basics, data preprocessing' },
        { name: 'Data Analysis', level: 30, description: 'Pandas, NumPy, data visualization, statistical analysis' },
        { name: 'Jupyter Notebooks', level: 40, description: 'Interactive development, data exploration, prototyping' },
        { name: 'SQL', level: 30, description: 'Database queries, data manipulation, relational databases' },
        { name: 'R Programming', level: 10, description: 'Statistical computing, data visualization, research' },
      ],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
      },
    },
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            whileHover={{ 
              scale: 1.05
            }}
          >
            Skills & Expertise
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I continuously expand my skill set to stay current with the latest technologies 
            and best practices in modern web development, focusing on interactive experiences 
            and cutting-edge JavaScript frameworks.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="glass rounded-xl p-4 sm:p-6 dark:bg-gray-800/20 dark:border-gray-700/30 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <motion.h3 
                className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                whileHover={{ scale: 1.05 }}
              >
                {category.title}
              </motion.h3>
              
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <motion.span 
                        className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        animate={hoveredSkill === skill.name ? {
                          scale: [1, 1.05, 1]
                        } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono"
                        animate={hoveredSkill === skill.name ? {
                          color: ["#6B7280", "#3B82F6", "#6B7280"]
                        } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3 mb-2 overflow-hidden">
                      <motion.div
                        className={`h-2 sm:h-3 rounded-full bg-gradient-to-r ${category.gradient} relative`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, 
                          duration: 1.2,
                          ease: 'easeOut'
                        }}
                        whileHover={{ 
                          boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`,
                          filter: "brightness(1.1)"
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={hoveredSkill === skill.name ? {
                            x: ["-100%", "100%"]
                          } : {}}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>
                    
                    <motion.p 
                      className="text-xs text-gray-600 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ height: 0, opacity: 0 }}
                      animate={hoveredSkill === skill.name ? { 
                        height: "auto", 
                        opacity: 1 
                      } : { 
                        height: 0, 
                        opacity: 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;