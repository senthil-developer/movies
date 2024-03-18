import React from "react";
import MainNavbar from "@/components/MainNavbar";
import { fetchData } from "@/components/FetchData";
import Tab from "@/components/Tab";

export const page = async ({ searchParams }) => {
  const movie = searchParams.movie === "week" ? "week" : "day";
  const { results } = await fetchData("trending/all/day", "", 10);
  const image = results?.[Math.floor(Math.random() * 20)];
  const bgPath = image.backdrop_path?.slice(1);
  const bg = bgPath
    ? `_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F${bgPath}&w=1200&q=99`
    : "/defaultPoster.jfif";
  return (
    <div className="w-full h-full">
      <MainNavbar />
      <div
        className="w-full h-96 sm:h-screen flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "none",
        }}
      >
        <div className="text-3xl w-[70%] font-bold  text-center">
          <h1 className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-500  via-violet-500 to-yellow-500">
            Welcome to MOVIE UNIVERSE
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-[80%] mx-auto">
        <section>
          <Tab path="movie" movie={movie} />
        </section>
      </div>
    </div>
  );
};

export default page;
