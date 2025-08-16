import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-md" />
      <h2 className="text-red-600 text-xl font-bold mt-4">{title}</h2>
      <p className="text-orange-400 text-base mt-2">{description}</p>
    </motion.div>
  );
};

const ExampleUsage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-red-600 text-3xl font-extrabold mb-6">Welcome to AI - VidNexus</h1>
      <p className="text-white text-lg mb-8">
        Create stunning AI-generated videos effortlessly with AI's cutting-edge technology.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="AI Video Creation"
          description="Leverage AI to generate high-quality videos in minutes."
          imageUrl="https://via.placeholder.com/400"
        />
        <Card
          title="AI Video Editing"
          description="Edit videos using advanced AI features for a professional touch."
          imageUrl="https://via.placeholder.com/400"
        />
        <Card
          title="AI Analytics"
          description="Get insights and analytics on your video performance with AI."
          imageUrl="https://via.placeholder.com/400"
        />
      </div>
    </div>
  );
};

export default ExampleUsage;