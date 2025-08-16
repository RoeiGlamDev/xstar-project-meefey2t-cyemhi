import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  const ref = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    const animate = () => {
      if (ref.current) {
        ref.current.position.y = Math.sin(Date.now()  0.001)  0.5;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <mesh ref={ref} position={new THREE.Vector3(...position)}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color={new THREE.Color(1, 0.5, 0)} />
    </mesh>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <FloatingElement position={[0, 1, -5]} />
      <FloatingElement position={[2, 1, -5]} />
      <FloatingElement position={[-2, 1, -5]} />
    </div>
  );
};

const ThreeDScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
};

const Floating3DComponent: React.FC = () => {
  return (
    <div className="relative h-screen bg-white overflow-hidden">
      <ThreeDScene />
      <FloatingElements />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.div
          className="text-5xl font-bold text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to AI
        </motion.h1>
        <motion.div
          className="mt-4 text-2xl text-orange-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Create stunning AI videos with VidNexus
        </motion.p>
        <motion.div
          className="mt-6 px-6 py-3 bg-red-500 text-white rounded hover:bg-orange-500 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Floating3DComponent;