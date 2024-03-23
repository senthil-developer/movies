import React from "react";
import MainNavbar from "@/components/MainNavbar";
import { fetchData } from "@/components/FetchData";
import Tab from "@/components/Tab";

export const page = async ({ searchParams }) => {
  const { results } = await fetchData("trending/all/day", "", 2);
  const image = results?.[Math.floor(Math.random() * 20)];
  const bgPath = image.backdrop_path?.slice(1);
  const bg = bgPath
    ? `_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F${bgPath}&w=1200&q=99`
    : "/defaultPoster.jfif";
  return (
    <div className="h-full w-full">
      <MainNavbar />
      <div
        className="flex h-96 w-full items-center justify-center bg-cover bg-top sm:h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="w-[70%] text-center text-3xl  font-bold">
          <h1 className="bg-gradient-to-r from-purple-500  via-violet-500 to-yellow-500  bg-clip-text text-transparent">
            Welcome to MOVIE UNIVERSE
          </h1>
        </div>
      </div>
      <div className="mx-auto w-full lg:w-[80%]">
        <section>
          <Tab path="movie" query={searchParams} />
        </section>
        <section>
          <Tab path="series" query={searchParams} />
        </section>
        <section>
          <Tab path="person" query={searchParams} />
        </section>
      </div>
    </div>
  );
};

export default page;
