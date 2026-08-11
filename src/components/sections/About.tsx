import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { ContactButton } from '../ui/ContactButton';

export const About = () => {
  const aboutText = "I am a Full Stack Software Engineer passionate about crafting seamless, high-performance web applications. My journey started with a fascination for how things work under the hood, and evolved into a deep appreciation for elegant design and robust architecture. Code is poetry, and design is the voice. I strive to build products that not only function flawlessly but also delight users at every interaction.";

  return (
    <section id="about" className="relative flex flex-col items-center justify-center min-h-screen px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Moon" 
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain pointer-events-none"
        />
      </FadeIn>
      
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D Object" 
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain pointer-events-none"
        />
      </FadeIn>
      
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="Lego" 
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain pointer-events-none"
        />
      </FadeIn>
      
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D Group" 
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain pointer-events-none"
        />
      </FadeIn>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center max-w-[800px] mx-auto">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>
        
        <div className="mt-10 sm:mt-14 md:mt-16 text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[720px] text-[clamp(1rem,2vw,1.35rem)]">
          <AnimatedText text={aboutText} />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <a href="#contact">
            <ContactButton />
          </a>
        </div>
      </div>
      
    </section>
  );
};
