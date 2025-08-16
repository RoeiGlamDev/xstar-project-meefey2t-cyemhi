import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Video Creation',
    description: 'Leverage advanced AI algorithms to create stunning videos effortlessly.',
  },
  {
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing platforms and tools to streamline video production.',
  },
  {
    title: 'Real-Time Analytics',
    description: 'Gain insights into viewer engagement and performance with our real-time analytics dashboard.',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-gradient-to-r from-red-500 to-orange-500 py-20 text-center">
        <motion.div
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to AI - VidNexus
        </motion.h1>
        <motion.div
          className="text-lg text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Create stunning AI-driven videos with ease and efficiency.
        </motion.p>
      </header>

      <section className="py-10 px-5">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-red-500">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-5 text-center">
        <p className="text-sm">&copy; 2023 AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;