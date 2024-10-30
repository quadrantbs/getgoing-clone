"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function PopularGuidesSection({guides}) {

  return (
    <div className="container px-4 max-w-[1320px] mx-auto py-5">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Sedang <span className="text-[--red]">Populer</span>
        </h2>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        style={{
          "--swiper-pagination-color": "var(--red)",
          paddingBottom: "30px",
        }}
        className="pb-5"
      >
        {guides.map((guide) => (
          <SwiperSlide key={guide.id} className="!w-[184px] px-2">
            <div className="col py-3">
              <div className="card-box relative rounded-lg transition-transform duration-300 transform hover:-translate-y-2">
                <a
                  href={`/getguide/getguide?id=${guide.id}`}
                  className="absolute inset-0 z-10"
                />
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="h-[184px] w-[184px] object-cover mx-auto rounded-xl"
                />
              </div>
              <p className="truncate mt-4 mb-1 font-bold">{guide.name}</p>
              <p className="truncate text-[--gray]">{guide.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
