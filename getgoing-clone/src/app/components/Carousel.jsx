"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import CarouselSlideOne from "./carouseSlides/CarouselSlideOne";
import CarouselSlideTwo from "./carouseSlides/CarouseSlideTwo";

export default function Carousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full px-4 sm:px-8"
        speed={500}
        autoHeight={true}
        style={{ "--swiper-navigation-color": "var(--red)" }}
      >
        <SwiperSlide>
          <CarouselSlideOne />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselSlideTwo />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
