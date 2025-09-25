import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useEffect } from "react";
import watchImg300 from "/products/balm/118.jpg";
import watchImg1200 from "/products/balm/118.jpg";
import { m } from "framer-motion";

const ImageComponent = ({ image }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="grid gap-4 grid-cols-5 ">
      <div className=" flex gap-4 lg:order-none lg:flex-col overflow-x-auto lg:overflow-x-visible max-h-[60vh] lg:max-h-none">
        {image.map((img, index) => (
          <div
            key={index}
            className={`overflow-hidden object-contain rounded-lg bg-gray-100 cursor-pointer transition-all flex-shrink-0 h-24 w-24 lg:w-auto ${
              selectedImage === index
                ? "border-2 border-green-500"
                : "border border-gray-200"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={img}
              alt={`${name} - view ${index + 1}`}
              className="h-full w-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div
        className="  col-span-4 max-h-full "
        style={{
          position: "relative",
          width: "400px",
          height: "70%",
          backgroundColor: "green",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "70%",
            backgroundColor: "red",
          }}
        >
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: watchImg300,
                width: 300,
                height: 274,
              },
         
              largeImage: {
                src: watchImg1200,
                width: 2800,
                height: 2744,
              },
              enlargedImageContainerStyle: {
                borderRadius: "0.5rem",
                objectFit: "cover",
                objectPosition: "center",
                backgroundColor: "white",
                zIndex: 10,
                width: "200%",
              
              },
              enlargedImageContainerDimensions: {
                width: "170%",
                height: "100%",
              },
              enlargedImageContainerClassName: "absolute",
              enlargedImageClassName: "absolute",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
