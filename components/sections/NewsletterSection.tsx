import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  onSubmit: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email);
      setEmail('');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold mb-4 text-red-600"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Join the AI Revolution
      </motion.h2>
      <motion.div
        className="text-gray-700 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sign up for our newsletter to receive the latest updates on AI video technology and innovations from VidNexus.
      </motion.p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 p-3 border border-gray-300 rounded-lg mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <motion.div
          type="submit"
          className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          Subscribe
        </motion.button>
      </form>
    </div>
  );
};

export default NewsletterSection;