import React from "react";
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
  disabled?: boolean;
  error?: string;
  creatable: boolean;
  maxSelectedValues?: number;
  values?: any[];
}
export default function MultiSelect({
  data,
  placeholder,
  label,
  values,
  onChange,
  maxSelectedValues,
  disabled,
  creatable,
  error,
}: Select) {
  return (
    <Selector
      maxSelectedValues={maxSelectedValues}
      autoComplete={creatable}
      disabled={disabled}
      values={values}
      error={error}
      isMulti
      type="multi"
      onChange={(e: value) => {
        onChange(e);
      }}
      label={label}
      placeholder={placeholder}
      options={data}
    />
  );
}
