import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const Card = ({ card }) => {
  const { id, image, name, price, description } = card;
  return (
    <Link
      to={`/productinfo/${id}`}
      className="mx-auto sm:mr-0 group cursor-pointer  lg:mx-auto  transition-all duration-300 border-2 p-2  rounded-lg  hover:bg-pink-100"
    >
      <div className="">
        <img
          src={image}
          alt="face cream image"
          className="w-full aspect-square rounded-lg  transition-all duration-500 "
        />
      </div>
      <div className="mt-5 px-4">
        <p className="mt-2 font-normal text-sm leading-6 text-black">
          ADNA Natural's
        </p>
        <div className="flex items-center justify-between mb-4">
          <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-green-600">
            {name}
          </h6>
          <h6 className="font-semibold text-xl leading-8 text-green-500">
            {price}
          </h6>
        </div>
      </div>
      <Link
        to={`/productinfo/${id}`}
        className="mx-4 mb-4 w-48 flex items-center justify-start gap-1 relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-bold"
      >
        Buy Now <IoIosArrowDropright size={20} />
      </Link>
    </Link>
  );
};

export default Card;
