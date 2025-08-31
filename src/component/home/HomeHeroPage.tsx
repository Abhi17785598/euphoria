import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import heroImg1 from "../../assets/images/herobg.png";
import heroImg2 from "../../assets/images/herobg2.png";

const HomeHeroPage = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[90vh] md:min-h-[100vh] overflow-hidden bg-white pt-24">

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        <SwiperSlide className="flex items-center justify-center bg-white">
          <img
            src={heroImg1}
            alt="Hero Slide 1"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-white">
          <img
            src={heroImg2}
            alt="Hero Slide 2"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute inset-0 z-10 hidden md:flex items-center justify-start px-6 md:px-20">
        <div className="max-w-lg text-black md:text-white">
          <p className="text-xl font-bold uppercase tracking-wide">
            T-Shirt / Tops
          </p>
          <h1 className="text-6xl font-extrabold mt-4 leading-tight drop-shadow-lg">
            Summer
            <br /> Value Pack
          </h1>
          <p className="mt-5 text-xl opacity-90">Cool / Colorful / Comfy</p>
          <button className="mt-8 bg-white text-black text-xl px-12 py-3 rounded-md shadow hover:bg-black hover:text-white transition">
            Shop Now
          </button>
        </div>
      </div>

      <div className="md:hidden relative z-20 flex flex-col items-center text-center px-6 pb-6 bg-white">
        <p className="text-sm font-bold uppercase tracking-wide">
          T-Shirt / Tops
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 leading-snug">
          Summer Value Pack
        </h1>
        <p className="mt-2 text-base opacity-80">Cool / Colorful / Comfy</p>
        <button className="mt-4 bg-black text-white text-base px-8 py-2 rounded-md shadow hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HomeHeroPage;
