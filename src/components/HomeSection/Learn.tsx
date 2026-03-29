import { Link } from "react-router-dom";
import { homeAsset } from "../../assets/homeAssets";

const Learn: React.FC = () => {
  return (
    <section className="bg-[#F6F6F6] py-20 px-4 md:px-10">
      <div className="max-w-425 mx-auto w-full px-4 sm:px-6 md:px-10">
        <div className="flex flex-col xl:flex-row items-center lg:items-start gap-12">
          {/* Left Side - Text Content */}
          <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start ">
            <img src={homeAsset.learn1} className="justify-center" alt="" />
            <div className="py-10 pb-5">
              <h2 className="text-xl md:text-xl font-semibold mb-4">
                Sed ut perspiciatis
              </h2>
              <p className="text-[#000000CC] text-base ">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia conseq uuntur magni dolores eos qui ratione
                voluptatem se.
              </p>
            </div>
            <Link
              to=" "
              target=""
              className="border-2 border-[#FF7A00] text-white hover:text-black bg-[#FF7A00] px-10 md:px-8 py-3 md:py-3 rounded-md text-sm text-center"
            >
              Learn more
            </Link>
          </div>

          {/* Right Side - Buttons */}
          <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start">
            <img src={homeAsset.learn2} className="justify-center" alt="" />
            <div className="py-10 pb-5">
              <h2 className="text-xl md:text-xl font-semibold mb-4">
                Lorem ipsum dolor
              </h2>
              <p className="text-[#000000CC] text-base ">
                Amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magn aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi.
              </p>
            </div>
            <Link
              to=" "
              target=""
              className="border-2 border-[#FF7A00] text-white hover:text-black bg-[#FF7A00] px-10 md:px-8 py-3 md:py-3 rounded-md text-sm text-center"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
