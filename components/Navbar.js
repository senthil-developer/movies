"use client";

import React from "react";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { BiMoviePlay, BiSolidMoviePlay } from "react-icons/bi";
import { IoPeopleOutline, IoPeopleSharp } from "react-icons/io5";
import { RiSearchFill } from "react-icons/ri";
import { PiTelevisionSimple, PiTelevisionSimpleFill } from "react-icons/pi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const splitUrl = path.slice(1);
  const url = splitUrl.split("/")[0];
  return (
    // mobile navbar
    <nav className="w-full mt-10 flex header fixed bottom-0 md:hidden py-1 px-7 text-[10px] text-gray-400 bg-gray-800  items-center justify-between overflow-hidden z-50">
      <Link
        className={
          url !== "/"
            ? "text-white flex flex-col items-center"
            : "flex flex-col items-center"
        }
        href="/"
      >
        {url !== "/" ? <FaHome size={25} /> : <GoHome size={25} />}Home
      </Link>
      <Link
        className={
          url === "movie"
            ? "text-white flex flex-col items-center"
            : "flex flex-col items-center"
        }
        href="/movie"
      >
        {url === "movie" ? (
          <BiSolidMoviePlay size={25} />
        ) : (
          <BiMoviePlay size={25} />
        )}
        Movies
      </Link>
      <Link
        className={
          url === "search"
            ? "text-white flex flex-col items-center"
            : "flex flex-col items-center"
        }
        href="/search"
      >
        {url === "search" ? (
          <RiSearchFill size={25} />
        ) : (
          <BsSearch size={25} className="p-0.5" />
        )}
        Search
      </Link>
      <Link
        className={
          url === "series"
            ? "text-white flex flex-col items-center"
            : "flex flex-col items-center"
        }
        href="/series"
      >
        {url === "series" ? (
          <PiTelevisionSimpleFill size={25} />
        ) : (
          <PiTelevisionSimple size={25} />
        )}
        Series
      </Link>
      <Link
        className={
          url === "person"
            ? "text-white flex flex-col items-center"
            : "flex flex-col items-center"
        }
        href="/person"
      >
        {url === "person" ? (
          <IoPeopleSharp size={25} />
        ) : (
          <IoPeopleOutline size={25} />
        )}
        Peoples
      </Link>
    </nav>
  );
};

export default Navbar;
