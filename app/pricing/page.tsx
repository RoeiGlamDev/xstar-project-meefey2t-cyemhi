import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic Plan',
    price: '$29/month',
    features: ['1 AI Video per month', 'Standard Quality', 'Basic Support'],
  },
  {
    title: 'Pro Plan',
    price: '$79/month',
    features: ['5 AI Videos per month', 'High Quality', 'Priority Support'],
  },
  {
    title: 'Enterprise Plan',
    price: '$149/month',
    features: ['Unlimited AI Videos', 'Premium Quality', '24/7 Support'],
  },
];

const FAQ = [
  {
    question: 'What is AI?',
    answer: 'AI stands for Artificial Intelligence, which allows us to create videos using advanced algorithms.',
  },
  {
    question: 'How does VidNexus work?',
    answer: 'VidNexus uses AI technology to generate videos based on user inputs and preferences.',
  },
  {
    question: 'Can I upgrade my plan?',
    answer: 'Yes, you can upgrade your plan anytime from your account settings.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-black">
      <header className="bg-gradient-to-r from-red-600 to-orange-500 p-6 text-center">
        <motion.div
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          AI Pricing Plans
        </motion.h1>
        <p className="text-lg text-white mt-2">Choose the best plan for your AI video needs</p>
      </header>

      <main className="container mx-auto p-6">
        <motion.div
          className="w-full mt-8 border-collapse"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-4">Plan</th>
              <th className="p-4">Price</th>
              <th className="p-4">Features</th>
            </tr>
          </thead>
          <tbody>
            {pricingPlans.map((plan) => (
              <tr key={plan.title} className="hover:bg-orange-100 transition-colors">
                <td className="p-4 border-b">{plan.title}</td>
                <td className="p-4 border-b">{plan.price}</td>
                <td className="p-4 border-b">
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>- {feature}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-red-600">Frequently Asked Questions</h2>
          <div className="mt-4">
            {FAQ.map((item, index) => (
              <div key={index} className="border-b py-2">
                <h3 className="font-semibold text-orange-600">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-red-600 text-white text-center p-4 mt-10">
        <p>&copy; {new Date().getFullYear()} AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PricingPage;