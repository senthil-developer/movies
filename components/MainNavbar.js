"use client";

import React from "react";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Theme = () => {
  const path = usePathname();
  const splitUrl = path.slice(1);
  const url = splitUrl.split("/")[0];

  const NavLink = [
    {
      link: "/movie",
      name: "Movie",
      url: "movie",
    },
    {
      link: "/series",
      name: "Series",
      url: "series",
    },
    {
      link: "/person",
      name: "Person",
      url: "person",
    },
    {
      link: "/search",
      name: "Search",
      url: "search",
    },
  ];
  return (
    <>
      <div className="px-5 z-20 w-full flex justify-between fixed top-0 backdrop-blur-[3.5px]">
        <div className="relative w-auto h-auto">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="logo"
              width={30}
              height={30}
              style={{ objectFit: "cover", width: "30px", height: "30px" }}
              className="rounded-lg w-auto h-auto"
            />
          </Link>
        </div>
        <ul className=" hidden md:flex justify-between items-center gap-10">
          {NavLink.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`text-lg px-2 ${
                item.url === url
                  ? "rounded-2xl bg-yellow-300 text-gray-500"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
};

export default Theme;
