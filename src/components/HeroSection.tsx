
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Download, Eye, Sparkles } from 'lucide-react';
import Scene3D from './Scene3D';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Data Analyst';
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 300], [0, -150]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Typewriter effect with ES6+
  useEffect(() => {
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    };

    const timer = setTimeout(typeWriter, 150);
    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  // Advanced animation variants using ES6+ features
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: "beforeChildren"
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  // Interactive button handlers with modern JS
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "public/My_Resume.pdf";   // file inside public/
    link.download = "CV.pdf"; // name of the file when downloaded
    link.click();
  };
  

  return (
    <motion.section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ opacity }}
    >
      {/* Enhanced animated background shapes */}
      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        <motion.div 
          className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:mix-blend-screen dark:opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 sm:top-40 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:mix-blend-screen dark:opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 left-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:mix-blend-screen dark:opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      {/* Floating sparkles - hidden on mobile for performance */}
      <AnimatePresence>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute hidden sm:block"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            <Sparkles className="text-blue-400 dark:text-purple-400" size={16} />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left order-2 lg:order-1"
          style={{ y: y1 }}
        >
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <motion.span 
              className="inline-block px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-400/30 text-xs sm:text-sm font-medium mb-4"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(59, 130, 246, 0.5)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              👋 Available for new opportunities
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <motion.span 
              className="gradient-text"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(102, 126, 234, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Aarya
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-blue-500"
              >
                |
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
          >
            I create beautiful, interactive web experiences with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life through 
            innovative JavaScript solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={handleViewProjects}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Eye className="mr-2" size={20} />
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
          className="h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] relative order-1 lg:order-2"
          variants={floatingVariants}
          style={{ y: y1 }}
        >
          <Scene3D />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, color: "#667eea" }}
        style={{ opacity }}
      >
        <ChevronDown size={24} className="sm:w-8 sm:h-8 text-gray-400 dark:text-gray-500 cursor-pointer" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
