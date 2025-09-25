import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import products from "../../data/products/products";

const Feature_products = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="content-center pb-12 ">
      <div className="mx-auto w-max rounded-t-lg my-4  bg-gradient-to-b from-blue-400 to-green-600 text-white
        p-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="sm:text-3xl font-bold text-2xl"
        >
          Featured Products
        
        </motion.h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-10"
      >
        {products.slice(0, 6).map((product) => (
          <motion.div
            key={product.id}
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden group">
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-40 sm:h-56 lg:h-64 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
            <div className="p-3 sm:p-4 lg:p-6">
              <h3 className="text-sm sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 line-clamp-1">{product.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">{product.description}</p>
              {/* <p className="text-blue-600 font-bold mb-4">{product.price}</p> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/product/${product.id}`)}
                className="w-full bg-green-500 text-white py-1 sm:py-2 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm"
              >
                Know More
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Feature_products;
