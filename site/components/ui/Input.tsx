import { HTMLInputTypeAttribute, useState } from "react";
export type Variant = "normal" | "fill" | "outlined";
export type Rounded = "sm" | "md" | "lg" | "full" | "none";
export type Size = "sm" | "md" | "lg";
interface props {
  variant?: Variant;
  size?: Size;
  type: HTMLInputTypeAttribute;
  rounded: Rounded;
  disabled?: boolean;
  errorMsg?: String;
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
  errorMsg = "*Description of the error",
  label,
}: props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const borderRadius: radius = {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    none: "rounded-none",
    full: "rounded-full",
  };
  const variants: variants = {
    fill: "bg-gray-800 text-gray-200 border border-transparent",
    outlined:
      "border border-gray-400  placeholder:text-primary-200 bg-transparent  placeholder:opacity-80",
    normal: "bg-primary-100 text-gray-200 border border-transparent",
  };
  const sizes: sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-3 ",
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
        <label
          className={`mb-2 text-sm font-medium text-gray-200 ${lableSize[size]}`}
        >
          {label}
        </label>
      ) : null}
      <input
        disabled={disabled}
        onFocus={() => {
          setIsFocused(!invalid);
        }}
        className={`
      w-full text-gray-200 capitalze cursor-text focus-within:border-primary focus-within:border  placeholder:capitalize outline-none text-sm 
      ${borderRadius[rounded]} 
      ${label ? "mt-1" : ""}
      ${sizes[size]}
      ${
        disabled
          ? " select-none bg-opacity-70  cursor-default"
          : invalid
          ? "border border-red-800 text-red-800  bg-transparent focus:text-gray-200"
          : variants[variant]
      }
      `}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
      {invalid && isFocused === false && (
        <span className="text-sm text-red-800">{errorMsg}</span>
      )}
    </div>
  );
}
