import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.reason) newErrors.reason = 'Contact reason is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitted(true);
      // Handle form submission logic here
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Contact AI</h2>
      <p className="text-gray-700 mb-4">For inquiries about our AI video technology, please fill out the form below.</p>
      <motion.div
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label htmlFor="name" className="block text-gray-600">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            className={border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            className={border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="reason" className="block text-gray-600">Reason for Contact</label>
          <select 
            name="reason" 
            id="reason" 
            value={formData.reason}
            onChange={handleChange}
            className={border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500}
          >
            <option value="">Select a reason</option>
            <option value="Inquiry">General Inquiry</option>
            <option value="Support">Technical Support</option>
            <option value="Partnership">Partnership Opportunities</option>
          </select>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-600">Message</label>
          <textarea 
            name="message" 
            id="message" 
            value={formData.message}
            onChange={handleChange}
            className={border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500}
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button 
          type="submit" 
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
        >
          Send Message
        </button>
      </motion.form>

      {isSubmitted && <p className="text-green-500 mt-4">Thank you for contacting AI! We will get back to you soon.</p>}
      
      <div className="mt-6">
        <h3 className="text-xl font-bold text-red-600">Business Information</h3>
        <p className="text-gray-700">AI Technology Solutions</p>
        <p className="text-gray-700">123 Tech Lane</p>
        <p className="text-gray-700">Innovation City, ST 12345</p>
        <p className="text-gray-700">Business Hours: Mon-Fri 9am - 5pm</p>
      </div>
    </section>
  );
};

export default ContactSection;