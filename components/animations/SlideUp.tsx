import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      {children}
    </motion.div>
  );
};

const VidNexus: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-500">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to AI</h1>
      <h2 className="text-2xl text-orange-300 mb-6">Introducing VidNexus</h2>
      <SlideUp>
        <p className="text-gray-800">
          At AI, we are revolutionizing the way you create videos with cutting-edge technology. 
          VidNexus leverages artificial intelligence to generate stunning, high-quality videos tailored to your needs. 
          Experience seamless video production that is fast, efficient, and easy to use.
        </p>
        <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200">
          Get Started
        </button>
      </SlideUp>
    </div>
  );
};

export default VidNexus;