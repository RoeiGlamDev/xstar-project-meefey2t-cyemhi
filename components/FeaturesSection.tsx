import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
}

const features: Feature[] = [
    {
        id: 1,
        title: 'Intelligent Video Creation',
        description: 'Leverage AI to generate stunning videos effortlessly, transforming your ideas into reality in minutes.',
        icon: <i className="fas fa-video text-orange-500 text-3xl"></i>,
    },
    {
        id: 2,
        title: 'Automated Editing',
        description: 'Our AI technology automates the editing process, ensuring high-quality results without the hassle.',
        icon: <i className="fas fa-edit text-red-500 text-3xl"></i>,
    },
    {
        id: 3,
        title: 'Customizable Templates',
        description: 'Choose from a variety of modern templates that can be tailored to fit your unique vision and style.',
        icon: <i className="fas fa-th-large text-orange-500 text-3xl"></i>,
    },
    {
        id: 4,
        title: 'Real-Time Collaboration',
        description: 'Collaborate with your team in real-time, making video production a seamless experience powered by AI.',
        icon: <i className="fas fa-users text-red-500 text-3xl"></i>,
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto text-center">
                <motion.div 
                    className="text-4xl font-bold text-red-600 mb-10"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    Discover AI Features
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map(feature => (
                        <motion.div 
                            key={feature.id} 
                            className="bg-gray-100 p-5 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-red-600">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;