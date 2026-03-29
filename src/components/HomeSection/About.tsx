import { homeAsset } from "../../assets/homeAssets";

const About: React.FC = () => {
  return (
    <section className="relative bg-white text-white py-20 ">
      <div className="">
        <div className="flex flex-col xl:flex-row items-center lg:items-start">
          {/* Left Side - Text Content */}
          <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start ">
            <img src={homeAsset.about} className="justify-center" alt="" />
          </div>

          {/* Right Side - Buttons */}
          <div className="w-full xl:w-1/2 flex flex-col items-center lg:items-start justify-center gap-4 sm:gap-5 px-8 md:px-18 xl:px-15">
            <h2 className="sub-text uppercase md:text-4xl sm:text-3xl text-2xl font-semibold xl:mt-0 mt-8">
              about us
            </h2>
            <p className="text-black text-xl">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
              vestibulum diam sit adipis cing elit adipis cing elit.
            </p>
            <div className=" md:text-xl text-md text-black text-justify">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                ultrices scelerisque urna sed man proin lacinia. Posuere
                facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros.
                nibh elementum eget. Integer dolor urna egestas sit donec neque,
                mi elit. Diam praesent mi blandit uices vel amet. Sapien, ac
                tortor vel ut pharetra, celerisqd. sklois kias rabs raffead
                book.
              </p>
              <p className="pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                ultrices scelerisque urna sed man proin lacinia. Posuere
                facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros.
                nibh elementum eget. Integer dolor urna egestas sit donec neque,
                mi elit. Diam praesent mi blandit uices vel amet. Sapien, ac
                tortor vel ut pharetra, celerisqd. sklois kias rabs raffead
                book.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
