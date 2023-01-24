import Image from "next/image";
import React from "react";
export default function ArtistsCard({ name, type, image }: any) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt=""
        width={220}
        height={220}
        className="rounded-full"
      />
      <h3 className="text-xl font-semibold text-white mt-5">{name}</h3>
      <p className=" text-white text-opacity-70 font-medium mt-1">{type}</p>
    </div>
  );
}
