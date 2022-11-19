import { useClickOutside } from "hooks/useClickOutside";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "react-feather";

interface props {
  placeholder: string;
  onChange: any;
  label: string;
  type: "multi" | "single" | "auto";
  options?: any[];
  value?: any;
  values?: any;
  disabled?: boolean;
  isMulti?: boolean;
  autoComplete?: boolean;
  maxSelectedValues?: number;
  error?: string;
}

interface value {
  value: string;
  label: string;
  creatable?: boolean;
}

export default function Selector({
  placeholder,
  onChange,
  disabled,
  maxSelectedValues,
  error,
  label,
  value: selectValue,
  values: selectValues = [],
  autoComplete,
  isMulti,
  options: selectOptions = [],
}: props) {
  const value: value = {
    label: selectValue ? selectValue["label"] || selectValue : "",
    value: selectValue ? selectValue["value"] || selectValue : "",
  };
  const values: value[] = selectValues.map((value: any) => {
    return {
      label: value["label"] || value,
      value: value["value"] || value,
    };
  });

  const options: value[] =
    selectOptions.length && typeof selectOptions[0] === "string"
      ? selectOptions.map((e: string) => {
          return {
            value: e,
            label: e.toLowerCase(),
          };
        })
      : selectOptions;

  const optType = typeof selectOptions[0] === "string" ? "strings" : "objects";

  const [searchText, setsearchText] = useState<string | undefined>(undefined);
  const [showDropdown, setshowDropdown] = useState(false);

  const textInputRef = useRef<HTMLInputElement | null>(null);

  const [searcresults, setSearchResults] = useState<value[]>([]);

  const onSearchChange = (text: string | undefined) => {
    setsearchText(text);
    if (text) {
      setSearchResults(options.filter((e, i, arr) => e.label.includes(text)));
    } else {
      setSearchResults([]);
    }
  };

  const ref = useRef(null);

  useClickOutside(ref, () => {
    setshowDropdown(false);
    onSearchChange(undefined);
    if (searchText === "" && !isMulti && !value) {
      onChange(undefined);
    }
  });

  const [activeTemp, setactiveTemp] = useState(-1);

  const displayOptions: value[] =
    searcresults.length === 0 && searchText
      ? autoComplete
        ? [{ label: searchText, value: searchText, creatable: true }]
        : []
      : searcresults.length && searchText
      ? searcresults
      : options;

  const openDropdown = () => {
    if (isMulti) {
      if (maxSelectedValues) {
        if (maxSelectedValues > values.length) {
          setshowDropdown(true);
        }
      } else {
        setshowDropdown(true);
      }
    } else {
      setshowDropdown(true);
    }
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-200">
        {label}
      </label>

      <div
        onFocus={() => {
          if (!disabled) {
            openDropdown();
            textInputRef.current?.focus();
          }
        }}
        onClick={() => {
          if (!showDropdown) {
            openDropdown();
            textInputRef.current?.focus();
          }
        }}
        tabIndex={0}
        ref={ref}
        className={`relative w-full max-w-md ${
          disabled ? "opacity-70 pointer-events-none" : ""
        }`}
      >
        <div
          className={
            `${
              showDropdown
                ? "border-primary "
                : error
                ? "border-red-500"
                : "border-gray-800"
            } ` +
            " flex justify-between cursor-pointer border items-center focus-within:border-primary focus-within:border bg-gray-800 px-3 py-2 rounded-[4px]"
          }
        >
          <div
            className={
              isMulti && values.length
                ? `flex pr-3 items-center flex-wrap gap-2`
                : ""
            }
          >
            {isMulti &&
              values.map((e: value, index) => {
                return (
                  <div
                    key={index}
                    className="text-gray-300 flex items-center gap-1 text-sm rounded-sm  bg-gray-700 py-[7px]"
                  >
                    <span className="pl-3 pr-0">{e.label}</span>
                    <a
                      onClick={() => {
                        onChange(
                          values.filter((i: value) => i.value !== e.value)
                        );
                      }}
                      className="pr-3 hover:text-white pl-1"
                    >
                      <X size={14} />
                    </a>
                  </div>
                );
              })}
            <input
              type="text"
              style={{
                width: isMulti
                  ? searchText
                    ? `${searchText?.length * 10}px`
                    : !values.length
                    ? "100%"
                    : "20px"
                  : "",
              }}
              className={`${isMulti ? (values.length ? "" : "") : "flex-1 "} ${
                error
                  ? "text-red-600 placeholder:text-red-500"
                  : "text-gray-200"
              } bg-transparent px-0 capitalze cursor-text py-1 placeholder:capitalize outline-none text-sm `}
              placeholder={
                isMulti && !searchText?.length && values.length
                  ? ""
                  : placeholder
              }
              onChange={(e) => {
                onSearchChange(e.target.value);

                if (!showDropdown) {
                  openDropdown();
                  textInputRef.current?.focus();
                }
              }}
              onClick={() => {
                openDropdown();
                textInputRef.current?.focus();
              }}
              onKeyDown={(e) => {
                if (e.code === "ArrowDown") {
                  if (activeTemp === displayOptions.length - 1) {
                    setactiveTemp(0);
                  } else {
                    setactiveTemp(activeTemp + 1);
                  }
                } else if (e.code === "ArrowUp") {
                  if (activeTemp === 0) {
                    setactiveTemp(displayOptions.length - 1);
                  } else {
                    setactiveTemp(activeTemp - 1);
                  }
                } else if (e.code === "Backspace") {
                  if (isMulti && !searchText && values.length) {
                    onChange(values.slice(0, -1));
                  }
                } else if (e.code === "Enter") {
                  const c =
                    autoComplete &&
                    searcresults.length === 0 &&
                    !displayOptions[activeTemp]
                      ? displayOptions[0]
                      : displayOptions[activeTemp];
                  if (c) {
                    if (isMulti) {
                      onSearchChange("");
                      onChange([
                        ...values,
                        optType === "strings" ? c.value : c,
                      ]);
                    } else {
                      onChange(optType === "strings" ? c.value : c);
                      onSearchChange("");
                    }
                    setshowDropdown(false);
                    onSearchChange(undefined);
                  }
                }
              }}
              value={
                isMulti
                  ? searchText || ""
                  : searchText !== undefined
                  ? searchText
                  : value?.label
              }
              defaultValue=""
              ref={textInputRef}
            />
          </div>

          <a
            onClick={(e) => {
              e.stopPropagation();
              if (!showDropdown) {
                textInputRef.current?.focus();
              } else {
                setshowDropdown(false);
                onSearchChange(undefined);
              }
            }}
          >
            <ChevronDown className="text-gray-300" size={16} />
          </a>
        </div>
        {error ? <p className="text-sm text-red-600 mt-1">{error}</p> : null}
        {showDropdown && options.length && (
          <Fragment>
            {displayOptions.length ? (
              <ul className="absolute z-30 overflow-hidden rounded-[4px] my-1 w-full bg-gray-800">
                {(isMulti
                  ? displayOptions.filter(
                      (e) => !values.find((i) => i.value === e.value)
                    )
                  : displayOptions
                )
                  .slice(0, 6)
                  .map((e: value, index: number) => {
                    return (
                      <li key={index}>
                        <a
                          onMouseEnter={() => {
                            setactiveTemp(index);
                          }}
                          className={
                            `${
                              value?.value === e.value
                                ? "bg-primary text-white "
                                : activeTemp === index
                                ? "bg-gray-700 bg-opacity-30 text-gray-400"
                                : "text-gray-400 hover:bg-gray-700 hover:bg-opacity-50 "
                            } ` +
                            "px-[14px] text-sm  capitalize py-3 flex transition-all cursor-pointer"
                          }
                          onClick={(i) => {
                            i.stopPropagation();
                            if (isMulti) {
                              onSearchChange("");
                              onChange([
                                ...values,
                                optType === "strings" ? e.value : e,
                              ]);
                            } else {
                              onChange(optType === "strings" ? e.value : e);
                            }
                            setshowDropdown(false);
                          }}
                        >
                          {e.creatable ? `create "${e.label}"` : e.label}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <div className="absolute overflow-hidden rounded-[4px] my-1 w-full bg-gray-800">
                <span className="text-gray-400 flex text-sm py-4 px-3 justify-center items-center">
                  No results
                </span>
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
}
