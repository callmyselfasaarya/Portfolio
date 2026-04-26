import React, { useState } from 'react';
import { motion, useInView, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Globe, Palette, Database, Cpu, Layout, Layers, Terminal, FlaskConical } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  gradient: string;
  skills: Skill[];
}

const SkillCard: React.FC<{ category: SkillCategory; index: number; isInView: boolean }> = ({ category, index, isInView }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredSkill(null);
  };

  const Icon = category.icon;

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative glass-card rounded-2xl p-8 group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="flex flex-col items-center mb-8"
      >
        <div className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
          {category.title}
        </h3>
      </div>
      
      <div className="space-y-6" style={{ transform: "translateZ(30px)" }}>
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skill.name}
            className="group/skill cursor-pointer"
            onMouseEnter={() => setHoveredSkill(skill.name)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-semibold transition-colors duration-300 ${hoveredSkill === skill.name ? 'text-primary' : 'text-foreground/80'}`}>
                {skill.name}
              </span>
              <span className="text-xs font-mono opacity-60">
                {skill.level}%
              </span>
            </div>
            
            <div className="w-full bg-secondary/30 rounded-full h-1.5 overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ 
                  delay: index * 0.1 + skillIndex * 0.05 + 0.5, 
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
            </div>
            
            <AnimatePresence>
              {hoveredSkill === skill.name && (
                <motion.p 
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  className="text-xs text-muted-foreground leading-relaxed overflow-hidden"
                >
                  {skill.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Web Core',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'React (Next.js)', level: 85, description: 'Advanced patterns, Server Components, and Hooks architecture' },
        { name: 'TypeScript', level: 80, description: 'Type safety, generics, and complex state management' },
        { name: 'Tailwind CSS', level: 90, description: 'Utility-first styling, design systems, and responsive layouts' },
        { name: 'JavaScript (ES6+)', level: 85, description: 'Asynchronous logic, functional programming, and modern APIs' },
      ],
    },
    {
      title: 'Animation & 3D',
      icon: Palette,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Framer Motion', level: 75, description: 'Physics-based animations, layout transitions, and gestures' },
        { name: 'Three.js / R3F', level: 50, description: '3D scenes, shaders, and interactive WebGL experiences' },
        { name: 'GSAP', level: 60, description: 'Timeline-based complex animations and scroll-triggered effects' },
        { name: 'CSS Animations', level: 90, description: 'High-performance transforms and keyframe compositions' },
      ],
    },
    {
      title: 'AI & Data',
      icon: FlaskConical,
      gradient: 'from-amber-400 to-orange-600',
      skills: [
        { name: 'Python (ML/AI)', level: 65, description: 'Data processing, neural networks with PyTorch/TensorFlow' },
        { name: 'Data Visualization', level: 70, description: 'D3.js, Chart.js, and interactive data storytelling' },
        { name: 'SQL & NoSQL', level: 75, description: 'Query optimization, schema design, and data modeling' },
        { name: 'Prompt Engineering', level: 85, description: 'Optimizing LLM outputs for complex RAG pipelines' },
      ],
    },
    {
      title: 'DevOps & Tooling',
      icon: Terminal,
      gradient: 'from-emerald-400 to-teal-600',
      skills: [
        { name: 'Git & Workflow', level: 85, description: 'CI/CD, collaborative branching, and semantic versioning' },
        { name: 'Docker / Vercel', level: 70, description: 'Containerization, edge functions, and cloud deployment' },
        { name: 'Unit Testing', level: 60, description: 'TDD with Vitest, Jest, and Playwright for E2E testing' },
        { name: 'Performance Opt', level: 80, description: 'Web Vitals, lighthouse audits, and code splitting' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-secondary/30 blur-[100px] rounded-full" />
      </div>

      <div className="container-standard relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I craft immersive digital experiences using a modern tech stack focused 
            on performance, scalability, and seamless user interaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title} 
              category={category} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;