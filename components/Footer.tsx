import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, socialLinks }) => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <motion.div
            className="text-red-500 text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            {companyName}
          </motion.h2>
          <p className="text-gray-600">
            Innovating the future of video creation with AI technology.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-orange-500 font-semibold">Links</h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <motion.div
                  href="/about"
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.div
                  href="/services"
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Services
                </motion.a>
              </li>
              <li>
                <motion.div
                  href="/contact"
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 md:ml-8">
            <h3 className="text-orange-500 font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;