import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Tech Stack', href: 'tech stack' },
    { name: 'Projects', href: 'projects' },
  ];

  const ctaLink = { name: 'WORK WITH ME', href: 'contact' };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'tech stack', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Floating Pill Navbar Container */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-5 sm:px-8 md:px-10 pointer-events-none">
        <FadeIn 
          as={motion.nav}
          delay={0}
          y={-20}
          duration={0.8}
          className="pointer-events-auto w-full max-w-7xl"
        >
          <div className="hidden md:flex items-center justify-between bg-[#161C22]/95 backdrop-blur-xl p-1.5 px-3 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] border border-white/15 transition-all duration-300 w-full">
            {/* Left: Brand Name / Logo */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 font-sans font-black tracking-wider text-xs lg:text-sm text-[#D7E2EA] hover:text-white px-3 py-2 rounded-xl hover:bg-white/5 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AARYA</span>
            </a>

            {/* Center: Nav Links */}
            <div className="flex items-center justify-center gap-1 lg:gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a 
                    key={link.name} 
                    href={`#${link.href}`}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`font-sans font-black uppercase tracking-wider text-xs lg:text-sm px-4 lg:px-6 py-2.5 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-white/15 text-white shadow-inner' 
                        : 'text-[#D7E2EA]/75 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Right: CTA Button */}
            <a 
              href={`#${ctaLink.href}`}
              onClick={(e) => handleScrollTo(e, ctaLink.href)}
              className="bg-[#D7E2EA] text-[#0C0C0C] hover:bg-white hover:text-[#000000] font-sans font-black uppercase tracking-wider text-xs lg:text-sm px-6 py-2.5 rounded-xl border border-white/20 shadow-md transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              {ctaLink.name}
            </a>
          </div>

          {/* Mobile Compact Floating Pill */}
          <div className="md:hidden flex items-center justify-between gap-4 bg-[#161C22]/95 backdrop-blur-xl px-4 py-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/15 w-full mx-auto">
            <span className="font-sans font-black tracking-wider text-xs text-[#D7E2EA] uppercase pl-2">
              PORTFOLIO
            </span>

            <button 
              className="bg-[#D7E2EA] text-[#0C0C0C] p-2 rounded-lg hover:bg-white transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#0C0C0C]/95 backdrop-blur-2xl flex flex-col p-6 sm:p-10"
          >
            <div className="flex justify-between items-center pt-2 pb-6 border-b border-white/10">
              <span className="font-sans text-xs tracking-wider text-[#D7E2EA] uppercase font-black">
                NAVIGATION
              </span>
              <button 
                className="bg-[#D7E2EA] text-[#0C0C0C] p-2 rounded-xl hover:opacity-80 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={22} />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-1 gap-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={`#${link.href}`}
                  onClick={(e: any) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl sm:text-3xl font-sans font-black text-[#D7E2EA] uppercase tracking-wider hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href={`#${ctaLink.href}`}
                onClick={(e: any) => handleScrollTo(e, ctaLink.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4 bg-[#D7E2EA] text-[#0C0C0C] font-sans font-black text-base uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg hover:bg-white transition-all"
              >
                {ctaLink.name}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
