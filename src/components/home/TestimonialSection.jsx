import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "My baby's sensitive skin has never felt better! The lotion completely eliminated the dryness and irritation. So grateful we found these products!",
    name: "Sarah Johnson",
    role: "Mother of a 6-month-old",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "The massage oil has become our nightly ritual. My baby sleeps peacefully through the night, and I love knowing I'm only using natural ingredients on his skin.",
    name: "Michael Chen",
    role: "Father of twins",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "The diaper rash cream works like magic! Even my pediatrician was impressed with how quickly it healed my daughter's stubborn rash.",
    name: "Priya Patel",
    role: "Mother of a 1-year-old",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto w-max rounded-t-lg mb-4 bg-gradient-to-b from-blue-400 to-green-600 text-white p-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="sm:text-3xl font-bold text-2xl"
            >
              What Parents Say
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Trusted by thousands of parents who care about their baby's delicate skin
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 rounded-lg p-6 shadow-md relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-300"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 