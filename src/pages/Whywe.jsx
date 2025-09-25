
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import Element from "../components/why we/elements";
import { FaLeaf, FaPaw, FaHandsHelping } from "react-icons/fa";

const commitments = [
  {
    title: "Earth",
    icon: FaLeaf,
    description:
      "At ADNA Naturals, we are dedicated to sustainability and minimizing our impact on the planet through eco-friendly practices.",
  },
  {
    title: "Animals",
    icon: FaPaw,
    description:
      "We stand against animal cruelty and ensure all our products are 100% cruelty-free, never tested on animals.",
  },
  {
    title: "Social Cause",
    icon: FaHandsHelping,
    description:
      "Inspired by Dr. Namrata, Mrs. India, we actively contribute to underprivileged children’s welfare & education fostering a spirit of generosity.",
  },
];

const Whywe = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Why Choose Us - ADNA Naturals</title>
        <meta
          name="description"
          content="Discover why ADNA Naturals is the trusted choice for natural baby care products. Learn about our commitment to quality, safety, and sustainability."
        />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 sm:py-16 lg:py-20  bg-gradient-to-b from-blue-400 via-blue-200 to-green-500"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          Why Choose ADNA Naturals?
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0">
          Crafted by Heritage, Inspired by Tradition
        </p>
      </motion.div>

      <Element />

      {/* core values */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 sm:p-6 lg:p-8 text-center lg:py-12 lg:px-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6">
            Our Core Values
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center my-8 sm:my-10 px-4 max-w-6xl mx-auto">

            {/* Empathy for Earth */}
            <div className="group flex flex-col items-center">
              <div className="p-4 sm:p-6 rounded-lg bg-gradient-to-b from-blue-400 via-blue-200 to-green-500 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 mb-3 mx-auto group-hover:text-blue-600 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-base sm:text-lg lg:text-xl text-gray-800 font-semibold text-center">
                  Empathy for Earth
                </h3>
              </div>
            </div>

            {/* Commitment to Sustainability */}
            <div className="group flex flex-col items-center">
              <div className="p-4 sm:p-6 rounded-lg bg-gradient-to-b from-blue-400 via-blue-200 to-green-500 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 mb-3 mx-auto group-hover:text-blue-600 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4"
                  />
                </svg>
                <h3 className="text-base sm:text-lg lg:text-xl text-gray-800 font-semibold text-center">
                  Commitment to Sustainability
                </h3>
              </div>
            </div>

            {/* Care for Skin */}
            <div className="group flex flex-col items-center">
              <div className="p-4 sm:p-6 rounded-lg bg-gradient-to-b from-blue-400 via-blue-200 to-green-500 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 mb-3 mx-auto group-hover:text-blue-600 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <h3 className="text-base sm:text-lg lg:text-xl text-gray-800 font-semibold text-center">
                  Care for Skin
                </h3>
              </div>
            </div>

          </div>

          <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base lg:text-lg max-w-4xl mx-auto">
            At ADNA Naturals, our core values are the foundation of everything
            we do. We are deeply committed to protecting the planet while
            ensuring the utmost care for your baby's delicate skin. Our products
            are crafted with a zero-tolerance policy for harmful toxins,
            reflecting our dedication to nature's purity and sustainability.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-20 px-4 sm:px-6 lg:px-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          OUR RESPONSIBILITY – OVERALL WELLNESS
        </h2>
        <div className="my-8 sm:my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {commitments.map((commitment, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={index}
              className="text-center p-4 sm:p-6 bg-gradient-to-b from-blue-400 via-blue-200 to-green-500 rounded-lg shadow-lg"
            >
              <commitment.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {commitment.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {commitment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* <Layout>
        <div className="max-w-7xl mx-auto px-4  ">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "All products undergo rigorous safety testing and are dermatologist tested for sensitive skin",
              },
              {
                icon: Leaf,
                title: "100% Natural",
                description:
                  "We use only natural and organic ingredients, carefully selected for their gentle properties",
              },
              {
                icon: Award,
                title: "Quality Assured",
                description:
                  "Our products meet the highest quality standards and are certified by leading authorities",
              },
              {
                icon: Heart,
                title: "Made with Love",
                description:
                  "Each product is crafted with care and attention to detail, ensuring the best for your baby",
              },
              {
                icon: ThumbsUp,
                title: "Parent Approved",
                description:
                  "Trusted by thousands of parents worldwide for their baby's skincare needs",
              },
              {
                icon: Globe,
                title: "Eco-Friendly",
                description:
                  "Committed to sustainable practices and environmentally friendly packaging",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border-b-2 border-green-500"
              >
                <item.icon className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-bold mb-10 text-center">
              Our Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Dermatologist Tested",
                  description:
                    "Certified safe for sensitive skin by leading dermatologists",
                },
                {
                  title: "Organic Certified",
                  description:
                    "Products certified organic by international standards",
                },
                {
                  title: "Quality Certified",
                  description: "Meeting highest quality standards in baby care",
                },
              ].map((cert, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <p className="text-gray-500 text-center text-lg font-semibold leading-7 lg:mb-14 mb-6">
            Choosing the right baby care products is essential for your little
            one's health and well-being. At ADNA Naturals, we understand the
            importance of providing gentle, safe, and effective care for your
            baby's delicate skin.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-4 lg:pb-24 pb-10 border-b border-gray-200 max-w-lg mx-auto md:max-w-3xl lg:max-w-full">
            <div className="p-8 group  hover:rounded-2xl transition-all duration-500 hover:shadow-md cursor-pointer">
              <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                Natural Ingredients
              </h4>
              <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                Our products are crafted with carefully selected natural
                ingredients that are gentle on your baby's skin. We believe in
                harnessing the power of nature to provide nourishing care
                without the use of harsh chemicals or toxins.
              </p>
            </div>
            <div className="p-8 group hover:rounded-2xl transition-all duration-500 hover:shadow-md cursor-pointer">
              <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                Safety and Quality
              </h4>
              <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                Your baby's safety is our top priority. That's why all our
                products undergo rigorous testing and quality control measures
                to ensure they meet the highest safety standards. You can trust
                that our products are safe, effective, and gentle for your
                little one.
              </p>
            </div>
            <div className="px-8 group pt-8 lg:pb-8 pb-4 transition-all duration-500 hover:rounded-2xl hover:shadow-md cursor-pointer md:col-span-2 lg:col-span-1 md:w-1/2 lg:w-full md:mx-auto">
              <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                Environmental Responsibility
              </h4>
              <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                Sustainability is at the core of our brand values. We strive to
                minimize our environmental footprint by using eco-friendly
                packaging materials, sourcing responsibly harvested ingredients,
                and implementing sustainable manufacturing practices
              </p>
            </div>
          </div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-6">
            Join Thousands of Happy Parents
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the difference of truly natural baby care products. Join
            our community of conscious parents who trust ADNA Naturals for
            their little ones.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </motion.button>
        </motion.div>
        </div>

        <div className="xl:max-w-6xl w-auto mx-aut mt-20 xl:px-0 px-10">
        <div className=" bg-gradient-to-l from-green-100 to-green-600 p-12 rounded-2xl ">
          <div className="lg:flex items-center justify-between gap-6">
            <div className="lg:mb-0 mb-10">
              <h3 className="text-white font-manrope lg:text-4xl text-3xl font-semibold leading-10 mb-5">
                trusted partner in your parenting journey
              </h3>
              <p className="text-black text-xl font-normal leading-8">
                Join the thousands of parents who have made the switch to ADNA
                Naturals and experience the difference for yourself.
              </p>
            </div>
            <button className=" h-12 flex items-center justify-center text-white text-lg font-semibold leading-7 gap-2 rounded-full bg-green-900 whitespace-nowrap px-4">
              {" "}
              Send Message <FaCircleArrowRight />
            </button>
          </div>
        </div>
      </div>
      </Layout> */}
    </div>
  );
};

export default Whywe;
