import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const titleSets = [
    [
      { icon: "/icon1.png", text: "Dermatologist Approved " },
      { icon: "/icon2.png", text: "Pediatrician Tested " },
      { icon: "/icon3.png", text: "Zero Tolerance to Toxins" },
      { icon: "/icon4.png", text: "Safe on Tender Skin" },
    ],
  ];

  const tagline = "Clinically Tested -  Traditionally Trusted";

  const [currentSet, setCurrentSet] = useState(0);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const cycleTitles = () => {
      setShowTagline(false);

      setTimeout(() => {
        setShowTagline(true);
        setTimeout(() => {
          setCurrentSet((prev) => (prev + 1) % titleSets.length);
        }, 3000);
      }, titleSets[0].length * 2000);
    };

    const interval = setInterval(
      cycleTitles,
      titleSets[0].length * 2000 + 4000
    );
    cycleTitles();

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="mb-2 mt-3 max-w-screen overflow-hidden px-1 h-20 lg:h-16 content-center text-white font-bold bg-gradient-to-r to-green-400 from-green-800">
      {!showTagline ? (
        <div className="flex flex-wrap justify-center gap-4 items-center sm:mx-10">
          {titleSets[currentSet].map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 1.5, duration: 0.5 }}
              className="flex flex-wrap md:flex-row text-xs gap-2 md:text-xl items-center"
            >
              <div className="h-full flex items-center">
                <img
                  src={title.icon}
                  alt="icon"
                  className="h-5 md:h-8 object-contain"
                />
              </div>
              <span>{title.text}</span>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl lg:text-3xl items-center justify-center flex scale-110"
        >
          {tagline}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Banner;
