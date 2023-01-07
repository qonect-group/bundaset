import React from "react";

interface Props {
  id?: string;
  label?: string;
  title?: string;
  subTitle?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}
export default function Switch({
  label,
  onChange,
  checked,
  title,
  subTitle,
}: Props) {
  return (
    <label
      htmlFor={label || title}
      className="flex cursor-pointer my-5 select-none items-center"
    >
      {(title || subTitle) && !label && (
        <div className=" flex flex-col  mr-10">
          {title && (
            <span className="text-sm mb-3 text-gray-50 font-semibold">
              {title}
            </span>
          )}
          {subTitle && (
            <span className="text-sm text-gray-300">{subTitle}</span>
          )}
        </div>
      )}
      <div className="relative">
        <input
          type="checkbox"
          id={label || title}
          className="sr-only peer"
          onChange={onChange}
          checked={checked}
        />
        <div className="box peer-checked:bg-primary bg-gray-700  block h-7 w-12 rounded-full" />
        <div className="dot peer-checked:translate-x-5 absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white transition" />
      </div>
      {label && (
        <label
          htmlFor={label || title}
          className="text-sm cursor-pointer text-gray-200 flex ml-3"
        >
          {label}
        </label>
      )}
    </label>
  );
}
