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
  rightIcon?: JSX.Element | null;
  leftIcon?: JSX.Element | null;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: JSX.Element | JSX.Element[] | String;
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
  danger: string;
  primary: string;
  success: string;
  light: string;
  subtle: string;
  outlined: string;
  normal: string;
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
  rightIcon = null,
  leftIcon = null,
}: props) {
  const Element = href ? Link : "button";
  const borderRadius: radius = {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    none: "rounded-none",
    full: "rounded-full",
  };
  const variants: variants = {
    danger: "bg-red-500 text-white",
    primary: "bg-primary text-white",
    success: "bg-success text-white",
    light: "bg-light text-white",
    subtle: "bg-transparent text-primary",
    outlined: "bg-transparent border border-primary text-primary",
    normal: "bg-gray-700 text-white",
  };
  const sizes: sizes = {
    sm: "py-2 px-6 text-xs",
    md: "py-3 px-12 ",
    lg: "px-24 py-3 ",
  };
  let isLoading = "cursor-wait opacity-50";
  return (
    <Element
      href={href ? href : {}}
      onClick={!href ? onClick : undefined}
      className={`text-sm   font-medium text-center  ${
        loading ? isLoading : "hover:opacity-90"
      }  
      ${compact ? "p-2" : sizes[size]}  
      ${borderRadius[rounded]} 
      ${uppercase ? "uppercase" : ""}
      ${
        disabled
          ? "bg-gray-700 text-gray-800 opacity-90  cursor-default"
          : variants[variant]
      }
      `}
    >
      {loading ? (
        <div className="flex justify-center items-center hover:opacity-100 w-fit h-fit">
          {" "}
          <Loading size={size} color="#1C64F2" />
          {/* <span className="my-auto  ">Loading</span>{" "} */}
        </div>
      ) : (
        <>
          {leftIcon ? <span>{leftIcon}</span> : null}
          {children}
          {rightIcon ? <span className="ml-2">{rightIcon}</span> : null}
        </>
      )}
    </Element>
  );
}
