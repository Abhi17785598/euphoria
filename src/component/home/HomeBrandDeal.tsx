import Marquee from "react-fast-marquee";
import nike from "../../assets/images/brand1.png";
import hm from "../../assets/images/brand2.png";
import levis from "../../assets/images/brand3.png";
import polo from "../../assets/images/brand4.png";
import puma from "../../assets/images/brand5.png";

const HomeBrandDeal=()=> {
  const brands = [nike, hm, levis, polo, puma];

  return (
    <div className="w-full max-w-[1200px] mx-auto py-10">
      
      <div className="bg-[#3C4242] rounded-[10px] py-10 px-6 text-center h-[50vh]">
       
        <h2 className="text-white text-6xl font-bold mb-8">
          Top Brands Deal
        </h2>
      
        <p className="text-gray-200 text-xl pb-8">
          Up To <span className="text-yellow-400 font-bold">60% </span>
          off on brands
        </p>

        
        <div className="mt-8">
          <Marquee speed={90} gradient={false}>
            {brands.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg flex items-center justify-center mx-4 w-[160px] h-[90px] shadow-xl"
              >
                <img
                  src={logo}
                  alt={`Brand ${index}`}
                  className="max-h-[45px] object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
export default HomeBrandDeal;