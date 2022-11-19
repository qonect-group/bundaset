import { HTMLInputTypeAttribute } from "react";

interface props {
  variant?: "normal" | "fill" | "outlined";
  size?: "sm" | "md" | "lg";
  type: HTMLInputTypeAttribute;
  rounded?: "sm" | "md" | "lg" | "full" | "none";
  disabled?: boolean;
  placeholder: string;
  invalid?: Boolean;
  label?: String;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
interface sizes {
  sm: string;
  md: string;
  lg: string;
}
interface radius {
  sm: string;
  md: string;
  lg: string;
  full: string;
  none: string;
}

interface variants {
  fill: string;
  outlined: string;
  normal: string;
}
export default function Input({
  variant = "fill",
  size = "md",
  type,
  onChange,
  placeholder,
  rounded = "sm",
  disabled = false,
  invalid = false,
  label,
}: props) {
  const borderRadius: radius = {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    none: "rounded-none",
    full: "rounded-full",
  };
  const variants: variants = {
    fill: "bg-primary-50 text-white ",
    outlined:
      "border border-primary-100 bg-transparent placeholder:text-primary-100  placeholder:opacity-80",
    normal: "bg-primary-100 text-white",
  };
  const sizes: sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-6 py-4 ",
    lg: "px-8 py-6 ",
  };
  const lableSize: sizes = {
    sm: "text-xs",
    md: "text-md",
    lg: "text-lg",
  };
  return (
    <div>
      {label ? (
        <label className={`font-bold ${lableSize[size]}`}>{label}</label>
      ) : null}
      <input
        disabled={disabled}
        className={`
      w-full  outline-none m-0 placeholder:text-light 
      ${borderRadius[rounded]} 
      ${label ? "mt-1" : ""}
      ${sizes[size]}
      ${
        disabled
          ? "bg-gray-700 text-gray-800 opacity-90  cursor-default"
          : invalid
          ? "border border-red-800 text-red-800"
          : variants[variant]
      }
      `}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
