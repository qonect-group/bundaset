"use client";
import EventCard from "@components/ui/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleBar from "@components/ui/TitleBar";
import SwiperCore, { Mousewheel, Virtual } from "swiper";
import React, { useState } from "react";
import "swiper/css";
export default function Page() {
  SwiperCore.use([Mousewheel, Virtual]);
  return (
    <div className="max-w-7xl mx-auto">
      <TitleBar title={"Trending Upcomming Events"} />
      <div className="mt-5">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
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
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <SwiperSlide key={i}>
                <EventCard key={i} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
