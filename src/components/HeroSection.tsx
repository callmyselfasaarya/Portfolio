
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye } from 'lucide-react';
import Scene3D from './Scene3D';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Using bezier curve instead of string
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-medium mb-4">
              👋 Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Alex</span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Frontend Developer
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 max-w-lg"
          >
            I create beautiful, interactive web experiences with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Eye className="mr-2" size={20} />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-96 lg:h-[500px] relative"
        >
          <Scene3D />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
