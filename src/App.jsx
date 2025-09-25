import { Route, Routes } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop ";
import React, { Suspense, useState } from "react";
import Loading from "./components/Loading";
import BlogPage from "./pages/BlogPage";
const Blogs = React.lazy(() => import("./pages/Blogs"));

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Whywe = React.lazy(() => import("./pages/Whywe"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductInfo = React.lazy(() => import("./pages/ProductInfo"));
const Blessings = React.lazy(() => import("./pages/Blessings"));
const Babycare = React.lazy(() => import("./pages/Babycare"));

export default function App() {

  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <HelmetProvider>
    {/* <LocomotiveScroll
      options={
        {
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          lerp: 0.07
        }
      } 
    /> */}
    <Suspense fallback={<Loading />}>
    <Navbar />
    <main className="pt-20">
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/why" element={<Whywe />} />
        <Route path="/product/:slug" element={<ProductInfo />} />
        <Route path="/blessings" element={<Blessings/>}/>
        <Route path="/babycare-tips" element={<Babycare/>}/>
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </main>
    <Footer />
    </Suspense>

  </HelmetProvider>
  );
   
  
}
