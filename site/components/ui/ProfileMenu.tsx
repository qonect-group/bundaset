import Avater from "@components/icons/Avater";
import { useClickOutside } from "hooks/useClickOutside";
import { useRef, useState } from "react";
import { ChevronDown } from "react-feather";
import { LogOut, Settings, User } from "react-feather";
export default function ProfileMenu({ profileMenu, setProfileMenu }: any) {
  const refProfileMenu = useRef(null);

  const ProfileMenu = [
    {
      title: "profile",
      icon: User,
      onclick:()=>{
        
      }
    },
    {
      title: "settings",
      icon: Settings,
      onclick:()=>{}

    },
    {
      title: "logout",
      icon: LogOut,
      onclick:()=>{}

    },
  ];
  useClickOutside(refProfileMenu, () => setProfileMenu(false));
  return (
    <div className="flex items-center md:gap-1 gap-[10px] relative w-full z-50 cursor-pointer">
      <div className="rounded-full overflow-hidden">
        <Avater />
      </div>
      <ChevronDown className="cursor-pointer" width={18} />
      {profileMenu && (
        <div
          ref={refProfileMenu}
          className="absolute md:fixed top-9 md:top-16 w-[250px] md:w-full border  right-0 border-gray-700 shadow-lg border-opacity-30  rounded-sm bg-gray-800 overflow-hidden"
        >
          <div className="flex p-4 items-center gap-3 border-gray-700 pb-4 border-b">
            <div className="rounded-full overflow-hidden">
              <Avater width={40} height={40} />
            </div>
            <div className="pt-1  flex flex-col gap-3 ">
              <p className="text-white font-medium text-sm leading-none">
                Hirwaaldo1
              </p>
              <span className="uppercase text-gray-400 text-xs leading-none ">
                free
              </span>
            </div>
          </div>
          <div className="flex flex-col my-1">
            {ProfileMenu.map((v, k) => {
              return (
                <a
                onClick={v.onclick}
                  className="flex py-[10px] hover:bg-gray-700 hover:bg-opacity-25 rounded-[4px] mx-2 cursor-pointer px-3 items-center text-white gap-4 my-[2px]"
                  key={k}
                >
                  <v.icon size={16} className="text-gray-300" />
                  <span className="capitalize text-sm font-medium text-gray-400 ">
                    {v.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
