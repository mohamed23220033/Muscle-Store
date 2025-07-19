import React from "react";
import Img1 from "../../assets/whey.png";
import Img2 from "../../assets/creatine.png";
import Img3 from "../../assets/mass.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "whey protein",
    description:
      "Whey protein refers to a group of eight proteins found in milk. These proteins, in order from the biggest to smallest amounts in milk",
  },
  {
    id: 2,
    img: Img2,
    title: "creatine",
    description:
      " Creatine supplies energy to your muscles. Many people take creatine supplements to build strength and promote brain health. Creatine supplements are safe for most people to take, but you should first talk to a healthcare provider to ensure they’re right for you.",
  },
  {
    id: 3,
    img: Img3,
    title: "mass gainer",
    description:
      "Mass gainers may be a good source of extra calories and protein if you are trying to build muscle during periods of intense training. ",
  },
  {
    id: 4,
    img: Img1,
    title: "whey protein",
    description:
      "Whey protein refers to a group of eight proteins found in milk. These proteins, in order from the biggest to smallest amounts in milk",
  },
  {
    id: 5,
    img: Img2,
    title: "creatine",
    description:
      " Creatine supplies energy to your muscles. Many people take creatine supplements to build strength and promote brain health. Creatine supplements are safe for most people to take, but you should first talk to a healthcare provider to ensure they’re right for you.",
  },
  {
    id: 6,
    img: Img3,
    title: "mass gainer",
    description:
      "Mass gainers may be a good source of extra calories and protein if you are trying to build muscle during periods of intense training. ",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-blue-400">
            Top Rated supplements for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            We provide an overview on different brands and types of gym
            supplements, as well as information on their ingredients and
            benefits for you.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center mb-20 ">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-blue-400 dark:hover:bg-blue-400 hover:text-white relative shadow-xl duration-300 group max-w-[400px] mt-20"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[190px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-gradient-to-r from-blue-700 to-blue-950 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-black"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
