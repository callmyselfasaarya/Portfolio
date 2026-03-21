import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

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
        { name: 'React.js', level: 65, description: 'SSR, SSG, API routes, performance optimization' },
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
    },
    

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
    <div id="skills" className="container-standard" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 sm:mb-24"
      >
        <motion.h2 
          className="mb-6"
          whileHover={{ scale: 1.02 }}
        >
          Skills & Expertise
        </motion.h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          I continuously expand my skill set to stay current with the latest technologies 
          and best practices in modern web development, focusing on interactive experiences 
          and cutting-edge JavaScript frameworks.
        </p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={categoryVariants}
            className="glass-card rounded-2xl p-8"
          >
            <motion.h3 
              className={`text-center bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-8`}
              whileHover={{ scale: 1.02 }}
            >
              {category.title}
            </motion.h3>
            
            <div className="space-y-8">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-3">
                    <motion.span 
                      className="text-sm font-semibold tracking-tight transition-colors"
                      animate={hoveredSkill === skill.name ? {
                        color: "#6366f1"
                      } : {}}
                    >
                      {skill.name}
                    </motion.span>
                    <span className="text-xs font-mono opacity-60">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-secondary/50 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3, 
                        duration: 1.5,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    />
                  </div>
                  
                  <AnimatePresence>
                    {hoveredSkill === skill.name && (
                      <motion.p 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-xs text-muted-foreground mt-3 leading-relaxed"
                      >
                        {skill.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

  );
};

export default SkillsSection;