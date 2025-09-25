import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import products from "../data/products/products.js";
import { Helmet } from "react-helmet-async";
import ImageMagnifier from "../components/ImageMagnifier.jsx";

const ProductInfo = () => {
  const { slug } = useParams();
  const productinfo = products.find((product) => product.slug === slug);

  const {
    image,
    name,
    price,
    category,
    description,
    benefits,
    ingredients,
    routines,
  } = productinfo;

  return (
    <section className="bg-blue-50">
      <Helmet>
        <title>{`${name} - ADNA Naturals Natural Baby Care Product`}</title>
        <meta
          name="description"
          content={`${description} Made with natural ingredients and specially formulated for your baby's delicate skin.`}
        />
        <meta
          name="keywords"
          content={`${name}, ${category}, baby care, natural products, ADNA Naturals, ${ingredients.join(
            ", "
          )}`}
        />
        <link rel="canonical" href={`https://adnanaturals.com/product/${slug}`} />
        <meta
          property="og:title"
          content={`${name} - ADNA Naturals Natural Baby Care Product`}
        />
        <meta
          property="og:description"
          content={`${description} Made with natural ingredients and specially formulated for your baby's delicate skin.`}
        />
        <meta
          property="og:url"
          content={`https://adnanaturals.com/product/${slug}`}
        />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={image[0]} />
        <meta
          name="twitter:title"
          content={`${name} - ADNA Naturals Natural Baby Care Product`}
        />
        <meta
          name="twitter:description"
          content={`${description} Made with natural ingredients and specially formulated for your baby's delicate skin.`}
        />
        <meta name="twitter:image" content={image[0]} />
        <meta property="product:price:amount" content={price} />
        <meta property="product:price:currency" content="USD" />
        <meta property="product:category" content={category} />
      </Helmet>

      <Layout>
        {/* <HeroSection title="Product Details" image={heroImage} /> */}
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* images */}
              <ImageMagnifier images={image} />

              <div className=" md:py-0 ">
                <div className="mb-2 md:mb-3">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                    {name}
                  </h2>
                </div>

                {/* Buy from JioMart Button */}
                <div className="mb-4">
                  <div className="my-4">
                    <div className="flex items-end gap-2">
                      <span className="text-xl font-bold text-gray-800 md:text-2xl">
                        ₹{price}
                      </span>
                      {productinfo.mrp && productinfo.mrp > price && (
                        <>
                          <span className="mb-0.5 text-red-500 line-through">
                            ₹{productinfo.mrp}
                          </span>
                          <span className="ml-2 text-green-600 font-semibold text-base">
                            {Math.round(
                              ((productinfo.mrp - price) / productinfo.mrp) *
                                100
                            )}
                            % OFF
                          </span>
                        </>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">
                      MRP Incl. OF ALL TAXES
                    </span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    {/* Amazon */}
                    <a
                      href={productinfo.buyingOptions.amazoneUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-yellow-500 px-6 py-2 text-white font-semibold shadow hover:bg-yellow-600 transition duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-300 active:bg-yellow-700"
                    >
                      {/* Amazon Icon */}
                      <svg
                        xmlns="/amazon.png"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M257.2 162.7c-48.4-1.2-74.3 31-74.3 31V144H104v224h79.1v-123.6c0-32.9 21.4-44.5 40.4-44.5 18.7 0 39.2 11.6 39.2 44.5V368H342V244.2c0-67.8-36.4-81.5-84.8-81.5zM224 32C100.3 32 0 132.3 0 256c0 110.4 82.5 201.4 189.9 217.2 13.9 2.6 19-6 19-13.4 0-6.6-.3-28.5-.4-51.7-77.3 16.8-93.6-37.3-93.6-37.3-12.6-32.1-30.9-40.7-30.9-40.7-25.2-17.2 1.9-16.9 1.9-16.9 27.8 2 42.5 28.6 42.5 28.6 24.7 42.3 64.9 30.1 80.8 23 2.5-17.9 9.7-30.1 17.7-37-61.7-7-126.6-30.9-126.6-137.4 0-30.4 10.8-55.3 28.6-74.7-2.9-7-12.4-35.3 2.7-73.6 0 0 23.4-7.5 76.7 28.5 22.2-6.2 46-9.3 69.7-9.4 23.6.1 47.4 3.2 69.7 9.4 53.2-36 76.5-28.5 76.5-28.5 15.2 38.3 5.7 66.6 2.8 73.6 17.8 19.4 28.5 44.3 28.5 74.7 0 106.8-64.9 130.3-126.7 137.1 10 8.6 18.9 25.7 18.9 51.8 0 37.4-.3 67.6-.3 76.8 0 7.5 5 16.1 19.1 13.4C365.5 457.4 448 366.4 448 256 448 132.3 347.7 32 224 32z" />
                      </svg>
                      Buy on Amazon
                    </a>

                    {/* Flipkart */}
                    <a
                      href={productinfo.buyingOptions.flipKartUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-white font-semibold shadow hover:bg-blue-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-800"
                    >
                      {/* Flipkart Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.4 2C5.1 2 4 3.1 4 4.4v15.2C4 20.9 5.1 22 6.4 22h11.2c1.3 0 2.4-1.1 2.4-2.4V4.4C20 3.1 18.9 2 17.6 2H6.4zM7 5h10v2H7V5zm0 4h10v10H7V9z" />
                      </svg>
                      Buy on Flipkart
                    </a>

                    {/* Jiomart */}
                    {/* <a
                      href={productinfo.buyingOptions.jiomartUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2 text-white font-semibold shadow hover:bg-indigo-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-300 active:bg-indigo-800"
                    >
                      <svg
                        xmlns="/jiomart.svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                      </svg>
                      Buy on Jiomart
                    </a> */}
                  </div>
                </div>

                {/* <div className="mb-6 flex items-center gap-2 text-gray-500">
                  <p>{description}</p>
                </div> */}

                {/* Rating Section */}
                {/* <div className="mb-6 flex items-center gap-3 md:mb-10">
                <div className="flex h-7 items-center gap-1 rounded-full bg-green-500 px-2 text-white">
                  <span className="text-sm">4.2</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 transition duration-100">
                  56 ratings
                </span>
              </div> */}

                {/* Price Section */}
                {/* <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    ${price}
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    Rs. 30.00
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  MRP INCLUSIVE OF ALL TAXES
                </span>
              </div> */}

                {/* Shipping Info */}
                {/* <div className="mb-6 flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                <span className="text-sm">2-4 day shipping</span>
              </div> */}

                {/* About This Item */}
                {/* <div className="mb-6">
                  <p className="text-gray-600">{aboutThisItem}</p>
                </div> */}

                {/* Benefits */}
                <div className="mb-6">
                  <ul className="list-none space-y-2">
                    {benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ingredients */}
                <div className="my-10">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {ingredients.map((ingredient, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-gray-700 text-sm font-medium shadow-sm hover:bg-gray-200 transition duration-150"
                        >
                          {ingredient.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            {/* <div className="my-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Why Choose {name}?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {detailedDescription.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 text-base leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* How to Use */}
            <div className="my-6">
              <h3 className="text-lg font-semibold text-gray-800">
                How to Use : <span>{routines.description}</span>
              </h3>
              <ul className="list-none space-y-2">
                {routines.howToUse.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            {/* <div className="flex gap-2.5">
            <a
              href="#"
              className="inline-block flex-1 rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 sm:flex-none md:text-base"
            >
              Send Message
            </a>
            <a
              href="#"
              className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            >
              Buy Now
            </a>
          </div>

          <div className="p-4">
            <div className="text-lg font-semibold mb-2">Description:</div>
            <div className="mb-4 text-gray-700">{description}</div>
            <div className="text-lg font-semibold mb-2">About this Item:</div>
            <div className="mb-4 text-gray-700">{aboutThisItem}</div>
            <ul className="list-disc list-inside pl-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-lg text-gray-700 mb-1">
                  {benefit}
                </li>
              ))}
            </ul>
          </div> */}
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default ProductInfo;
