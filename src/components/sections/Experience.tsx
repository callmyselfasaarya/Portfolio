import { FadeIn } from '../ui/FadeIn';

const EXPERIENCE = [
  {
    title: 'Junior Frontend Engineer - Intern',
    company: 'Nutz Technovations (2023 - Present)',
    description: 'Developed some of the designs for the company on alias of the personal growth of the ui/ux skills.',
  },
  {
    title: 'Founder and President',
    company: 'Innoverse Club (2024 - 2025)',
    description: 'Organized workshops and Events, fostering a culture of innovation and technical excellence within the college community.',
  },
  {
    title: 'B.E - cse (AI & ml)',
    company: 'Mahendra Institute of Technology (2023 - 2027)',
    description: 'Currently pursuing a Bachelor of Engineering in Computer Science with a specialization in Artificial Intelligence and Machine Learning.',
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="w-full bg-white rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 relative z-20">
      
      <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-20 md:mb-28">
        <h2 className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,10vw,160px)]">
          Experience
        </h2>
      </FadeIn>
      
      <div className="max-w-5xl mx-auto flex flex-col">
        {EXPERIENCE.map((item, i) => (
          <FadeIn 
            key={i} 
            delay={i * 0.1} 
            className="flex flex-col md:flex-row items-start md:items-center py-6 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] first:border-t gap-2 sm:gap-4 md:gap-0"
          >
            <div className="text-[#0C0C0C] font-black leading-none text-[clamp(2.5rem,8vw,140px)] md:w-1/3 mb-2 md:mb-0 opacity-90">
              0{i + 1}
            </div>
            
            <div className="md:w-2/3 flex flex-col">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2vw,2.1rem)] mb-2 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <span>{item.title}</span>
                <span className="opacity-50 font-light text-sm sm:text-lg md:text-xl">| {item.company}</span>
              </h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.5vw,1.25rem)] opacity-70">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      
    </section>
  );
};
