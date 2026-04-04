import React from "react";
import { homeAsset } from "../../assets/homeAssets";

const Double: React.FC = () => {
  return (
    <section className="relative bg-white text-white py-10 pt-0">
      <div className="bg-[#F6F6F6] w-full px-4 md:px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center max-w-425 mx-auto px-4 sm:px-6 md:px-10 py-10">
          {/* Left Side - Text Content */}
          {/* Vision */}
          <div className="flex flex-col gap-4 order-1 md:order-1 text-center md:text-left">
            <h2 className="sub-text md:text-2xl sm:text-xl text-base font-medium">
              Sed ut perspiciatis unde omnis
            </h2>
            <p className="text-[#000000CC] text-xl">
              Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit aut
              fugit, sed quia consequuntur{" "}
            </p>
            <p className=" text-[#000000CC] text-base text-justify md:text-left md:mt-5 mt-2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem.
            </p>
          </div>

          {/* Vision Image */}
          <div className="order-2 md:order-2 flex justify-center">
            <img
              src={homeAsset.double1}
              alt="Vision"
              className="w-full h-auto object-cover "
            />
          </div>

          {/* Mission Image */}
          <div className="order-3 md:order-3 flex justify-center">
            <img
              src={homeAsset.double2}
              alt="Mission"
              className="w-full h-auto object-cover "
            />
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-4 order-4 md:order-4 text-center md:text-left">
            <img
              src={homeAsset.double3}
              alt="Mission"
              className="w-full h-auto object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Double;
