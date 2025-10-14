import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedArticles = ({ articles }) => {
  if (!Array.isArray(articles)) {
    console.error("articles is not an array:", articles);
    return null;
  }

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          📰 Featured Articles
        </motion.h2>

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="block bg-white text-left rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-100 hover:border-green-600"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 hover:text-green-700">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-4">
                {article.description}
              </p>

              <Link
                to={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold text-md hover:text-blue-600"
              >
                Read more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
