import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import Credit from "./Credit";
import { fetchData } from "./FetchData";
import MovieCard from "./MovieCard";
import useFetch from "./hooks/useFetch";
import VideoSection from "./videoSection/VideoSection";

const page = async ({ id }) => {
  const ids = await id.indexOf("/");
  const path = await id.substring(0, ids);
  const res = await fetchData(id);
  const credit = await fetchData(`${id}/credits`);
  const similar = await fetchData(`${id}/similar`);
  const recommendations = await fetchData(`${id}/recommendations`);
  const bgPath = await res.backdrop_path?.slice(1);
  const bg = bgPath
    ? `/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F${bgPath}&w=1200&q=99`
    : "/defaultPoster.jfif";
  const hourToMins = (totalMinutes) => {
    const hour = Math.floor(totalMinutes / 60);
    const min = totalMinutes % 60;
    return `${hour}h ${min}m`;
  };
  return (
    <div className="pl-2">
      <div
        className="z-10 h-96 w-full rounded-md bg-cover  bg-top bg-no-repeat md:h-[30rem] lg:h-[40rem]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="relative ml-6 h-[100px] w-[150px] rounded-lg pt-[135px] sm:h-[130px] sm:w-[150px] md:h-[250px] md:w-[220px]">
          <Image
            src={
              res.poster_path || res.profile_path
                ? `https://image.tmdb.org/t/p/original${
                    res.poster_path || res.profile_path
                  }`
                : "/default.png"
            }
            width={300}
            height={250}
            style={{ objectFit: "cover", width: "auto", height: "auto" }}
            alt={res.title || res.name}
            className="rounded-lg"
            placeholder="blur"
            blurDataURL="/default.png"
          />
        </div>
      </div>
      <div className="mx-auto w-full lg:w-[80%]">
        <div className="flex w-full  flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:w-[40%] ">
            <div>
              <h1 className="text-2xl">{res.title || res.name}</h1>
              <h4 className="text-sm text-gray-300 ">
                original title : {res.original_title || res.original_name}
              </h4>
            </div>
            <p className="w-ful l line-clamp-8 text-sm md:line-clamp-5 md:text-base  lg:text-xl">
              {res.overview ? `Overview : ${res.overview}` : "No overview"}
            </p>
          </div>
          <div className="space-y-3  md:w-[40%]">
            <p>Budget : {res.budget ? "&#36;" + res.budget : "no info"}</p>
            <div className="flex w-full flex-wrap items-center">
              Genres :{res.genres.length === 0 && "No Genres"}
              {res.genres?.map((item) => {
                return (
                  <div key={item.id} className="m-1 rounded-md bg-red-300  p-1">
                    {item.name}
                  </div>
                );
              })}
            </div>
            <p>Status : {res.status ? res.status : " no info"}</p>
            <p>
              Release date :
              {res.release_date || res.first_air_date
                ? dayjs(res.release_date || res.first_air_date).format(
                    " D MMM YYYY",
                  )
                : " no info"}
            </p>
            <p>
              RunTime :
              {res.runtime ? hourToMins(res?.runtime) : " Not available"}
            </p>
          </div>
        </div>
        <div className="group">
          <p className="text-xl font-bold group-visited:text-slate-500">
            Top Cast
          </p>
          <Credit credit={credit} />
        </div>
        {similar.results.length > 0 && (
          <section>
            <p>Similar {res.first_air_date ? "Series" : "Movies"}</p>
            <div className="scroll-x flex w-full gap-5 overflow-x-scroll">
              {similar.results.map((item) => (
                <MovieCard results={item} mediaType={path} key={item.id} />
              ))}
            </div>
          </section>
        )}
        {recommendations.results.length > 0 && (
          <section>
            <p>Recommended {res.first_air_date ? "Series" : "Movies"}</p>
            <div className=" scroll-x flex w-full gap-5  overflow-x-scroll">
              {recommendations.results.map((item) => (
                <MovieCard results={item} mediaType={path} key={item.id} />
              ))}
            </div>
          </section>
        )}
        {res.homepage && (
          <Link
            href={res.homepage}
            target="_black"
            className="flex w-fit items-center border border-red-700 bg-red-500"
          >
            Watch {res.first_air_date ? "Series" : "Movies"}{" "}
            <ExternalLinkIcon className="mx-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default page;
