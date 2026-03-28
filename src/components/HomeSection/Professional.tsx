import { homeAsset } from "../../assets/homeAssets";

const Professional: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full flex flex-col"
      style={{
        backgroundImage: `url(${homeAsset.professional})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 prof-back "></div>
      <div className="relative z-20 max-w-425 mx-auto w-full px-4 sm:px-6 md:px-10 flex flex-col lg:justify-end justify-center  h-full ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-medium uppercase leading-tight lg:text-left text-center lg:mb-18 mb-0">
          WE PROVIDE PROFESSIONAL <br />
          <span className="sub-text">CAR SERVICES</span>
        </h1>
      </div>
    </section>
  );
};

export default Professional;
