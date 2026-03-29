import { homeAsset } from "../../assets/homeAssets";

const About2: React.FC = () => {
  return (
    <section className="relative bg-white text-white py-10  ">
      <div className="bg-[#F6F6F6] w-full px-4 md:px-10 ">
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch max-w-425 mx-auto px-4 sm:px-6 md:px-10 py-10">
          {/* Left Side - Text Content */}
          <div className="xl:w-1/2 flex items-center justify-center">
            <img src={homeAsset.about2} className="w-full object-cover" />
          </div>

          {/* Right Side*/}
          <div className="w-full xl:w-1/2 flex flex-col justify-center gap-4 sm:gap-5 px-0 xl:px-15 py-10">
            <h2 className="sub-text md:text-2xl sm:text-xl text-base font-medium">
              Sed ut perspiciatis unde omnis
            </h2>
            <p className="text-[#000000CC] text-xl">
              Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit aut
              fugit, sed quia consequuntur{" "}
            </p>
            <p className=" text-[#000000CC] text-base">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
