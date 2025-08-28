import cozyImg from "../../assets/images/herobg2.png";
import summerImg from "../../assets/images/herobg3.png";

const HomeHeroCart = () => {
  return (
    <div className="w-full px-6 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <img
            src={cozyImg}
            alt="High Coziness"
            className="w-full h-[400px] object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white">
            <p className="text-xl font-bold tracking-wide pb-5">Low Price</p>
            <h2 className="text-4xl lg:text-4xl font-bold mt-2 ">
              High Coziness
            </h2>
            <p className="mt-3 text-lg font-medium">UPTO 50% OFF</p>
            <button className="mt-6 font-bold underline hover:text-black/70  transition">
              Explore Items
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <img
            src={summerImg}
            alt="High Coziness"
            className="w-full h-[400px]  object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white ">
            <p className="text-xl font-bold tracking-wide pb-4">
              Beyoung Presents
            </p>
            <h2 className="text-4xl lg:text-4xl font-bold mt-2 ">
              Breezy Summer<br></br>Style
            </h2>
            <p className="mt-3 text-lg font-medium">UPTO 50% OFF</p>
            <button className="mt-6 font-bold underline hover:text-black/70  transition">
              Explore Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroCart;
