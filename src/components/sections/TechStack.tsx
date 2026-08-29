import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import SpecularButton from '../ui/SpecularButton';
import { TechIcon } from '../ui/TechIcon';

interface SkillCategory {
  label: string;
  skills: { name: string; icon: string }[];
}

const defaultCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name:"React.js",icon:"react"},
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Framer Motion", icon: "framer" },
      { name: "Three.js", icon: "threedotjs" }
    ]
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express", icon: "express" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "GraphQL", icon: "graphql" }
    ]
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Prisma", icon: "prisma" }
    ]
  },
  {
    label: "DevOps & Deploy",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "amazonaws" },
      { name: "Vercel", icon: "vercel" },
      { name: "Git", icon: "git" }
    ]
  }
];

export const TechStack = ({ 
  categories = defaultCategories
}: { 
  categories?: SkillCategory[]
}) => {
  return (
    <section id="tech-stack" className="w-full bg-[#0C0C0C] relative z-10 px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40} className="w-full flex flex-col justify-center items-center gap-3 sm:gap-4 mb-12 sm:mb-20 md:mb-28">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,8vw,120px)] text-center">
          Tech Stack
        </h2>
        <p className="text-[#D7E2EA]/60 text-sm sm:text-lg md:text-xl font-light tracking-wide uppercase text-center">
          Tools I've shipped production work with
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12 items-center">
        {/* Skill Grid */}
        <div className="w-full flex flex-col gap-8 sm:gap-10">
          {categories.map((category, catIndex) => (
            <FadeIn key={category.label} delay={0.3 + (catIndex * 0.1)} className="w-full">
              <h3 className="text-lg sm:text-xl font-medium text-[#D7E2EA] mb-4 sm:mb-6 tracking-wide border-b border-[#D7E2EA]/10 pb-3 sm:pb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.1 + (skillIndex * 0.05), duration: 0.4 }}
                  >
                    <SpecularButton
                      size="sm"
                      radius={24}
                      tint="#ffffff"
                      tintOpacity={0.06}
                      blur={10}
                      textColor="#D7E2EA"
                      lineColor="#ffffff"
                      baseColor="#525252"
                      intensity={1.2}
                      shineSize={12}
                      shineFade={35}
                      thickness={1.2}
                      speed={0.35}
                      followMouse
                      proximity={200}
                      autoAnimate={false}
                    >
                      <TechIcon name={skill.icon} className="w-4 h-4 sm:w-5 sm:h-5 opacity-90 transition-opacity group-hover:opacity-100" />
                      <span className="text-[#D7E2EA] font-light text-xs sm:text-sm md:text-base">
                        {skill.name}
                      </span>
                    </SpecularButton>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
