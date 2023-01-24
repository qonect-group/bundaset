"use client";
import ArtistsCard from "@components/ui/ArtistsCard";
import React from "react";
import { Artists } from "mocks/artists";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Virtual } from "swiper";
export default function Page() {
  SwiperCore.use([Mousewheel, Virtual]);
  return (
    <div className="max-w-7xl m-auto">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        direction={"horizontal"}
        mousewheel={{
          forceToAxis: true,
          sensitivity: -10,
          thresholdDelta: 14,
        }}
      >
        {Artists.map((value: any, key: number) => {
          return (
            <SwiperSlide key={key}>
              <ArtistsCard {...value} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
