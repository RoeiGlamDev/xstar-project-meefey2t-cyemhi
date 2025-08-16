import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-red-600 text-white hover:bg-red-700',
  secondary: 'bg-orange-500 text-white hover:bg-orange-600',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  return (
    <motion.div
      className={`rounded-lg px-4 py-2 transition-all duration-300 ease-in-out ${buttonVariants[variant]`}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={typeof children === 'string' ? children : 'Button'}
    >
      {children}
    </motion.button>
  );
};

export default Button;