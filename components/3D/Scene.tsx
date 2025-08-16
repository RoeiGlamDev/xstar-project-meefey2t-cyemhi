import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const Scene: React.FC = () => {
  useEffect(() => {
    // Add any necessary setup for three.js here
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold text-red-600 hover:text-orange-500 transition duration-300">
          Welcome to AI
        </h1>
      </motion.div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/ Add your 3D models and interactive elements here /}
        <OrbitControls />
      </Canvas>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-lg text-gray-700"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Creating the future of video with AI technology.
      </motion.p>
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-orange-500 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span>Explore VidNexus</span>
      </motion.div>
    </div>
  );
};

export default Scene;