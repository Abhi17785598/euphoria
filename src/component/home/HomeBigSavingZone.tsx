import hawaiianShirt from "../../assets/images/Big Saving Zone1.png";
import printedTshirt from "../../assets/images/Big Saving Zone2.png";
import cargoJoggers from "../../assets/images/Big Saving Zone3.png";
import oversizedTshirt from "../../assets/images/Big Saving Zone4.png";
import urbanShirt from "../../assets/images/Big Saving Zone5.png";

const HomeBigSavingZone = () => {
  return (
    <section className="w-full py-12 px-6 lg:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-10 relative inline-block group">
        Big Saving Zone
        <span className="absolute left-0 bottom-[-5px] w-0 h-[3px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">
        <div className="relative overflow-hidden rounded-lg group">
          <img
            src={hawaiianShirt}
            alt="Hawaiian Shirts"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-6 items-start">
            <div>
              <h3 className="text-white text-2xl font-semibold">
                Hawaiian Shirts
              </h3>
              <p className="text-white mt-2">Dress up in summer vibe</p>
              <p className="text-white text-sm font-medium mt-1">
                UPTO 50% OFF
              </p>
            </div>
            <button className="mt-4 border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg group">
          <img
            src={printedTshirt}
            alt="Printed T-Shirt"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-6 items-end text-right">
            <div>
              <span className="bg-black text-white text-xs px-3 py-1 rounded-md">
                Limited Stock
              </span>
              <h3 className="text-white text-2xl font-semibold mt-4">
                Printed T-Shirt
              </h3>
              <p className="text-white mt-2">New Designs Every Week</p>
              <p className="text-white text-sm font-medium mt-1">
                UPTO 40% OFF
              </p>
            </div>
            <button className="mt-4 border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg group">
          <img
            src={cargoJoggers}
            alt="Cargo Joggers"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-6 items-end text-right">
            <div>
              <h3 className="text-black text-2xl font-semibold">
                Cargo Joggers
              </h3>
              <p className="text-black mt-2">Move with style & comfort</p>
              <p className="text-black text-sm font-medium mt-1">
                UPTO 50% OFF
              </p>
            </div>
            <button className="mt-4 border border-white text-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition duration-300">
              Shop Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 col-span-1 md:col-span-3">
          <div className="relative overflow-hidden rounded-lg group h-[380px]">
            <img
              src={urbanShirt}
              alt="Urban Shirts"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6 items-end text-right">
              <div>
                <h3 className="text-black text-2xl font-semibold">
                  Urban Shirts
                </h3>
                <p className="text-black mt-2">Live In Comfort</p>
                <p className="text-black text-sm font-medium mt-1">
                  FLAT 60% OFF
                </p>
              </div>
              <button className="mt-4 border border-white text-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition duration-300">
                Shop Now
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg group h-[380px] md:col-span-2">
            <img
              src={oversizedTshirt}
              alt="Oversized T-Shirts"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6 items-end text-right">
              <div>
                <h3 className="text-black text-2xl font-semibold">
                  Oversized T-Shirts
                </h3>
                <p className="text-black mt-2">Street Style Icon</p>
                <p className="text-black text-sm font-medium mt-1">
                  FLAT 60% OFF
                </p>
              </div>
              <button className="mt-4 border border-white text-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBigSavingZone;
