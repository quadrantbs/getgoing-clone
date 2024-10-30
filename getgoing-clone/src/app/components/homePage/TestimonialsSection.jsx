"use client";

import React, {  useState } from "react";
import { Controller, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSection({testimonials}) {
  const [textSwiper, setTextSwiper] = useState(null);
  const [cardSwiper, setCardSwiper] = useState(null);

  return (
    <div className="container max-w-[1320px] mx-auto text-center relative p-6">
      <div className="absolute top-[70px] left-2 font-[--gray] text-[200px]">
        <img src="/img/icon/quote.png" alt="Quote" height={160} width={160} />
      </div>

      {/* Section Title */}
      <h2 className="font-bold text-black mt-2 text-shadow align-text-bottom text-[32px] leading-[42px]">
        Kata <span className="text-[--danger]">Mereka</span>
      </h2>
      <p className="text-[--gray] text-[16px] leading-[26px] mb-8">
        Cerita dari mereka yang telah menjelajahi Eropa bersama kami
      </p>

      <div className="flex flex-col lg:flex-row">
        {/* Text Swiper with Navigation */}
        <Swiper
          modules={[Controller, Navigation]}
          onSwiper={setTextSwiper}
          controller={{ control: cardSwiper }}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full h-full lg:w-1/2 mr-4"
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="text-left p-4">
                <h4 className="font-bold text-[24px] mb-2">
                  {testimonial.title}
                </h4>
                <p className="text-[--gray] leading-[1.6]">
                  {testimonial.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
          {/* Custom Navigation Buttons */}
          <div className="flex justify-start space-x-2 mt-4">
            <button className="prev-button text-sm p-2 bg-[--light] rounded-full w-[32px] h-[32px] text-[--gray] hover:bg-[--danger]">
              <i className="fas fa-arrow-left" />
            </button>
            <button className="next-button text-sm p-2 bg-[--light] rounded-full w-[32px] h-[32px] text-[--gray] hover:bg-[--danger]">
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </Swiper>

        {/* Card Swiper*/}
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          modules={[Controller, EffectCoverflow]}
          onSwiper={setCardSwiper}
          controller={{ control: textSwiper }}
          spaceBetween={10}
          slidesPerView={3}
          className="w-full lg:w-1/2 flex justify-center align-middle"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="shadow-lg rounded-lg p-4 bg-white w-[300px] mx-2"
              style={{ minHeight: "290px", maxHeight: "340px" }}
            >
              <div className="text-center">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-md mb-2 mx-auto"
                  height={290}
                  width={300}
                />
                <h6 className="font-semibold">{testimonial.name}</h6>
                <p className="text-xs uppercase text-[--gray]">
                  {testimonial.subtitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
