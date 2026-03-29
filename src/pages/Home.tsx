import React from "react";
import Hero from "../components/HomeSection/Hero";
import About from "../components/HomeSection/About";
import Professional from "../components/HomeSection/Professional";
import Latest from "../components/HomeSection/Latest";
import Learn from "../components/HomeSection/Learn";
import About2 from "../components/HomeSection/About2";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Professional />
      <Latest />
      <Learn />
      <About2 />
    </>
  );
};

export default Home;
