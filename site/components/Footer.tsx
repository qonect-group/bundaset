import Link from "next/link";
import React from "react";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";
import Youtube from "./icons/Youtube";
import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 ">
      <div className="max-w-6xl mx-auto px-3 py-10 md:grid-cols-1 grid grid-cols-6 gap-12">
        <div className="col-span-2 md:px-3">
          <div className="">
            <Link href={"/"}>
              <Logo height={20} width={100} />
            </Link>
          </div>
          <p className="text-sm my-5 font-medium leading-7 text-gray-400 textgr">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of{" "}
            <span className="text-primary">type and scrambled</span> it to make
            a type specimen book. It has survived not only five centuries,
          </p>
        </div>
        <div className="grid-cols-3 md:grid-cols-2 grid col-span-4 gap-4">
          <div>
            <div className="relative h-[25px] flex items-center">
              <div className="h-[20px] absolute left-0 top-[2px] w-[3px] rounded-sm bg-primary"></div>
              <h4 className="font-semibold px-5 text-base">Quick Links</h4>
            </div>
            <ul className="my-2 px-5">
              {[
                { title: "Home", path: "/" },
                { title: "Get started", path: "/register" },
                { title: "Portfolio", path: "/portfolio" },
                { title: "Services", path: "/services" },
                { title: "Company", path: "/company" },
              ].map((e, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="py-2  text-gray-300 font-medium text-sm leading-7 block"
                      href={e.path}
                    >
                      {e.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="relative h-[25px] flex items-center">
              <div className="h-[20px]  absolute left-0 top-[2px] w-[3px] rounded-sm bg-primary"></div>
              <h4 className="font-semibold px-5 text-base">Company</h4>
            </div>
            <ul className="my-2 px-5">
              {[
                { title: "Home", path: "/" },
                { title: "Get started", path: "/register" },
                { title: "Portfolio", path: "/portfolio" },
                { title: "Services", path: "/services" },
                { title: "Company", path: "/company" },
              ].map((e, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="py-2 text-gray-300 font-medium text-sm leading-7 block"
                      href={e.path}
                    >
                      {e.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:col-span-2 md:mt-6">
            <div className="mb-6 relative h-[25px] flex items-center">
              <div className="h-[20px] absolute left-0 top-[2px] w-[3px] rounded-sm bg-primary"></div>
              <h4 className="font-semibold px-5 ">Contact</h4>
            </div>
            <div className="my-5">
              <p className="text-sm font-medium">Follow us on Socioal Media</p>
              <ul className="my-6 flex items-center gap-8">
                {[
                  { icon: Facebook, href: "" },
                  { icon: Instagram, href: "" },
                  { icon: Twitter, href: "" },
                  { icon: Youtube, href: "" },
                  { icon: Linkedin, href: "" },
                ].map((e, index) => {
                  return (
                    <li key={index}>
                      <Link href={e.href}>
                        <e.icon />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-gray-800 border-t ">
        <div className="flex sm:flex-col sm:items-center sm:justify-center sm:gap-5 max-w-6xl px-3 mx-auto py-6 items-center justify-between">
          <p className="text-sm font-medium text-gray-400">
            &copy; 2022 Bundaset. All Right Reserved
          </p>
          <Link className="text-sm font-medium text-gray-300" href="/terms">
            Terms & conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
