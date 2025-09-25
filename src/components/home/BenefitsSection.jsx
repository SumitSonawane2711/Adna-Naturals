import React from "react";
import { motion } from "framer-motion";
import { Shield, Leaf, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    id: 1,
    title: "All Natural Ingredients",
    description:
      "Our products use only the purest natural ingredients, carefully sourced and tested for your baby's safety.",
    icon: Leaf,
    color: "bg-green-50 text-green-600 border-green-200",
  },
  {
    id: 2,
    title: "Pediatrician Tested",
    description:
      "All products are rigorously tested and approved by pediatricians for the most delicate skin.",
    icon: Shield,
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    id: 3,
    title: "No Harmful Chemicals",
    description:
      "Free from parabens, sulfates, mineral oils, and other harmful substances that can irritate your baby's skin.",
    icon: Award,
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    id: 4,
    title: "Made With Love",
    description:
      "Each product is created with care and love, just like you would make it for your own baby.",
    icon: Heart,
    color: "bg-pink-50 text-pink-600 border-pink-200",
  },
];

const BenefitsSection = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" text-center">
          
          <div className="mx-auto sm:w-max rounded-t-lg  bg-gradient-to-b from-blue-400 to-green-600 text-white p-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="sm:text-3xl font-bold text-2xl"
            >
              <Link to="/products" className="text-white hover:text-green-100 transition-colors">
                Explore the ADNA Naturals family
              </Link>
            </motion.div>
          </div>

          <img
            src="assets/products/ProductFamily.jpg"
            alt="ProductFamily"
            className="  mx-auto object-fill my-4 "
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
