import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Filter, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import products from "../data/products/products.js";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const categories = ["All", "Bath", "Massage", "Skin Care"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [sortBy, setSortBy] = React.useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  );

  const sortedProducts = React.useMemo(() => {
    switch (sortBy) {
      case "price-low":
        return [...filteredProducts].sort(
          (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
        );
      case "price-high":
        return [...filteredProducts].sort(
          (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
        );
      case "rating":
        return [...filteredProducts].sort((a, b) => b.rating - a.rating);
      case "newest":
        return [...filteredProducts].sort(
          (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
        );
      case "name-az":
        return [...filteredProducts].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      case "name-za":
        return [...filteredProducts].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      default:
        return filteredProducts;
    }
  }, [filteredProducts, sortBy]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen bg-blue-100">
      <Helmet>
        <title>Natural Baby Care Products Collection - ADNA Naturals</title>
        <meta
          name="description"
          content="Explore ADNA Naturals' complete range of natural and organic baby care products. Discover gentle formulations crafted specifically for your baby's delicate skin."
        />
        <meta
          name="keywords"
          content="baby skincare products, natural baby bath products, organic baby lotion, baby massage oil, ADNA Naturals collection"
        />
        <link rel="canonical" href="https://adnanaturals.com/products" />
        <meta
          property="og:title"
          content="Natural Baby Care Products Collection - ADNA Naturals"
        />
        <meta
          property="og:description"
          content="Explore our complete range of natural and organic baby care products. Gentle formulations crafted specifically for your baby's delicate skin."
        />
        <meta property="og:url" content="https://adnanaturals.com/products" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Natural Baby Care Products Collection - ADNA Naturals"
        />
        <meta
          name="twitter:description"
          content="Explore our complete range of natural and organic baby care products. Gentle formulations crafted specifically for your baby's delicate skin."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-blue-400 via-blue-200 to-green-500"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
          Our Products
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-800 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0">
          Discover our range of natural baby care products, carefully crafted
          for your little one's delicate skin.
        </p>
      </motion.div>

      <Layout>
        <div className="max-w-7xl mx-auto py-6 sm:py-10 px-3 sm:px-4">
          {/* Mobile filter button */}
          <div className="md:hidden mb-4 flex justify-between items-center">
            <button
              onClick={toggleFilters}
              className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-2"
            >
              {showFilters ? <X size={16} /> : <Filter size={16} />}
              {showFilters ? "Close Filters" : "Filters"}
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-2 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
              <option value="name-az">Name: A-Z</option>
              <option value="name-za">Name: Z-A</option>
            </select>
          </div>

          {/* Mobile filters - shown only when toggled */}
          {showFilters && (
            <div className="md:hidden bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 rounded-full text-xs ${
                      selectedCategory === category
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Desktop filters */}
          <div className="hidden md:flex md:flex-row justify-between mb-8">
            <div className="flex gap-4 mb-0 text-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
              <option value="name-az">Name: A-Z</option>
              <option value="name-za">Name: Z-A</option>
            </select>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 sm:gap-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {sortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
                >
                  <div className="relative overflow-hidden group h-36 sm:h-48">
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                  <div className="p-2 sm:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm text-green-500">
                          {product.category}
                        </span>
                        <div className="flex items-center">
                          {/* <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" /> */}
                          <span className="ml-1 text-xs sm:text-sm text-gray-600">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xs sm:text-base font-semibold mb-1 sm:mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(`/product/${product.slug}`)}
                      className="flex items-center justify-center gap-1 sm:gap-2 bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-green-600 transition-colors text-xs sm:text-sm mt-1 sm:mt-2"
                    >
                      Know More
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Brand Values Section */}
        {/* <div className="max-w-7xl mx-auto my-12 px-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-400 to-green-500 py-4 px-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Why Our Products Stand Out
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6">

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400"
                >
                  <h3 className="font-semibold text-sm sm:text-base mb-2">
                    100% Natural Ingredients
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Our products contain only natural ingredients that are safe
                    for your baby's delicate skin. No harsh chemicals, parabens,
                    or artificial fragrances.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400"
                >
                  <h3 className="font-semibold text-sm sm:text-base mb-2">
                    Pediatrician Tested
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Every product in our range has been rigorously tested and
                    approved by pediatricians to ensure they're gentle and
                    effective for babies.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400"
                >
                  <h3 className="font-semibold text-sm sm:text-base mb-2">
                    Environmental Commitment
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    We're committed to sustainable practices with eco-friendly
                    packaging and responsibly sourced ingredients that respect
                    our planet.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg overflow-hidden h-32 sm:h-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Natural ingredients"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-lg overflow-hidden h-32 sm:h-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1554684765-8f7a84169269?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Baby care"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="col-span-2 rounded-lg overflow-hidden h-32 sm:h-48"
                >
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Happy baby"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-blue-50 p-4 sm:p-6 border-t border-blue-100"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-0">
                  <span className="font-semibold">ADNA Naturals:</span> Gentle
                  care for your baby's delicate skin, crafted with love and
                  natural ingredients.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 text-white px-4 py-2 rounded-md text-xs sm:text-sm flex items-center gap-2"
                  onClick={() => navigate("/about")}
                >
                  Learn Our Story
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div> */}

        {/* Product Usage Tips Section */}
        {/* <div className="max-w-7xl mx-auto my-12 px-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-md p-4 sm:p-6"
          >
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-center text-gray-800">
              How to Get the Most from Our Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-sm p-3 sm:p-4 flex flex-col items-center text-center"
              >
                <div className="bg-blue-100 rounded-full p-2 sm:p-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">
                  Read Instructions
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Always read product instructions before use. Each formula is
                  designed for specific purposes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm p-3 sm:p-4 flex flex-col items-center text-center"
              >
                <div className="bg-green-100 rounded-full p-2 sm:p-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">
                  Test First
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Always test new products on a small area of your baby's skin
                  before full application.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-lg shadow-sm p-3 sm:p-4 flex flex-col items-center text-center"
              >
                <div className="bg-purple-100 rounded-full p-2 sm:p-3 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">
                  Daily Routine
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Incorporate our products into your daily care routine for the
                  best results.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div> */}
      </Layout>
    </div>
  );
};

export default Products;
