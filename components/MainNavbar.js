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
      <div className="fixed top-0 z-20 flex w-full justify-between px-5 backdrop-blur-[3.5px]">
        <div className="relative h-auto w-auto">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="logo"
              width={30}
              height={30}
              style={{ objectFit: "cover", width: "30px", height: "30px" }}
              className="h-auto w-auto rounded-lg"
            />
          </Link>
        </div>
        <ul className=" hidden items-center justify-between gap-10 md:flex">
          {NavLink.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`px-2 text-2xl  ${
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
