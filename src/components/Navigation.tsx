import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/callmyselfasaarya', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/aaryuah', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aarya-lekshmanan/', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];
  
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const offset = isMobile ? 80 : 0;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass backdrop-blur-lg border-b border-white/20 dark:border-gray-800/20 py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-standard">
        <div className="flex justify-between items-center relative">
          <motion.div
            className="text-xl sm:text-2xl font-bold gradient-text tracking-tighter shrink-0"
            whileHover={{ scale: 1.02 }}
          >
            Aarya Lekshmanan
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors relative cursor-pointer text-sm font-medium uppercase tracking-widest"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Social Links & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-3 lg:space-x-4">
            <div className="h-4 w-px bg-gray-200 dark:bg-gray-800 mx-2" />
            <ThemeToggle />
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                onClick={social.href.startsWith('#') ? (e) => {
                  e.preventDefault();
                  handleNavClick(social.href);
                } : undefined}
                className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors p-2"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;