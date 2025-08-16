import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-500 to-orange-400 text-white px-4">
      <motion.div
        className="text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to AI
      </motion.h1>
      <motion.div
        className="text-2xl mb-8 text-center max-w-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Revolutionizing video creation with cutting-edge AI technology that empowers you to produce stunning videos effortlessly.
      </motion.p>
      <div className="flex space-x-4">
        <motion.div
          className="bg-white text-red-500 font-semibold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Get Started
        </motion.button>
        <motion.div
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Learn More
        </motion.button>
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm">Trusted by industry leaders</p>
        <div className="flex justify-center mt-2 space-x-4">
          <img src="/path/to/trust-logo1.png" alt="Trust Logo 1" className="h-8" />
          <img src="/path/to/trust-logo2.png" alt="Trust Logo 2" className="h-8" />
          <img src="/path/to/trust-logo3.png" alt="Trust Logo 3" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;