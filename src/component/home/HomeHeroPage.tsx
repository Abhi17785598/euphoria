import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import heroImg1 from "../../assets/images/herobg.png";
import heroImg2 from "../../assets/images/herobg2.png";

const HomeHeroPage = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 w-full h-full"
      >
        <SwiperSlide>
          <img
            src={heroImg1}
            alt="Hero Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={heroImg2}
            alt="Hero Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute inset-0 z-10 flex items-center justify-start px-6 lg:px-30">
        <div className="max-w-lg text-white">
          <p className="text-2xl font-bold uppercase tracking-wide">
            T-Shirt / Tops
          </p>
          <h1 className="text-6xl lg:text-6xl font-extrabold mt-4 leading-tight drop-shadow-lg">
            Summer
            <br /> Value Pack
          </h1>
          <p className="mt-5 text-xl opacity-90">Cool / Colorful / Comfy</p>
          <button className="mt-8 bg-white text-black text-xl px-12 py-3 rounded-md shadow hover:bg-black hover:text-white transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroPage;
