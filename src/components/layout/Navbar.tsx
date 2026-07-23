import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['About', 'Experience', 'Projects', 'Contact'];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  //   setMobileMenuOpen(false);
  // };

  return (
    <>
      <FadeIn 
        as={motion.nav}
        delay={0}
        y={-20}
        duration={0.8}
        className="absolute top-0 left-0 right-0 z-50 w-full"
      >
        <div className="w-full px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleScroll(e, link)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
          </div>
          
          <button 
            className="md:hidden text-[#D7E2EA] hover:opacity-70 transition-opacity"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </FadeIn>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0C0C0C] flex flex-col p-6"
          >
            <div className="flex justify-end pt-2">
              <button 
                className="text-[#D7E2EA] hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  onClick={(e: any) => handleScroll(e, link)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-medium text-[#D7E2EA] uppercase tracking-wider hover:opacity-70 transition-opacity"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
 