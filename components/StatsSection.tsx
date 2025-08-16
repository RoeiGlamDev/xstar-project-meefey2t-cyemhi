import React from 'react';
import { motion } from 'framer-motion';

interface StatsItem {
  title: string;
  value: number;
  description: string;
}

const statsData: StatsItem[] = [
  { title: 'AI Videos Created', value: 1500, description: 'Innovative AI-generated videos' },
  { title: 'Clients Served', value: 300, description: 'Empowering businesses with AI solutions' },
  { title: 'Awards Won', value: 10, description: 'Recognized for excellence in AI technology' },
  { title: 'Active Users', value: 5000, description: 'Thriving community of AI enthusiasts' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-red-600">AI Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-red-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600">{stat.value}</h3>
              <p className="text-lg text-gray-700">{stat.title}</p>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;