import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    photo: '/images/john-doe.jpg',
    review: 'AI has transformed our video production process. The automation and precision of their AI-driven tools are game-changers!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: '/images/jane-smith.jpg',
    review: 'Thanks to AI, we can now create stunning videos in a fraction of the time. Their service is efficient and reliable.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Michael Lee',
    photo: '/images/michael-lee.jpg',
    review: 'The AI technology provided by AI has significantly improved our content quality. Highly recommend their services!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-3xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say About AI
        </motion.h2>
        <div className="flex flex-col md:flex-row md:justify-center">
          {testimonials.map(({ id, name, photo, review, rating }) => (
            <motion.div
              key={id}
              className="bg-orange-400 rounded-lg shadow-lg p-6 mx-4 mb-6 transform transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img src={photo} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-600">{name}</h3>
              <p className="text-gray-800 mb-2">{review}</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 15l-5.878 3.09 1.121-6.54L0 6.545l6.545-.953L10 0l2.455 5.592L20 6.545l-5.243 4.995 1.121 6.54L10 15z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;