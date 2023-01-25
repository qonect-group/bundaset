import Image from "next/image";
import { Download, Play } from "react-feather";

export default function Playlist() {
  return (
    <div className="flex md:justify-between text-white">
      <div className="flex justify-center md:justify-start text-center md:text-left items-center gap-10 flex-wrap md:flex-nowrap">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <Image
            src="/assets/img/cover-1.png"
            className="rounded-md object-cover z-40 -mt-16 md:mt-0"
            alt="Playlist"
            width={241.46}
            height={245}
          />
          <div className="md:-ml-16 flex justify-center items-center w-48 h-48 rounded-full bg-black">
            <div className="w-10 h-10 bg-gray-200 border-8 flex justify-center items-center rounded-full">
              <div className="block w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-5">
          <h4 className=" text-white text-opacity-70 font-medium uppercase">
            {"ROMMY'S PLAYLIST"}
          </h4>
          <h1 className="text-2xl font-semibold text-white">
            Indonesian hot music Of 2022
          </h1>
          <div className="flex gap-2 md:gap-5">
            {["Slow But Sure", "2022", "slow but sure"].map(
              (value: string, key: number) => {
                return (
                  <button
                    className="text-sm border border-gray-600 text-gray-100 rounded-full py-3 px-4"
                    key={key}
                  >
                    {value}
                  </button>
                );
              }
            )}
          </div>
          <div className="flex gap-2 md:gap-4">
            {["500k likes", "1000 songs", "10h 30min 30s"].map(
              (value: string, key: number) => {
                return (
                  <div key={key} className="flex gap-2 md:gap-4 items-center">
                    {key !== 0 && (
                      <span className="block w-2 h-2 bg-gray-200 rounded-full"></span>
                    )}
                    <span>{value}</span>
                  </div>
                );
              }
            )}
          </div>
          <div className="flex lg:hidden gap-4">
            <button className="flex gap-3 items-center bg-primary-200 rounded-full py-4 px-6">
              <Play size={18} fill="white" stroke="white" />
              <span className="text-base">Play Now</span>
            </button>
            <div className="justify-center px-4 items-center border rounded-full border-gray-600 flex cursor-pointer">
              <Download />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex gap-4 self-end">
        <button className="flex gap-3 items-center bg-primary-200 rounded-full py-4 px-6">
          <Play size={18} fill="white" stroke="white" />
          <span className="text-base">Play Now</span>
        </button>
        <div className="justify-center px-4 items-center border rounded-full border-gray-600 flex cursor-pointer">
          <Download />
        </div>
      </div>
    </div>
  );
}
