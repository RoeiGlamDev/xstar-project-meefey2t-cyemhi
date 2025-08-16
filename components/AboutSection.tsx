import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', role: 'Co-Founder', expertise: 'AI Research' },
  { name: 'Bob Smith', role: 'CTO', expertise: 'Machine Learning' },
  { name: 'Cathy Lee', role: 'Lead Developer', expertise: 'Software Engineering' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-4xl font-bold mb-6 text-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About AI
        </motion.h2>
        <motion.div
          className="mb-6 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          At AI, we are pioneers in the technology industry, dedicated to transforming the way videos are created using artificial intelligence. Our mission is to empower creators and businesses by harnessing the power of AI to generate high-quality video content effortlessly.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Our mission at AI is to democratize video creation by providing innovative AI tools that streamline the video production process, making it accessible to everyone, from individual creators to large enterprises.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Meet Our Team
        </motion.h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-red-500 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-bold text-xl">{member.name}</h4>
              <p className="text-sm">{member.role}</p>
              <p className="text-sm">{member.expertise}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;