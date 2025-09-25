import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { image, title, date, slug } = blog;
  return (
    <div className="w-full h-full">
      <Link
        to={`/blog/${slug}`}
        className="mx-auto group relative flex h-48 max-w-96 flex-col overflow-hidden rounded-lg  hover:shadow-lg md:h-64 xl:h-96 ease-in duration-300 cursor-pointer"
      >
        <img  
          src={image}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>

        <div className="relative mt-auto p-4">
          <span className="block text-sm text-gray-200">{date}</span>
          <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
            {title}
          </h2>

          <span className="font-semibold text-green-300">Read more</span>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
