import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="AI Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-red-600 ml-2">AI</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.div
            href="#features"
            className="text-red-600 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Features
          </motion.a>
          <motion.div
            href="#about"
            className="text-red-600 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-red-600 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button className="focus:outline-none text-red-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;