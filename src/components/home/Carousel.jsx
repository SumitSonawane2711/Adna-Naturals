import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/swiperBanner/banner1.jpg",
    title: "Natural Baby Care",
    description: "Gentle and Safe Products for Your Little Ones",
  },
  {
    image: "/swiperBanner/banner2.png",
    title: "Organic Ingredients",
    description: "Made with Love and Care",
  },
  {
    image: "/swiperBanner/banner3.png",
    title: "Clinical Grade",
    description: "Dermatologist Tested for Baby's Sensitive Skin",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentSlide(
      (prev) => (prev + newDirection + slides.length) % slides.length
    );
  }, []);

  useEffect(() => {
      const timer = setInterval(() => paginate(1), 5000);
      return () => clearInterval(timer);
  }, [paginate]);

  return (
    
    <div className="mb-14 mt-4 overflow-hidden ">
      <div className=" min-h-max lg:min-h-[400px] bg-re-300 relative  flex flex-col items-center">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className=" flex w-full justify-center items-center"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            loading="eager"
            fetchPriority="high"
            className=" h-auto w-full max-h-[600px] object-cover "
          />
        </motion.div>

        {/* <button
          onClick={() => paginate(-1)}
          className="hidden md:absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="hidden md:absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button> */}
      </div>
      <div className="absolute left-1/2 my-6 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-blue-400 transform transition-all duration-200 px-4"
                : "bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
