import React from "react";
import Img1 from "../../assets/whey.png";
import Img2 from "../../assets/creatine.png";
import Img3 from "../../assets/c4.png";
import Img4 from "../../assets/mass.png";
import Img5 from "../../assets/amino.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "whey protein",
    rating: 4.9,
    companyname: "optimum nutrition",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "creatine",
    rating: 4.8,
    companyname: "swedish",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img3,
    title: "c4 pre-workout",
    rating: 4.7,
    companyname: "brown",
    aosDelay: "200",
  },
  {
    id: 4,
    img: Img4,
    title: "mass gainer",
    rating: 4.6,
    companyname: "muscle tech",
    aosDelay: "300",
  },
  {
    id: 5,
    img: Img5,
    title: "amino acids",
    rating: 4.5,
    companyname: "optimum nutrition",
    aosDelay: "400",
  },
  {
    id: 6,
    img: Img1,
    title: "whey protein",
    rating: 4.9,
    companyname: "optimum nutrition",
    aosDelay: "500",
  },
  {
    id: 7,
    img: Img2,
    title: "creatine",
    rating: 4.8,
    companyname: "swedish",
    aosDelay: "600",
  },
  {
    id: 8,
    img: Img3,
    title: "c4 pre-workout",
    rating: 4.7,
    companyname: "brown",
    aosDelay: "700",
  },
  {
    id: 9,
    img: Img4,
    title: "mass gainer",
    rating: 4.6,
    companyname: "muscle tech",
    aosDelay: "800",
  },
  {
    id: 10,
    img: Img5,
    title: "amino acids",
    rating: 4.5,
    companyname: "optimum nutrition",
    aosDelay: "900",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-blue-400">
            Top Selling supplements for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            We provide an overview on different brands and types of gym
            supplements, as well as information on their ingredients and
            benefits for you.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.companyname}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-blue-700 to-blue-950 transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group mt-10  group-hover:bg-white group-hover:text-black hover:scale-105">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
