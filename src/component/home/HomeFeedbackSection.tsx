import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

import user1 from "../../assets/svgs/feedperson1.svg";
import user2 from "../../assets/svgs/feedperson2.svg";
import user3 from "../../assets/svgs/feedperson3.svg";
import StarIcon from "../../assets/svgs/feedstar1.svg";

const FeedbackSection=()=> {
  const feedbacks = [
    {
      img: user1,
      name: "Floyd Miles",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      img: user2,
      name: "Ronald Richards",
      text: "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      img: user3,
      name: "Savannah Nguyen",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      img: user1,
      name: "Dianne Russell",
      text: "Curabitur in libero a lorem pulvinar porttitor. Sed at turpis sed dui posuere semper.",
    },
    {
      img: user2,
      name: "Jacob Jones",
      text: "Quisque gravida, metus quis tempor lobortis, lacus nisl viverra urna, eget posuere justo dolor quis enim.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto py-12">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-[5px] h-6 bg-purple-500 rounded"></div>
        <h2 className="text-2xl font-bold">Feedback</h2>
      </div>

      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          slidesPerGroup={1}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ el: ".feedback-pagination", clickable: true }}
          onBeforeInit={(swiper) => {
            if (
              swiper?.params?.pagination &&
              typeof swiper.params.pagination === "object"
            ) {
              (swiper.params.pagination as { el: string | HTMLElement }).el =
                ".feedback-pagination";
            }
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {feedbacks.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="border border-[#BEBCBD] rounded-[10px] p-5 bg-white min-h-[260px] flex flex-col shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex flex-col">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 object-cover mb-1"
                    />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                  </div>

                  <div className="flex-none mt-1">
                    <img
                      src={StarIcon}
                      alt="rating"
                      className="w-[96px] h-5 object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="feedback-pagination mt-4 flex justify-center" />
      </div>
    </section>
  );
}
export default FeedbackSection;