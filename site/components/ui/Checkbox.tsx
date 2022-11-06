import React from "react";

interface props {
  id?: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}

export default function Checkbox({
  label,
  onChange,
  checked = false,
  id,
}: props) {
  return (
    <div className="flex items-center">
      <div>
        <input
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-transparent checked:bg-primary checked:border-primary focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          id={id}
          onChange={onChange}
          checked={checked}
        />
      </div>
      <label
        className="form-check-label font-normal leading-8 inline-block text-gray-100 cursor-pointer capitalize text-sm"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
