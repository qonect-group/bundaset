import Image from "next/image";
import React from "react";
import { Zap } from "react-feather";
export default function EventCard() {
  return (
    <div className="bg-gray-700 rounded-md overflow-hidden">
      <div className="rounded-md overflow-hidden m-2 relative">
        <Image
          className="w-full h-full object-cover"
          src={"/assets/img/event-1.png"}
          width={378}
          height={231}
          alt=""
        />
        <div className="h-full absolute w-full flex top-0 group items-center justify-center cursor-pointer">
          <button className="bg-white flex gap-2 py-2 px-3 transition-all delay-150 rounded-full items-center opacity-0 group-hover:opacity-100">
            <Zap fill="#503ae7" size={20} stroke="#503ae7" />
            <span>Details</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-6 mb-4 text-xl font-semibold text-white px-5">
        <h3>Oslo</h3>
        <h3>Google</h3>
      </div>
      <div className="flex gap-12 mb-4 text-sm font-semibold text-white text-opacity-70 w-fit px-5">
        <span className="uppercase text-primary-200">van</span>
        <span className="uppercase">NYC</span>
        <span className="uppercase">NYC</span>
        <span className="uppercase">van</span>
      </div>
      <div className="bg-gray-600 px-5 py-3 text-white flex items-center justify-between">
        <p className="font-semibold">
          9:40 AM <span className="text-white text-opacity-70">08 DEC</span>
        </p>
        <div className="flex items-center">
          <div className="w-8 h-8 border-[3px] rounded-full">
            <Image
              className="object-cover rounded-full w-full h-full"
              src={"/assets/img/event-1.png"}
              width={30}
              height={30}
              alt=""
            />
          </div>
          <div className="w-8 h-8 -ml-2 border-[3px] rounded-full">
            <Image
              className="object-cover rounded-full w-full h-full"
              src={"/assets/img/event-1.png"}
              width={30}
              height={30}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
