import React from "react";

export default function Radio({ ...others }) {
  return (
    <div className="flex items-center">
      <input
        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-gray-800 checked:bg-primary checked:border-primary focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="radio"
        name="radio"
        id="radio"
        {...others}
      />
    </div>
  );
}
