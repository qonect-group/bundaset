import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
interface Props {
  label?: string;
  error?: string;
  disabled?: boolean;
  value: string;
  placeholder: string;
  type?: string;
  onChange: any;
}
export default function Input({
  label,
  error,
  disabled,
  value,
  placeholder,
  type,
  onChange,
  ...other
}: Props) {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-200">
          {label}
        </label>
      )}
      <div
        className={
          `${
            error ? "border-red-500" : "border-gray-800"
          } relative w-full max-w-md ${
            disabled ? "opacity-70 pointer-events-none" : ""
          }` +
          " flex justify-between focus:border-primary cursor-pointer py-[2px] border items-center focus:border bg-gray-800 px-3 rounded-[4px]"
        }
      >
        {""}
        <input
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          className={`w-full ${
            error ? "text-red-600 placeholder:text-red-500" : "text-gray-200"
          } bg-transparent py-3 placeholder:capitalize outline-none text-sm `}
          type={
            type === "password" ? (showPassword ? "text" : "password") : "text"
          }
          placeholder={placeholder}
          {...other}
        />
        {type === "password" && (
          <a
            onClick={() => {
              setshowPassword(!showPassword);
            }}
            className="cursor-pointer"
          >
            {showPassword ? (
              <Eye className="text-gray-400" size={20} />
            ) : (
              <EyeOff className="text-gray-400" size={20} />
            )}
          </a>
        )}
      </div>
      {error ? <p className="text-sm text-red-600 mt-1">{error}</p> : null}
    </div>
  );
}
