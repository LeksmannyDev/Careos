import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { cars } from "../../lib/HomeLib";

const Latest: React.FC = () => {
  return (
    <section className="bg-[#E9E9E9] py-20 px-4 md:px-10">
      <div className="max-w-425 mx-auto w-full px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">
              Our Latest Cars
            </h2>
            <p className="text-black text-md max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
              vestibulum diam sit adipis cing elit adipis cing elit.
            </p>
          </div>

          {/* Arrows */}
          <div className="lg:flex hidden gap-3 mt-6 md:mt-0">
            <button className="w-12 h-12 flex cursor-pointer items-center justify-center border-[#FF7A00] border-2 sub-text rounded-md">
              <FaArrowLeft />
            </button>
            <button className="w-12 h-12 flex cursor-pointer items-center justify-center sub-back text-white rounded-md">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="relative group overflow-hidden">
              {/* Image */}
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-auto object-cover"
              />

              {/* Content */}
              <div className="absolute top-0 left-0 p-6 text-white latest-back z-10">
                <h3 className="md:text-xl text-base font-semibold mb-2">
                  {car.title}
                </h3>
                <p className="md:text-sm text-white">{car.description}</p>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-6 left-16 flex items-center gap-4 z-10">
                <span className="sub-text font-semibold uppercase md:text-2xl text-lg">
                  Hot Sells
                </span>
                <div className="w-30 h-1.5 bg-[#ffffff]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;
