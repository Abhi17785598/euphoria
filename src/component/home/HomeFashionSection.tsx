import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";

import leftBg from "../../assets/images/fashionbg.png";
import img1 from "../../assets/images/fashion1.png";
import img2 from "../../assets/images/fashion1.png";
import img3 from "../../assets/images/fashion1.png";

const HomeFashionSection=()=> {
  return (
    <div className="w-[90%] mx-auto min-h-[80vh] grid grid-cols-1 md:grid-cols-2 ">
      <div
        className="relative flex items-center justify-center text-white px-6 md:px-12 py-12 md:py-0  overflow-hidden"
        style={{
          backgroundImage: `url(${leftBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        
        <div className="relative z-10 max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            WE MADE YOUR EVERYDAY <br /> FASHION BETTER!
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-200">
            In our journey to improve everyday fashion, Euphoria presents
            EVERYDAY wear range – Comfortable & Affordable fashion 24/7.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center  overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              src={img1}
              alt="Fashion 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt="Fashion 2"
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt="Fashion 3"
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeFashionSection;
