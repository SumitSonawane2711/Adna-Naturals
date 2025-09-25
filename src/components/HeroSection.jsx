import React from "react";
import Layout from "./Layout";
import image from "../images/hero.png";

const HeroSection = ({ title, image }) => {
  return (
    <div className="relative w-full">
      <img src={image} className="w-full" alt="" />
      <div className="absolute inset-0 flex items-center justify-center ">
        <h1 className={`text-center text-xl font-bold text-green-500 px-12 py-2 md:text-2xl md:py ${title ? 'bg-white' : ''}`}>
          {title}
        </h1>

      </div>
    </div>
  );
};

export default HeroSection;

