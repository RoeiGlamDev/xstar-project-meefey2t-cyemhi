import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, name, placeholder, required }) => {const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (required && e.target.value.trim() === '') {
      setError(${label} is required.);
    } else {
      setError('');
    }
  };

  return (
    <motion.div
      className="flex flex-col mb-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <label className="text-white text-lg mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
        className={p-2 rounded-md border-2 border-transparent focus:border-orange-500 focus:outline-none transition duration-300 ${
          error ? 'border-red-500' : 'border-white'
        }}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </motion.div>
  );
};

export default Input;