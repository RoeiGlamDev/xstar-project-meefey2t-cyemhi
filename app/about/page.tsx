import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jane Doe',
    position: 'CEO & Co-Founder',
    bio: 'Jane is a visionary leader with over a decade of experience in AI technology and innovation.',
    image: '/images/jane.jpg',
  },
  {
    name: 'John Smith',
    position: 'CTO & Co-Founder',
    bio: 'John is a tech enthusiast and expert in machine learning, driving the technology behind AI.',
    image: '/images/john.jpg',
  },
  {
    name: 'Alice Johnson',
    position: 'Lead Developer',
    bio: 'Alice specializes in video processing and AI algorithms, bringing creativity to technology.',
    image: '/images/alice.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-4xl font-bold text-red-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About AI
        </motion.h1>
        <motion.div
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At AI, we are dedicated to revolutionizing the way videos are created using artificial intelligence. Founded in 2023, we have rapidly grown to become a leader in AI video technology, empowering creators and businesses to produce high-quality content effortlessly.
        </motion.p>
        <motion.div
          className="text-3xl font-semibold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our History
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          AI was born from a passion for technology and a desire to simplify video production. Our journey began with a small team of innovators who believed in the potential of AI to transform creative processes. Today, we are proud to have developed a platform that harnesses cutting-edge AI to streamline video creation.
        </motion.p>
        <motion.div
          className="text-3xl font-semibold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Our Values
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          At AI, we value innovation, collaboration, and integrity. Our mission is to empower users through technology while maintaining a commitment to ethical AI practices.
        </motion.p>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-3xl font-semibold text-red-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet the Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 mb-4" />
                <h3 className="text-xl font-bold text-red-600">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <p className="text-gray-500 mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;