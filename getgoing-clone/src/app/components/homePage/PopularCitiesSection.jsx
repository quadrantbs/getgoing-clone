"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function PopularCitiesSection() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("/api/cities");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className="container px-4 max-w-[1320px] mx-auto py-4">
      <div className="col-md-8 mx-auto">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-4">
            Kota <span className="text-[--red]">Populer</span>
          </h2>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        className="pt-3 pb-5"
        style={{
          "--swiper-pagination-color": "var(--red)",
          paddingBottom: "50px",
        }}
      >
        {cities.map((city) => (
          <SwiperSlide key={city.id} className="!w-[250px] px-2 mr-[10px] py-2">
            <div className="w-[230px] h-[350px] relative rounded-lg overflow-hidden transition-transform duration-300 transform hover:-translate-y-2">
              <a href={city.link} className="block w-full h-full">
                <img
                  src={city.image}
                  alt={city.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{city.name}</h3>
                  <p className="text-sm">{city.country}</p>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
