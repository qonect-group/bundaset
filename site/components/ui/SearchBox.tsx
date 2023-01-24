import { useClickOutside } from "hooks/useClickOutside";
import React, { useRef, useState } from "react";
import { ChevronDown, Search } from "react-feather";

export default function SearchBox() {
  const [searchMenu, setSearchMenu] = useState("tracks");
  const [categoryMenu, setCategoryMenu] = useState(false);
  const refCategoryMenu = useRef(null);
  useClickOutside(refCategoryMenu, () => setCategoryMenu(false));
  return (
    <div className="flex z-50  items-center w-full bg-gray-800 border rounded-full border-gray-700 px-4 py-[10px] gap-6 justify-between ">
      <div className="flex items-center w-full gap-3">
        <Search size={18} />
        <input
          type={"text"}
          placeholder="What are you looking for"
          className="bg-transparent text-sm w-full placeholder:text-gray-400 font-medium outline-none"
        />
      </div>
      <div
        className="flex gap-2 text-base items-center relative cursor-pointer"
        onClick={() => setCategoryMenu(!categoryMenu)}
        ref={refCategoryMenu}
      >
        <span className="text-[13px] capitalize font-medium">{searchMenu}</span>
        <ChevronDown width={16} />
        <div className={categoryMenu ? "block" : "hidden"}>
          <div className="absolute top-7 z-50 border right-0 border-gray-700 shadow-lg  rounded-sm w-32 bg-gray-800 overflow-hidden">
            {["tracks", "albums", "playlists"].map((v, k) => {
              return (
                <div
                  key={k}
                  onClick={() => setSearchMenu(v)}
                  className={`
                      px-3 text-[13px] font-medium capitalize py-2 
                      ${
                        searchMenu === v
                          ? "bg-gray-700 text-white  bg-opacity-50"
                          : "text-gray-400 hover:bg-gray-700 hover:bg-opacity-50 transition-all cursor-pointer"
                      }
                      
                      `}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
