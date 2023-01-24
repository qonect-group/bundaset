import React from "react";
interface props {
  title: string;
}
export default function TitleBar({ title }: props) {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <h4 className="text-md font-bold cursor-pointer text-primary-200">
        View More
      </h4>
    </div>
  );
}
