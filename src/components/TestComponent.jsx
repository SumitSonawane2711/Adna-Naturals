import { useRef, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import "./test.css";
import Layout from "./Layout";
import watchImg300 from "/products/balm/119.jpg";
import watchImg1200 from "/products/balm/116.jpg";

const TestComponent = ({ image }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 ">
        <div className=" bg-red-700 flex gap-4 lg:order-none lg:flex-col overflow-x-auto lg:overflow-x-visible max-h-[60vh] lg:max-h-none">
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
        <div className="  " style={{ position: "relative", width: "500px", height: "100%" }}>
          <div >
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: watchImg300,
                },
                largeImage: {
                  src: watchImg1200,
                  width: 2298,
                  height: 1957,
                },
                enlargedImageContainerStyle: {
                  height: "100%",
                  width: "200%",
                  zIndex: 10,
                  backgroundColor: "white",
                  borderRadius: "0.5rem",
                },
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestComponent;
