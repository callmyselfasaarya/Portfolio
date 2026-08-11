import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { FadeIn } from '../ui/FadeIn';

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  images: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    category: 'Platform • Currently Active',
    title: 'Not-A-Student (NAS)',
    description: 'A modern coding practice platform built with an IDE & terminal-native visual identity, custom color token system, and interactive code workbench.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Terminal UI'],
    link: 'https://github.com/callmyselfasaarya/NotAStudent',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1280&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1280&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1280&auto=format&fit=crop'
    ]
  },
  {
    category: 'Fullstack SaaS',
    title: 'InternPanel',
    description: 'Role-based intern management web application with RBAC permissions, secure credential hashing, onboarding workflows, and admin analytics.',
    tags: ['Next.js', 'Prisma', 'MySQL', 'Tailwind CSS', 'RBAC'],
    link: 'https://github.com/callmyselfasaarya',
    images: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1280&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1280&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1280&auto=format&fit=crop'
    ]
  },
  {
    category: 'Fullstack • Real-Time',
    title: 'Scorevant',
    description: 'Real-time racket sports scoring platform with live match tracking, instant score synchronization, court analytics, and tournament management.',
    tags: ['React', 'TypeScript', 'Tailwind', 'NestJS', 'MongoDB', 'Supabase'],
    link: 'https://github.com/callmyselfasaarya',
    images: [
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1280&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=1280&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1280&auto=format&fit=crop'
    ]
  },
  {
    category: 'AI & E-Commerce',
    title: 'Buyzo',
    description: 'AI-powered e-commerce shopping assistant with Gemini 1.5 Flash recommendations, Context/Reducer wishlist engine, and state persistence.',
    tags: ['React', 'Vite', 'Tailwind', 'FastAPI', 'Gemini 1.5'],
    link: 'https://github.com/callmyselfasaarya',
    images: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1280&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0a670fc80782?q=80&w=1280&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1280&auto=format&fit=crop'
    ]
  },
  {
    category: 'Web Performance • SPA',
    title: 'Capsync',
    description: 'High-performance React SPA on Vercel, optimized for ultra-fast FCP via HTML skeleton injection, code splitting, and asset compression.',
    tags: ['React', 'Vercel', 'Skeleton Engine', 'Web Vitals', 'Lazy Loading'],
    link: 'https://github.com/callmyselfasaarya',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1280&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1280&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1280&auto=format&fit=crop'
    ]
  }
];

const Card = ({ project, index, totalCards }: { project: ProjectItem; index: number; totalCards: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  // Scale down older cards slightly based on index
  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={containerRef}
      className="sticky top-20 md:top-28 h-[88vh] w-full flex items-center justify-center pt-4 sm:pt-6"
      style={{
        top: `calc(8vh + ${index * 22}px)`
      }}
    >
      <motion.div 
        style={{ 
          scale: scale,
          transformOrigin: 'top center'
        }}
        className="w-full h-full max-w-7xl mx-auto rounded-[32px] sm:rounded-[44px] md:rounded-[54px] border-2 border-[#D7E2EA]/80 bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col justify-between gap-4 sm:gap-6 shadow-2xl overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[#D7E2EA] font-black text-[clamp(2.2rem,6vw,4.5rem)] leading-none select-none">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-semibold">{project.category}</span>
              <h3 className="text-[#D7E2EA] font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-tight">{project.title}</h3>
            </div>
          </div>
          <LiveProjectButton href={project.link} />
        </div>

        {/* Middle row: Description & Tags */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm">
          <p className="text-[#D7E2EA]/80 max-w-2xl text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="px-2.5 py-1 rounded-full border border-[#D7E2EA]/30 bg-[#D7E2EA]/5 text-[#D7E2EA]/90 text-[10px] sm:text-xs font-mono uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom row: Image grid */}
        <div className="flex-1 flex flex-col md:flex-row gap-3 sm:gap-5 w-full h-full min-h-0">
          {/* Left col */}
          <div className="w-full md:w-[40%] flex flex-col gap-3 sm:gap-5 h-full min-h-0">
            <div className="w-full h-[45%] rounded-[24px] sm:rounded-[32px] overflow-hidden group">
              <img 
                src={project.images[0]} 
                alt={`${project.title} Preview 1`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
              />
            </div>
            <div className="w-full h-[55%] rounded-[24px] sm:rounded-[32px] overflow-hidden group">
              <img 
                src={project.images[1]} 
                alt={`${project.title} Preview 2`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
              />
            </div>
          </div>
          {/* Right col */}
          <div className="w-full md:w-[60%] rounded-[24px] sm:rounded-[32px] overflow-hidden h-full min-h-0 group">
            <img 
              src={project.images[2]} 
              alt={`${project.title} Preview 3`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 px-4 sm:px-8 md:px-10 py-16 sm:py-20 md:py-28">
      <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16 md:mb-20">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
          Projects
        </h2>
      </FadeIn>

      <div className="w-full pb-[15vh]">
        {PROJECTS.map((project, index) => (
          <Card 
            key={index}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

