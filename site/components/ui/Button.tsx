"use client";
import React from "react";
import Link from "next/link";
import Loading from "./loading";
interface props {
  variant?:
    | "primary"
    | "danger"
    | "success"
    | "outlined"
    | "normal"
    | "light"
    | "subtle";
  size?: "sm" | "md" | "lg";
  loading?: Boolean;
  href?: string;
  rounded?: "sm" | "md" | "lg" | "full" | "none";
  compact?: Boolean;
  uppercase?: Boolean;
  disabled?: Boolean;
  LeftIcon?: any;
  RightIcon?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: JSX.Element | JSX.Element[] | String;
}
export default function Button({
  variant = "primary",
  size = "md",
  loading,
  rounded = "sm",
  href,
  children,
  onClick,
  compact,
  uppercase = false,
  disabled = false,
  LeftIcon,
  RightIcon,
}: props) {
  const Element = href ? Link : "button";
  const borderRadius = {
    sm: "rounded-[4px]",
    md: "rounded-md",
    lg: "rounded-lg",
    none: "rounded-none",
    full: "rounded-full",
  };
  const variants = {
    danger: "bg-red-500 text-white",
    primary: "bg-primary text-white",
    success: "bg-success text-white",
    light: "bg-light text-white",
    subtle: "bg-transparent text-primary",
    outlined: "bg-transparent border border-primary text-primary",
    default:
      "border border-gray-700 text-gray-300  hover:bg-gray-600 hover:bg-opacity-25",
    normal: "bg-gray-700 text-white",
  };
  const sizes = {
    sm: "px-4 py-[6px]  leading-4 font-medium  text-[13px] ",
    md: "px-6 py-2 font-medium text-sm",
    lg: "px-5 py-3 font-medium text-base",
  };
  let isLoading = "cursor-wait opacity-50";
  return (
    <Element
      href={href ? href : {}}
      onClick={!href ? onClick : undefined}
      className={`text-[13px] font-medium text-center
      ${compact ? "p-2" : sizes[size]}  
      ${borderRadius[rounded]} 
      ${uppercase ? "uppercase" : ""}
      ${"flex justify-center items-center w-full"}
      ${variants[variant]}
      ${
        disabled
          ? " opacity-60 cursor-not-allowed"
          : `${loading ? isLoading : "hover:opacity-90"} `
      }
      `}
    >
      {loading ? (
        <div className="flex justify-center gap-2 items-center hover:opacity-100 w-fit h-fit">
          <Loading />
          <span className="my-auto"> {children}</span>
        </div>
      ) : (
        <span className="flex gap-3 items-center justify-between">
          {LeftIcon && <LeftIcon size={16} />}
          <span className=""> {children}</span>
          {RightIcon && <RightIcon size={16} />}
        </span>
      )}
    </Element>
  );
}
