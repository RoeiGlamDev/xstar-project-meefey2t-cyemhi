import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const particles: THREE.Points[] = [];
        const geometry = new THREE.BufferGeometry();
        const count = 5000;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i  3] = (Math.random() - 0.5)  10;
            positions[i  3 + 1] = (Math.random() - 0.5)  10;
            positions[i  3 + 2] = (Math.random() - 0.5)  10;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.1,
            color: new THREE.Color(1, 0.5, 0), // orange
            transparent: true,
            opacity: 0.7,
        });
        
        const particleSystem = new THREE.Points(geometry, material);
        scene.add(particleSystem);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            particleSystem.rotation.y += 0.001;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div ref={mountRef} className="absolute top-0 left-0 w-full h-full">
            <motion.div
                className="flex flex-col items-center justify-center h-full bg-white bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl font-bold text-red-600 hover:text-orange-500 transition duration-300">
                    Welcome to AI
                </h1>
                <p className="mt-4 text-xl text-gray-800">
                    Experience cutting-edge video generation with VidNexus, powered by AI technology.
                </p>
                <button className="mt-8 px-6 py-3 bg-red-600 text-white rounded hover:bg-orange-500 transition duration-300">
                    Get Started
                </button>
            </motion.div>
        </div>
    );
};

export default ParticleBackground;