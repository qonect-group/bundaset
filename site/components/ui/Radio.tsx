import { spawn } from "child_process";
import React from "react";

interface Props {
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}

export default function Radio({ label, onChange, checked, ...others }: Props) {
  return (
    <div className="flex my-2 items-center">
      <input
        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-gray-800 checked:bg-primary checked:border-primary focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="radio"
        id={label || "radio"}
        onChange={onChange}
        checked={checked}
      />
      {label && (
        <label
          htmlFor={label || "radio"}
          className="text-sm cursor-pointer text-gray-200 flex ml-2"
        >
          {label}
        </label>
      )}
    </div>
  );
}
