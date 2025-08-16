import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl font-bold text-red-600">{title}</h2>
        <p className="text-lg text-gray-700 mt-2">{subtitle}</p>
      </motion.div>
      <motion.div
        href={buttonLink}
        className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;