import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Heading } from "../components/heading";
import { SubHeading } from "../components/subheading";
import {
  Baby,
  Bath,
  Droplet,
  Heart,
  Home,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const babyCareTips = [
  {
    id: 1,
    title: "Mother's Instinct is Your Superpower",
    content:
      "When it comes to your baby, your intuition is one of the most powerful tools you have. Passed down from generations of nurturing women, it's often more accurate than any book or blog. Trust it - it's the foundation of ADNA Naturals.",
    icon: <Heart className="w-8 h-8 md:w-10 md:h-10 text-pink-500" />,
    color: "bg-pink-50",
    borderColor: "border-pink-200",
    image: "assets/babycare-tips/01.jpeg",
  },
  {
    id: 2,
    title: "Bond Through the Power of Touch",
    content:
      "A daily massage does more than just relax your baby - it builds connection, boosts circulation, and aids digestion. Use ADNA Naturals'  Herbal Baby Massage Oil, made with multi time-honored herbs like Eladi Thailam, Olive Oil and Nalpamaradhi that have soothed generations. Because comfort, after all, starts with a mother's hands.",
    icon: <Droplet className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />,
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    image: "assets/babycare-tips/02.jpeg",
  },
  {
    id: 3,
    title: "Bath Time is Connection Time",
    content:
      "A soothing bath isn't just about cleanliness. it's a calm, bonding moment for both of you. Cleanse gently with ADNA Naturals' Moisturizing Baby Body Wash and Deep Nourishing Baby Shampoo, made with natural ingredients that are safe, tear-free, and oh-so-soft.",
    icon: <Bath className="w-8 h-8 md:w-10 md:h-10 text-cyan-500" />,
    color: "bg-cyan-50",
    borderColor: "border-cyan-200",
    image: "assets/babycare-tips/Bath_time_is_connection _time.png",
  },
  {
    id: 4,
    title: "Keep Their Skin Soft, Naturally",
    content:
      "A baby's skin is as delicate as a mother's heart. After bath time, nourish and lock in moisture with ADNA Naturals' Milky Soft Baby Lotion - a blend inspired by generations of mothers who trusted nature for skincare.",
    icon: <Baby className="w-8 h-8 md:w-10 md:h-10 text-indigo-500" />,
    color: "bg-indigo-50",
    borderColor: "border-indigo-200",
    image: "assets/babycare-tips/Adna_Moisturizer.png",
  },
  {
    id: 5,
    title: "Simple is Safe – Head to Toe",
    content:
      "You don't need a shelf full of products. ADNA Naturals' Nourishing Baby Head-to-Toe Wash is a gentle, all-in-one solution that cleanses without harsh chemicals—just nature's goodness from head to toe.",
    icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" />,
    color: "bg-emerald-50",
    borderColor: "border-emerald-200",
    image: "assets/babycare-tips/04.jpeg",
  },
  {
    id: 6,
    title: "Feeding Cues Are Everything",
    content:
      "Responsive feeding, whether breast or bottle, is a tradition passed down through families. Let your baby guide you - you'll build trust, security, and a natural rhythm.",
    icon: <Heart className="w-8 h-8 md:w-10 md:h-10 text-red-500" />,
    color: "bg-red-50",
    borderColor: "border-red-200",
    image: "assets/babycare-tips/05.jpeg",
  },
  {
    id: 7,
    title: "Comfort in Clothing = Comfort in Body",
    content:
      "Dress your baby in breathable fabrics like soft cotton. Layer light, avoid overheating, and let comfort lead - just as mothers always have.",
    icon: <Baby className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />,
    color: "bg-orange-50",
    borderColor: "border-orange-200",
    image: "assets/babycare-tips/01.jpeg",
  },
  {
    id: 8,
    title: "Soothe Tiny Tummies the Gentle Way",
    content:
      "For gas, fussiness, or minor tummy troubles like indigestion or constipation, bloating or acid reflux, try a warm rub and ADNA Naturals' Tummy Roll-On - a grandmother-approved remedy made modern with essential oils, helping your little one feel calm and content.",
    icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />,
    color: "bg-yellow-50",
    borderColor: "border-yellow-200",
    image: "assets/babycare-tips/tummy_roll_on.png",
  },
  {
    id: 9,
    title: "Protection Beyond the Diaper",
    content:
      "ADNA Naturals' Baby Diaper Rash Cream does more than prevent rashes - it doubles up as a gentle mosquito and insect repellent, prevents skin infections and fungal infections and also helps prevent sunburns offering your baby an extra layer of safety. Because comfort and protection go hand in hand.",
    icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-green-500" />,
    color: "bg-green-50",
    borderColor: "border-green-200",
    image: "assets/babycare-tips/Diaper_rash_cream.png",
  },
  {
    id: 10,
    title: "Falls Are Just Tiny Steps Forward",
    content:
      "As your baby learns to crawl, stand, and walk - bumps and bruises are part of growing. ADNA Naturals' Baby Herbal Relief Balm is a nurturing solution for those little moments. Growth comes with tumbles, and we're here for it - naturally.",
    icon: <Baby className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />,
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    image: "assets/babycare-tips/falls_are_just_tiny_steps.png",
  },
  {
    id: 11,
    title: "Calm Begins at Home",
    content:
      "A peaceful space soothes both baby and mother. Keep the lights low, sounds soft, and scents familiar to mirror the cozy womb-like environment that comforts your little one.",
    icon: <Home className="w-8 h-8 md:w-10 md:h-10 text-teal-500" />,
    color: "bg-teal-50",
    borderColor: "border-teal-200",
    image: "assets/babycare-tips/03.jpeg",
  },
  {
    id: 12,
    title: "Celebrate the Journey, Not Just Milestones",
    content:
      "There's no one-size-fits-all in motherhood. Lean on your instincts, cherish the small wins, and know that most mothers have always looked to their mothers for guidance—just like we did. That's how Adna Naturals was born - out of a lineage of love, wisdom, and unwavering care.",
    icon: <Star className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />,
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    image: "assets/babycare-tips/celebrate_the_journey.png",
  },
];

export default function Blogs() {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("/generated/blogs.json")
      .then((r) => r.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((e) => {
        setError("Failed to load blogs");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="py-20 text-center">Loading...</div>;
  if (error)
    return <div className="py-20 text-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blog - ADNA Naturals</title>
        <meta
          name="description"
          content="Read tips, guides, and Blogs from ADNA Naturals."
        />
        <link rel="canonical" href={`https://adnanaturals.com/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - ADNA Naturals" />
        <meta
          property="og:description"
          content="Read tips, guides, and stories from ADNA Naturals."
        />
        <meta property="og:url" content="https://adnanaturals.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - ADNA Naturals" />
        <meta
          name="twitter:description"
          content="Read tips, guides, and stories from ADNA Naturals."
        />
      </Helmet>

       <section className="text-center px-4 py-16 bg-gradient-to-b from-blue-400 via-blue-200 to-green-500">
        <Heading>Our Blogs</Heading>
        <SubHeading>
          Explore helpful articles, tips, and insights for modern parents.
        </SubHeading>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}`}
              className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
            >
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                <img
                  src={
                    b.frontmatter?.image || "/assets/products/ProductFamily.jpg"
                  }
                  alt={b.frontmatter?.title || "Blog thumbnail"}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold line-clamp-2">
                  {b.frontmatter?.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {b.frontmatter?.description}
                </p>
                {b.frontmatter?.date && (
                  <p className="mt-3 text-xs text-gray-500">
                    {b.frontmatter.date}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className=""
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
          Baby Care Tips
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0 text-center">
          Lovingly curated by ADNA Naturals – crafted by a
          mother-daughter-paternal uncle's trio where a grandmother's intuition
          meets a mother's caring perspective.
        </p>
      </motion.div> */}
      
      {/* <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {babyCareTips.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-lg border ${tip.borderColor} ${tip.color} p-5 shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex justify-center mb-4  border-2 border-white h-[300px] bg-whit-400 rounded-lg overflow-hidden">
                  <img
                    src={tip.image}
                    alt="babycare tips"
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                <div className="flex items-center my-3">
                  {tip.icon}
                  <h3 className="ml-3 text-lg md:text-xl font-semibold text-gray-800 leading-tight">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  {tip.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Closing Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 rounded-full bg-green-200 flex items-center justify-center">
            <Baby className="w-12 h-12 md:w-16 md:h-16 text-green-700" />
          </div>
          <p className="text-base md:text-lg text-gray-700 italic mb-6">
            "There's no 'one-size-fits-all' in motherhood. Lean on your
            instincts, cherish the small wins, and know that most mothers have
            always looked to their mothers for guidance - just like we did.
            That's how ADNA Naturals was born - out of a love, wisdom and
            unwavering care."
          </p>
          <p className="text-green-700 font-medium">
            Dr. Aarti Tolia, Dr. Namrata Shah & Mr. Tolia
          </p>
        </div>
      </section>
    </div>
  );
}
