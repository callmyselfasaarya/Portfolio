
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders',
    },
    {
      icon: Coffee,
      title: 'Dedication',
      description: 'Passionate about continuous learning and improvement',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate frontend developer with 3+ years of experience creating 
            engaging digital experiences. I love turning complex problems into simple, 
            beautiful, and intuitive designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Started Programming (2020)</h4>
                  <p className="text-gray-600">Fell in love with JavaScript and web development</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">First Professional Role (2022)</h4>
                  <p className="text-gray-600">Joined as a Junior Frontend Developer</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Present Day</h4>
                  <p className="text-gray-600">Senior Frontend Developer with expertise in React, TypeScript, and modern web technologies</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="mx-auto mb-4 text-blue-500" size={32} />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
