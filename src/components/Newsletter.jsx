import React from "react";
import { motion } from "framer-motion";
const Newsletter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center bg-green-50 p-8 rounded-lg mt-20"
    >
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mb-6">
        Stay updated with our latest articles, tips, and product announcements.
      </p>
      <motion.div className="flex max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-l-lg border-2 border-r-0 border-green-200 focus:outline-none focus:border-green-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white px-6 py-2 rounded-r-lg hover:bg-green-600 transition-colors"
        >
          Subscribe
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;
