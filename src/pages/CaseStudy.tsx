import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Shield, Cpu, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectsData: Record<string, any> = {
  'scorevant': {
    title: 'SCOREVANT',
    subtitle: 'Real-time scoring for racket sports',
    image: '/images/Scorevant.png',
    problem: 'Existing scoring apps were either too generic or relied on slow web requests, causing delays during fast-paced matches.',
    approach: 'We built a high-performance React application using WebSockets for sub-100ms latency and a local-first architecture to ensure reliability even with poor connectivity.',
    architecture: 'React + Vite frontend, Node.js + Socket.io backend, and a real-time state synchronization engine.',
    challenges: 'Handling race conditions in score updates and ensuring perfect synchronization between multiple umpires.',
    results: 'Reduced scoring delay by 85% and successfully powered 3 national-level tournaments.',
    tech: ['React', 'TypeScript', 'Socket.io', 'Three.js'],
    github: 'https://github.com/callmyselfasaarya/scorevant',
    demo: 'https://data-dashboard-demo.netlify.app'
  },
  'class-connect': {
      title: 'CLASS-CONNECT',
      subtitle: 'Streamlining educational management',
      image: '/images/ClassConnect.png',
      problem: 'Manual record-keeping in educational institutions was error-prone and time-consuming for faculty.',
      approach: 'Developed a centralized database-driven application with automated reporting and student performance tracking.',
      architecture: 'Flask backend with SQLite, integrated with a clean responsive frontend for easy data entry.',
      challenges: 'Migrating legacy Excel data into a structured relational database while maintaining data integrity.',
      results: 'Improved administrative efficiency by 40% and eliminated 95% of data entry errors.',
      tech: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
      github: 'https://github.com/callmyselfasaarya/Class-Connect',
      demo: 'https://classconnect.pythonanywhere.com/'
  }
};

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData[id || ''];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background pb-20"
    >
      {/* Header Image */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="absolute top-8 left-8">
           <Button 
            variant="outline" 
            className="rounded-full glass-card h-12 w-12 p-0"
            onClick={() => navigate('/')}
           >
             <ArrowLeft size={20} />
           </Button>
        </div>

        <div className="absolute bottom-12 left-8 md:left-24 right-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-medium">{project.subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-24 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-3">
              <Target size={16} />
              The Problem
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-3">
              <Shield size={16} />
              The Approach
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light">
              {project.approach}
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-3">
                <Cpu size={16} />
                Architecture
              </h2>
              <p className="text-lg leading-relaxed text-foreground/70">
                {project.architecture}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-3">
                <Zap size={16} />
                Challenges
              </h2>
              <p className="text-lg leading-relaxed text-foreground/70">
                {project.challenges}
              </p>
            </div>
          </section>

          <section className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/10">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-6">Results</h2>
            <p className="text-2xl md:text-4xl font-bold tracking-tight">
              {project.results}
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
           <div className="glass-card p-8 rounded-3xl sticky top-24">
              <h3 className="font-bold mb-6">Stack & Deliverables</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                 {project.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-lg uppercase tracking-wider">
                      {t}
                    </span>
                 ))}
              </div>

              <div className="space-y-4">
                 <Button className="w-full h-14 rounded-2xl text-lg font-bold" onClick={() => window.open(project.demo, '_blank')}>
                    <ExternalLink className="mr-2" size={18} />
                    View Live
                 </Button>
                 <Button variant="outline" className="w-full h-14 rounded-2xl text-lg font-bold" onClick={() => window.open(project.github, '_blank')}>
                    <Github className="mr-2" size={18} />
                    View Source
                 </Button>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;
