import Layout from "../components/Layout";
import Carousel from "../components/home/Carousel.jsx";
import Banner from "../components/home/Banner.jsx";
import Feature_products from "../components/home/Feature_products.jsx";
import SpecialProducts from "../components/home/SpecialProducts.jsx";
import BenefitsSection from "../components/home/BenefitsSection.jsx";
import { Helmet } from "react-helmet-async";


const Home = () => {
 
  return (
    <>
      <Helmet>
        <title>
          ADNA Naturals - Natural Baby Care Products for Delicate Skin
        </title>
        <meta
          name="description"
          content="ADNA Naturals offers premium natural baby care products crafted with love. Safe, gentle, and effective for your baby's delicate skin."
        />
        <meta
          name="keywords"
          content="natural baby products,  baby skin care, ADNA Naturals, baby lotion, baby oil, baby shampoo"
        />
        <link rel="canonical" href="https://adnanaturals.com/" />
        <meta
          property="og:title"
          content="ADNA Naturals - Natural Baby Care Products"
        />
        <meta
          property="og:description"
          content="Premium natural  care products crafted with love. Safe, gentle, and effective for your baby's delicate skin."
        />
        <meta property="og:url" content="https://adnanaturals.com/" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="ADNA Naturals - Natural Baby Care Products"
        />
        <meta
          name="twitter:description"
          content="Premium natural  baby care products crafted with love. Safe, gentle, and effective for your baby's delicate skin."
        />
      </Helmet>
      <Layout>
        <Carousel />
        <Banner />
        {/* Special Featured Products */}
        <SpecialProducts />

        {/* Featured Products */}
        <Feature_products />

        {/* Benefits Section */}
        <BenefitsSection />
        

        {/* Testimonial Section */}
        {/* <TestimonialSection /> */}
      </Layout>
    </>
  );
};

export default Home;
