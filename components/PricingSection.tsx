import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter Package',
    price: '$29/month',
    features: [
      'Create up to 5 AI videos per month',
      'Access to basic video templates',
      'Standard resolution output',
      'AI-driven video suggestions',
    ],
  },
  {
    name: 'Professional Package',
    price: '$79/month',
    features: [
      'Create up to 20 AI videos per month',
      'Access to premium video templates',
      'High definition output',
      'Advanced AI analytics',
      'Collaboration tools',
    ],
  },
  {
    name: 'Enterprise Package',
    price: '$149/month',
    features: [
      'Unlimited AI video creation',
      'Custom video solutions',
      '4K resolution output',
      'In-depth AI performance analytics',
      'Dedicated support',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-3xl font-bold text-red-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI Pricing Plans
        </motion.h2>
        <p className="text-gray-600 mb-12">
          Choose the perfect plan to start creating stunning AI videos with AI!
        </p>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-red-100 border border-red-200 rounded-lg shadow-lg m-4 p-6 w-80 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-4">{tier.name}</h3>
              <p className="text-2xl font-bold text-red-600 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;