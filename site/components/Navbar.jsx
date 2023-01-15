"use client";
import { useClickOutside } from "hooks/useClickOutside";
import { useRef, useState } from "react";
import { ChevronDown, Menu, X } from "react-feather";
import Avater from "./icons/Avater";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import ProfileMenu from "./ui/ProfileMenu";
import SearchBox from "./ui/SearchBox";
export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const refMobileMenu = useRef(null);
  const [profileMenu, setProfileMenu] = useState(false);
  const refCategoryMenu = useRef(null);
  const menu = [
    {
      title: "Feed",
    },
    {
      title: "Track",
    },
    {
      title: "Distribution",
    },
    {
      title: "Publishing",
    },
    {
      title: "Beat ID",
      isUpdated: true,
    },
    {
      title: "Gift Cards",
      isUpdated: true,
    },
  ];

  useClickOutside(refMobileMenu, () => setMobileMenu(false));
  return (
    <div className="w-full relative">
      {mobileMenu && (
        <div className="absolute top-16 z-50 h-screen  w-full backdrop-blur-sm transition-opacity md:block hidden">
          <div ref={refMobileMenu}>
            <div className="bg-gray-900 border-b border-gray-800">
              <div className="px-3 py-6">
                <div className="flex gap-y-4 pap-x-3 flex-col">
                  {menu.map((v, k) => {
                    return (
                      <div className="text-gray-400 cursor-pointer" key={k}>
                        {v.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="bg-gray-900 border-b border-gray-800">
              <div className="px-3 text-gray-400 py-3">
                <div className="w-full">
                  <SearchBox />
                </div>
              </div>
            </div>
            <div className="bg-gray-900 border-b border-gray-800">
              <div className="px-3 text-gray-400 py-3">
                <div className="w-full flex flex-col gap-2">
                  <Button className="w-full">Login</Button>
                  <Button variant="subtle" className="w-full">
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center w-full py-4 text-gray-400 justify-between max-w-6xl  px-3 m-auto md:border-b md:border-gray-800">
        <div className="flex flex-1 md:justify-between  md:w-full items-center gap-7 relative">
          <div className="flex items-center gap-6">
            <a
              className="hidden md:block cursor-pointer"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <X
                  size={20}
                  className="text-gray-200 "
                  onClick={() => setMobileMenu(false)}
                />
              ) : (
                <Menu
                  size={20}
                  className="text-gray-200 "
                  onClick={() => {
                    setMobileMenu(true), setProfileMenu(false);
                  }}
                />
              )}
            </a>
            <Logo className="w-24 h-5 md:w-20 md:h-4" />
          </div>
          <div className="md:block hidden">
            <div
              onClick={() => {
                setProfileMenu(!profileMenu), setMobileMenu(false);
              }}
            >
              <ProfileMenu
                profileMenu={profileMenu}
                setProfileMenu={setProfileMenu}
              />
            </div>
          </div>
          <div className="md:hidden w-[60%]">
            <SearchBox />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 md:hidden ">
          <ul className="flex justify-between gap-4" ref={refCategoryMenu}>
            {["Exprole", "Creators"].map((v, k) => {
              return (
                <li
                  key={k}
                  className="text-[15px] font-medium leading-[140%] cursor-pointer"
                >
                  {v}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-[1.7188rem]">
            <Button variant="primary">Sign In</Button>
            <div
              className="border-l border-[#41424E] flex pl-[1.7188rem]"
              onClick={() => setProfileMenu(!profileMenu)}
            >
              <ProfileMenu
                profileMenu={profileMenu}
                setProfileMenu={setProfileMenu}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 md:hidden">
        <div className="max-w-6xl px-3 m-auto">
          <div className="flex gap-10">
            {menu.map((v, k) => {
              return (
                <div
                  key={k}
                  className="text-[15px]  text-gray-400 font-medium cursor-pointer hover:opacity-70"
                >
                  {v.title}
                  {v.isUpdated && (
                    <span className="rounded-full text-black text-xs bg-yellow-400 py px-2 ml-2">
                      New
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
