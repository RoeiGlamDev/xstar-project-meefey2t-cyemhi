import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div 
        className="text-4xl font-bold text-red-600 mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact AI
      </motion.h1>

      <motion.div 
        onSubmit={handleSubmit} 
        className="bg-orange-500 p-6 rounded-lg shadow-lg w-full max-w-md"
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">Name</label>
          <input 
            className="w-full p-2 rounded-lg" 
            type="text" 
            id="name" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">Email</label>
          <input 
            className="w-full p-2 rounded-lg"
            type="email" 
            id="email" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="message">Message</label>
          <textarea 
            className="w-full p-2 rounded-lg" 
            id="message" 
            rows={4} 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

      <div className="mt-10 text-center">
        <motion.div 
          className="text-2xl font-semibold text-red-600 mb-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Our Location
        </motion.h2>
        <p className="text-gray-700">123 AI Innovation Lane</p>
        <p className="text-gray-700">Tech City, TC 12345</p>

        <motion.div 
          className="text-2xl font-semibold text-red-600 mt-8 mb-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Business Hours
        </motion.h2>
        <p className="text-gray-700">Monday - Friday: 9 AM - 5 PM</p>
        <p className="text-gray-700">Saturday: 10 AM - 4 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;