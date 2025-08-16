import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactive elements for the "AI" brand.
 * This hook leverages three.js to render 3D objects that can be used
 * to engage users on the VidNexus website, focusing on AI-generated video technology.
 * 
 * @param {string} modelPath - The path to the 3D model file.
 * @param {Object} options - Options for customizing the 3D interaction.
 * @param {boolean} options.animate - Flag to enable animation on the 3D object.
 * @returns {RefObject<HTMLDivElement>} A ref to attach the 3D canvas.
 */
const use3D = (modelPath: string, options: { animate?: boolean } = {}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { animate = true } = options;

    useEffect(() => {
        // Set up scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Load the 3D model
        const loader = new THREE.GLTFLoader();
        loader.load(modelPath, (gltf) => {
            scene.add(gltf.scene);
            gltf.scene.position.set(0, 0, 0);
        });

        // Set the camera position
        camera.position.z = 5;

        // Animation loop
        const animateScene = () => {
            requestAnimationFrame(animateScene);
            if (animate) {
                // Rotate the model for a dynamic effect
                scene.rotation.y += 0.01;
            }
            renderer.render(scene, camera);
        };
        animateScene();

        // Cleanup on unmount
        return () => {
            renderer.dispose();
            containerRef.current?.removeChild(renderer.domElement);
        };
    }, [modelPath, animate]);

    return containerRef;
};

export default use3D;