import  { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ZoomIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import products from "../../data/products/products.js";

const SpecialProducts = () => {
  const navigate = useNavigate();

  // Select featured products
  const featuredProductIds = ["008", "003"];
  const featuredProducts = products.filter(product =>
    featuredProductIds.includes(product.id)
  );

  // State to track the active product tab
  const [activeTab, setActiveTab] = useState(0);

  // Image zoom functionality
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  // Handle mouse movement for zoom effect
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;

    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    // Set cursor and background positions
    setCursorPosition({ x: e.clientX - left, y: e.clientY - top });
    setZoomPosition({ x, y });
  };

  return (
    <section className="pb-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto w-max rounded-t-lg my-4  bg-gradient-to-b from-blue-400 to-green-600 text-white p-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="sm:text-3xl font-bold text-2xl"
            >
               Our Special Products

            </motion.h2>
          </div>
         
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Discover our premium collection of baby care products, specially formulated with natural ingredients for your little one's delicate skin.
          </motion.p> */}
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-10">
          {/* Side Tabs - Vertical on desktop, horizontal on mobile */}
          <div className="w-full md:w-1/4 flex flex-col gap-3 mb-4 md:mb-0">
            {featuredProducts.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(index)}
                className={`
                  flex items-center gap-3 p-4 rounded-lg transition-all duration-300
                  ${activeTab === index
                    ? 'bg-blue-400 text-white shadow-lg'
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                  }
                  flex-1 md:flex-none
                `}
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className={`font-semibold text-sm sm:text-base truncate ${activeTab === index ? 'text-white' : 'text-gray-900'}`}>
                    {product.name.split(' ').slice(0, 3).join(' ')}...
                  </h3>
                  <p className={`text-xs ${activeTab === index ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
                    {product.category}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area - Main product view */}
          <div className="w-full md:w-3/4">
            <AnimatePresence mode="wait">
              {featuredProducts.map((product, index) => (
                activeTab === index && (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-xl overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Product Image with Zoom */}
                      <div
                        ref={imageContainerRef}
                        className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden cursor-zoom-in"
                        onMouseEnter={() => setShowZoom(true)}
                        onMouseLeave={() => setShowZoom(false)}
                        onMouseMove={handleMouseMove}
                      >
                        <img
                          src={product.image[0]}
                          alt={product.name}
                          className="w-full h-full object-contain transform  transition-transform duration-500"
                        />

                        {/* Magnifying Glass Lens */}
                        {showZoom && (
                          <div
                            className="absolute w-48 h-48 border-2 border-green-500 rounded-full pointer-events-none z-10 bg-white bg-opacity-10 hidden sm:block"
                            style={{
                              left: `${cursorPosition.x - 100}px`,
                              top: `${cursorPosition.y - 100}px`,
                              boxShadow: '0 0 10px rgba(0,0,0,0.2)'
                            }}
                          >
                            <div
                              className="absolute inset-0 rounded-full overflow-hidden"
                              style={{
                                backgroundImage: `url(${product.image[0]})`,
                                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                backgroundSize: '350%',
                                backgroundRepeat: 'no-repeat'
                              }}
                            />
                          </div>
                        )}

                        <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-2 rounded-br-lg">
                          Featured
                        </div>

                        {/* Zoom indicator */}
                        <div className="absolute bottom-3 right-3 bg-white bg-opacity-80 p-2 rounded-full">
                          <ZoomIn className="w-5 h-5 text-gray-700" />
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                          <div className="flex items-center mb-4">
                            <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                              {product.category}
                            </span>
                            {/* <span className="text-gray-500">
                              ${product.price}
                            </span> */}
                          </div>

                          <p className="text-gray-600 mb-6">{product.description}</p>

                          <div className="space-y-3 mb-8">
                            <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                            <ul className="space-y-2">
                              {product.benefits.slice(0, 3).map((benefit, i) => (
                                <li key={i} className="flex items-start">
                                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  <span className="text-gray-600 text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <button
                          onClick={() => navigate(`/product/${product.slug}`)}
                          className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 w-full sm:w-auto"
                        >
                          <span>Explore Product</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialProducts; 