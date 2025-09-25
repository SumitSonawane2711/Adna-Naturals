import React from "react";
import { MdDescription } from "react-icons/md";

const ReviewCard = ({ reviewdata }) => {
  const { name, image, profession, review } = reviewdata;

  return (
    <div className="border hover:border-none rounded-lg p-4 ease-in duration-300 bg-gradient-to-tr cursor-pointer bg-green-50 hover:shadow-lg">
      
      <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
        <div className="text-center text-gray-600">“{review}”</div>

        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
            <img src={image} loading="lazy" alt="Photo by Radu Florin" className="h-full w-full object-cover object-center" />
          </div>

          <div>
            <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">{name}</div>
            <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
