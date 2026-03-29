import React from "react";
import { homeAsset } from "../../assets/homeAssets";
import ButtonLink2 from "../../ui/ButtonLink2";
import ButtonLink1 from "../../ui/ButtonLink1";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full flex flex-col px-4 md:px-10"
      style={{
        backgroundImage: `url(${homeAsset.Hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000066] "></div>
      {/* Main Content */}
      <div className="relative z-20 max-w-425 mx-auto w-full px-4 sm:px-6 md:px-10 flex flex-col justify-center h-full sm:text-left text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-medium uppercase leading-tight">
          Purchase your <br />
          <span className="sub-text">Perfect</span> car
        </h1>
        <p className="md:text-3xl text-xl text-white sm:mt-25 md:mt-15 mt-5 font-medium ">
          Over 1000+ New Cars Available Here
        </p>

        {/* Subtext */}
        <p className="text-md md:text-lg text-white mt-3 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscin elitVit ae
          pellentesque sed etiam tortor.
        </p>

        <div className="flex flex-col sm:flex-row md:gap-15 gap-5 mt-10 sm:mt-20 md:mt-15">
          <ButtonLink1
            target="_self"
            to="https://calendly.com/tarmacdigitalstudio"
          >
            Explore More
          </ButtonLink1>

          <ButtonLink2 target="_self" to="/portfolio">
            See Cars
          </ButtonLink2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
