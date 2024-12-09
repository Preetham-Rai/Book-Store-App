import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import news from "../assets/news/news";

function NewsSection() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">News Section</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {news.length > 0 &&
          news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                <div className="py-4">
                  <Link to="/">
                    <h3 className="text-lg font-medium hover:text-blue-600 mb-4">
                      {item.title}
                    </h3>
                    <div className="w-10 h-[4px] bg-primary"></div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </Link>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default NewsSection;
