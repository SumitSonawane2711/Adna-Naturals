import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const whyWeData = [
  "Gentle Moisturizing Baby Care",
  "Dermatologist Approved",
  "Pediatric Tested",
  "Suitable For Minor Skin",
  "Non-Irritant",
  "No Tears- Only Smiles",
  "Sulfate Free (SLS/SLES)",
  "No Harmful Preservatives",
  "No Dyes",
  "No Silicones",
  "No Parabens",
  "IFRA Certified Fragrance",
  //   "Clinically Tested",
  //   "Zero Tolerance to Toxins"
];

const cardVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3
    }
  }
};

const Element = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const cardsPerSet = 6;
  const totalSets = Math.ceil(whyWeData.length / cardsPerSet);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [totalSets]);

  const getCurrentCards = () => {
    const startIndex = currentSet * cardsPerSet;
    return whyWeData.slice(startIndex, startIndex + cardsPerSet);
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {getCurrentCards().map((item, index) => (
            <motion.div
              key={`${currentSet}-${index}`} // Unique key for each card in each set
              className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl p-4 sm:p-6 min-h-[70px] flex items-center justify-center cursor-pointer relative overflow-hidden shadow-md hover:shadow-xl"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center z-10">
                <p className="text-blue-900 font-medium text-sm sm:text-base md:text-lg">
                  {item}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 transform hover:-translate-x-full" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Element;