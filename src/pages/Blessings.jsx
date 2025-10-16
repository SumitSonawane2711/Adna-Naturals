import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/1.jpg",
    alt: "Nature Scene 1",
  },
  {
    id: 2,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/2.jpg",
    alt: "Nature Scene 2",
  },
  {
    id: 3,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/3.jpg",
    alt: "Nature Scene 3",
  },
  {
    id: 4,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/4.png",
    alt: "Nature Scene 4",
  },
  {
    id: 5,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/4.jpg",
    alt: "Sample Nature Video",
  },
  {
    id: 6,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/5.png",
    alt: "Sample Nature Video",
  },
  {
    id: 7,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/6.png",
    alt: "Sample Nature Video",
  },
  {
    id: 8,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/7.jpg",
    alt: "Sample Nature Video",
  },
  {
    id: 9,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/7.png",
    alt: "Sample Nature Video",
  },
  {
    id: 10,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/8.jpeg",
    alt: "Sample Nature Video",
  },
  {
    id: 11,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/8.jpg",
    alt: "Sample Nature Video",
  },

  {
    id: 12,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/9.jpeg",
    alt: "Sample Nature Video",
  },
  {
    id: 13,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/9.jpg",
    alt: "Nature Scene 4",
  },

  {
    id: 14,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/10.jpg",
    alt: "Sample Nature Video",
  },
  {
    id: 15,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/11.jpeg",
    alt: "Sample Nature Video",
  },
  {
    id: 16,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/11.jpg",
    alt: "Sample Nature Video",
  },
  {
    id: 17,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/12.jpg",
    alt: "Sample Nature Video",
  },
  {
    id: 18,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/13.jpg",
    alt: "Sample Nature Video",
  },
  {
    id: 19,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/14.jpg",
    alt: "Sample Nature Video",
  },
  {
    id: 20,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/15.jpg",
    alt: "Sample Nature Video",
  },
   {
    id: 21,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/16.jpg",
    alt: "Sample Nature Video",
  },
   {
    id: 22,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/17.jpg",
    alt: "Sample Nature Video",
  },
   {
    id: 23,
    type: "image",
    src: "https://adnanaturals.com/assets/blessings/18.jpg",
    alt: "Sample Nature Video",
  },
  {
    id: 24,
    type: "video",
    src: "https://adnanaturals.com/assets/blessings/blessings.mp4",
    alt: "Sample Nature Video",
  },

  {
    id: 25,
    type: "video",
    src: "https://adnanaturals.com/assets/blessings/blessings3.mp4",
    alt: "Sample Nature Video",
  },
  {
    id: 26,
    type: "video",
    src: "https://adnanaturals.com/assets/blessings/adnanatural_blessings.mp4",
    alt: "Sample Nature Video",
  },
  
  
  
];

const Blessings = () => {
  return (
    <div className="min-h-screen ">
      <Helmet>
        <title>Blessings - Natural Skincare Ingredients | ADNA Naturals</title>
        <meta
          name="description"
          content="View our gallery showcasing ADNA Naturals' social impact across African regions — from food distribution to helping schoolchildren and communities in need."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Blessings & Social Work Gallery | ADNA Naturals"
        />
        <meta
          property="og:description"
          content="Explore images of ADNA Naturals' humanitarian work — distributing food, supporting schools, and making a difference in African communities."
        />
        <meta
          property="og:image"
          content="https://adnanaturals.com/assets/blessings/7.png"
        />
        <meta property="og:url" content="https://adnanaturals.com/assets/blessings" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blessings & Social Work Gallery | ADNA Naturals" 
        />
        <meta
          name="twitter:description"
          content="See how ADNA Naturals supports communities through food programs and educational aid." 
        />
        <meta
          name="twitter:image"
          content="https://adnanaturals.com/assets/blessings/7.png"
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4 py-24 bg-gradient-to-b from-blue-400 via-blue-200 to-green-500 "
      >
        <h1 className="text-3xl sm:text:4xl font-bold mb-6">
          Count the Blessings
        </h1>
        <p className="text-gray-800 m-4 text-center">
          <strong>
            Dear ADNA Naturals family member, “Your Purchase Matters -Every
            Purchase Matters”
          </strong>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-4 sm:mx-auto  px-4 sm:px-6 lg:px-8 py-8 "
      >
        <p className="text-gray-800 text-justify font-semibold text-sm sm:text-base md:text-lg text-center">
          The farmers are the backbone of our wellness. The farmers dedication
          to mother earth is the truest form of unconditional love as they work
          tirelessly in the sun and rains, day or night, to reach us
          health-wise, nurturing the very roots of our existence. We believe in
          the same mantra as the farmers do—Grown by Nature, Rooted in Nature.
        </p>
      </motion.div>

      <Layout>
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <video
                    src={item.src}
                    alt={item.alt}
                    controls
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Blessings;
