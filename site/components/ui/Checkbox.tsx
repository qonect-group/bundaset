import React from "react";

interface props {
  id?: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}

export default function Checkbox({ label, onChange, checked = false }: props) {
  return (
    <div className="flex my-2 items-center">
      <div>
        <input
          className="form-check-input appearance-none h-4 w-4 border border-gray-500 rounded-sm bg-transparent checked:bg-primary checked:border-primary focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          id={label || "checkbox"}
          onChange={onChange}
          checked={checked}
        />
      </div>
      {label && (
        <label
          htmlFor={label || "checkbox"}
          className="text-sm cursor-pointer text-gray-200 flex ml-2"
        >
          {label}
        </label>
      )}
    </div>
  );
}
