import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/ContactButton';
import BlurText from '../ui/BlurText';
import { useLenis } from '../../context/LenisContext';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useLenis();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.1]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full h-screen flex flex-col justify-between overflow-x-clip pt-24 md:pt-32"
    >
      {/* Hero Heading with scroll parallax */}
      <motion.div 
        style={{ y: heroY, opacity }}
        className="flex-1 flex flex-col items-center justify-start mt-6 sm:mt-4 md:-mt-5 px-4 w-full z-20 pointer-events-none"
      >
        <div className="overflow-hidden w-full flex justify-center">
          <BlurText 
            text="HI, I'M AARYA" 
            delay={150} 
            animateBy="words" 
            direction="top" 
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[9vw] md:text-[11vw] lg:text-[13vw]"
          />
        </div>
      </motion.div>

      {/* Hero Portrait with inverse scroll parallax */}
      <motion.div 
        style={{ y: portraitY }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
              alt="Portrait" 
              className="w-full h-auto object-contain pointer-events-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </motion.div>

      {/* Bottom bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[420px]">
            a full stack developer driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
          >
            <ContactButton />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};
