import { FadeIn } from '../ui/FadeIn';

const EXPERIENCE = [
  {
    title: 'Senior Frontend Engineer',
    company: 'TechFlow Inc. (2023 - Present)',
    description: 'Led the migration of a legacy dashboard to React 18, improving render performance by 40%. Implemented a custom design system using Tailwind and Radix UI.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Innovate Studio (2020 - 2023)',
    description: 'Developed and maintained scalable microservices using Node.js and PostgreSQL. Built interactive data visualization tools using D3.js and Vue.',
  },
  {
    title: 'B.S. Computer Science',
    company: 'University of Technology (2016 - 2020)',
    description: 'Specialized in Human-Computer Interaction and Distributed Systems. Graduated with honors.',
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      
      <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
          Experience
        </h2>
      </FadeIn>
      
      <div className="max-w-5xl mx-auto flex flex-col">
        {EXPERIENCE.map((item, i) => (
          <FadeIn 
            key={i} 
            delay={i * 0.1} 
            className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] first:border-t"
          >
            <div className="text-[#0C0C0C] font-black leading-none text-[clamp(3rem,10vw,140px)] md:w-1/3 mb-4 md:mb-0">
              0{i + 1}
            </div>
            
            <div className="md:w-2/3 flex flex-col">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2">
                {item.title} <span className="opacity-50 font-light text-xl">| {item.company}</span>
              </h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      
    </section>
  );
};
