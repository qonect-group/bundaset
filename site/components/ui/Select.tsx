import React, { useState } from "react";
import Selector from "./Selector";
interface value {
  value: string;
  label: string;
}
interface Select {
  data: string[] | value[];
  placeholder: string;
  label: string;
  onChange: any;
  value: string | undefined;
  disabled?: boolean;
  error?: string;
  creatable?: boolean;
}

export default function Select({
  data,
  placeholder,
  label,
  creatable,
  value,
  onChange,
  disabled,
  error,
}: Select) {
  return (
    <Selector
      disabled={disabled}
      autoComplete={creatable}
      value={value}
      error={error}
      type="auto"
      onChange={(e: any) => {
        onChange(e);
      }}
      label={label}
      placeholder={placeholder}
      options={data}
    />
  );
}
