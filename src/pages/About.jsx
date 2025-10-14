import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heading } from "../components/heading";
import { SubHeading } from "../components/subheading";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Aarti Tolia",
      role: "Researcher, Grandma & Founder (India)",
      edu: [
        "PHD (NLSIU/Bangalore)- Post PhD Research (Florida/USA)",
        "B.COM, LLB. MA, LL.M",
      ],
      image: "assets/about/aartii.jpg",
      bio: "Me as a grandmother was intransigent on nothing less than using those natural baby care ingredients which my mother & grandmother used for me and my kids back then. Picking them wisely, we used that as a blueprint to road map our path to ADNA Naturals. ADNA Naturals is a Bonafide gift for my grandkids and all cute babies.",
    },
    {
      name: "Dr. Namrata Shah",
      role: "Mrs India 2021, Researcher, Mother & Founder (East Africa)",
      edu: [
        "(PhD) Business Administration at University of Dar es Salaam",
        "MBA - Master of Business Administration at United Kingdom",
        "BBA - Bachelor of Business Administration at Mumbai University",
      ],
      image: "assets/about/namrata.jpg",
      bio: "As a passionate researcher, devoted mother, and proud founder of ADNA Naturals, I am dedicated to providing the best for my children and families worldwide. As Mrs. India 2021 and through my global travels, I've tested countless baby skin and hair products for my little one. This journey has driven my pursuit of excellence, creating products as pure and reliable as the love we give our children. Guided by my experiences and inspired by my mother, Dr. Aarti, I founded ADNA Naturals—a brand built on quality, trust, and care, committed to nurturing every step of the way.",
    },
    {
      name: "Mr. Tolia",
      role: "Founder -",
      edu: [""],
      image: "/images/catherine.jpg",
      bio: "We are driven by rich traditional values that guide us on every step to make safe baby skin products, while we proudly implement and upheld the traditional methods, we do take care to evaluate the then authentic practices with the current baby skin needs with the changing environment.",
    },
  ];

 

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          About ADNA Naturals - Our Story and Commitment to Natural Baby Care
        </title>

        <meta
          name="description"
          content="Discover the story behind ADNA Naturals. Founded by experienced researchers and mothers, we're committed to creating safe, natural baby care products inspired by traditional wisdom."
        />

        <meta
          name="keywords"
          content="ADNA Naturals story, natural baby care, founder story, baby skincare mission, traditional baby products"
        />

        <link rel="canonical" href="https://adnanaturals.com/about" />

        <meta
          property="og:title"
          content="About ADNA Naturals - Our Story and Commitment to Natural Baby Care"
        />

        <meta
          property="og:description"
          content="Founded by experienced researchers and mothers, we're committed to creating safe, natural baby care products inspired by traditional wisdom."
        />
        
        <meta property="og:url" content="https://adnanaturals.com/about" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="About ADNA Naturals - Our Story and Commitment to Natural Baby Care"
        />
        <meta
          name="twitter:description"
          content="Founded by experienced researchers and mothers, we're committed to creating safe, natural baby care products inspired by traditional wisdom."
        />
        <meta
          name="twitter:image"
          content="https://adnanaturals.com/assets/products/ProductFamily.jpg"
        />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-400 via-blue-200 to-green-500"
      >
        {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          Crafting Baby Care Products
        </h1> */}
        <Heading>About Us</Heading>
        <SubHeading>Traditional Elegance in Harmony with Contemporary Simplicity</SubHeading>
        
      </motion.div>

      <Layout>
        {/* <HeroSection title="About Us" image={image} /> */}

        <div className="py-14 px-6 md:px-10 lg:px-20">
          <div className="flex flex-col gap-8 ">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-blue-100/20 grid grid-flow-row md:grid-cols-4 gap-10  rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full md:col-span-1 h-full md:h-60 lg:h-72  mx-auto rounded-t md:rounded-l object-cover bg-gray-200 mb-4 md:mb-0 md:mr-6"
                />

                <div className="w-full md:col-span-3 flex p-4 flex-col justify-center text-center md:text-left">
                  <h2 className="text-xl font-semibold text-blue-700">
                    {member.name}
                  </h2>
                  <p className="text-green-600 font-medium">{member.role}</p>
                  <ul className="text-gray-600 mt-2">
                    {member.edu.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p className="text-gray-600 mt-2">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* our story */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-2xl sm:text-3xl font-bold my-6 text-center sm:text-left">
            Our Story
          </h2>
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80"
                alt="Natural baby products"
                className="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-72 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col my-6 sm:my-8 text-justify"
            >
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                As a Grandmother I was very selective and concerned at the birth
                of my Grandchild and wanted to give all that my mother &
                grandmom used for baby care then, but that is simply not
                possible in today's busy world with the busy lifestyle of the
                dynamic young mothers. This made me restless, and the seeds were
                sowed to make our own earth friendly & authentic baby products,
                in a time-honored pattern.
              </p>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                While in the process of carving a niche for ADNA Naturals, me,
                my daughter & Mr. Tolia were very firm & keen on incorporating
                the traditional ingredients and methods of baby care while
                keeping in mind the current baby skin requirements with the
                changing atmosphere & the modern & bustling world. Our strategy
                in building the brand was simple to craft baby safe products
                that not only resonate but also propels our conventional ways.
                Our traditional knowledge embodies a wealth of wisdom and
                experiences of natural ingredients used over millennia from
                direct practices over generations till date.
              </p>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                For more than 18+ months of in-depth research (India/East
                Africa/USA) and looking into every minute details of the
                whereabouts of earth friendly baby skin safe needs, ADNA Natural
                is here. We have clinically tested the products and also are
                using them on our own baby with complete satisfaction.
              </p>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                We thrive to respect & preserve customary baby care practices as
                they are ecologically healthy. What soaks in the skin through
                ADNA Naturals baby products is what the baby will thank the
                mother now and for life
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-4 sm:mx-8 md:mx-16 my-16  content-center"
        >
          <div className="p-4 sm:p-6 lg:p-8 rounded-lg bg-gradient-to-b from-blue-300 via-blue-100 to-green-400">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
            <h2 className="my-4 text-xl sm:text-2xl text-gray-700 font-bold md:mb-6">
              Building Trust in Baby Skincare: Treasuring Traditional Trust
            </h2>
            <p className="text-gray-600 text-sm sm:text-base text-justify">
              Our mission is to preserve & nurture traditional methods of baby
              care by maintaining and making authentic plant based, baby safe
              products that have zero tolerance to toxins. We are thriving to
              raise these standards while cautiously being gentle on the earth
              and motherly to the apple of the eye.
            </p>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 rounded-lg text-center bg-gradient-to-b from-blue-300 via-blue-100 to-green-400 ">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Vision</h2>
            <h2 className="my-4 text-xl sm:text-2xl text-gray-700 font-bold md:mb-6">
              Babies Safety First, the Natural Way
            </h2>
            <p className="text-gray-600 text-sm sm:text-base text-justify">
              At Adna Naturals, we vision preserve & nurture the traditional
              methods of baby skin care routines with plant based and natural
              ingredients ensuring that babies get authentic skin care where we
              prioritize the goodness + wellness of the tender baby skin care
              while promoting sustainability and purity in everything we do. We
              contemplate bridge the gap between the traditional baby care
              methods with the current and future requirements in baby care
              products, evaluating the environmental changes and the baby skin
              needs associated with time.
            </p>
          </div>
        </motion.div>

        {/* commitment */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center my-20 px-20"
        >
          <h2 className="text-3xl font-bold mb-6">
            OUR COMMITMENT – OVERALL WELLNESS{" "}
          </h2>
          <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={index}
                className="text-center p-6 bg-transparent bg-gradient-to-t from-blue-100 to-blue-200 rounded-lg shadow-lg"
              >
                <commitment.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{commitment.title}</h3>
                <p className="text-gray-600">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
        {/*  */}
        {/* <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
              <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
                  Nurturing the Earth and Your Baby
                </h2>
                <p className="mb-8 max-w-md text-gray-400">
                  We invite you to become a part of our global family, where
                  each purchase is a step towards a brighter, greener future for
                  generations to come.
                </p>
                <div className="mt-auto">
                  <Link
                    to={"/products"}
                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
              <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                <img
                  src={earth}
                  loading="lazy"
                  alt="Photo by Dom Hill"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div> */}
        {/*  */}
      </Layout>
    </div>
  );
};

export default About;
