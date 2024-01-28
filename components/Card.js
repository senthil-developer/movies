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
        className="w-full h-96 md:h-[500px] bg-cover rounded-md bg-center z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "none",
        }}
      >
        <div className="ml-6 pt-[135px] relative w-[150px] h-[100px] sm:w-[150px] sm:h-[130px] md:w-[220px] md:h-[250px] rounded-lg">
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
      <div className="w-full lg:w-[80%] mx-auto">
        <h1 className="text-2xl">{res.title || res.name}</h1>
        <h4 className="text-sm text-gray-300 ">
          original title : {res.original_title || res.original_name}
        </h4>
        <p> {res.overview ? `Overview : ${res.overview}` : ""}</p>
        {res?.budget == 0 || res?.created_by ? (
          ""
        ) : (
          <p>Budget : &#36;{res.budget} </p>
        )}
        <div className="flex ">
          <div className="mt-2">Genre: </div>
          <div className="flex flex-wrap">
            {res.genres.map((item) => {
              return (
                <div key={item.id} className="p-1 m-1 rounded-md  bg-red-300">
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-2">
          <div>Status : {res.status ? res.status : "no info"}</div>
          <div>
            Release date :{" "}
            {res.release_date || res.first_air_date
              ? dayjs(res.release_date || res.first_air_date).format(
                  "D MMM YYYY"
                )
              : "no info"}
          </div>
        </div>
        <div className="flex gap-2">
          <div>{res.runtime ? "RunTime :" + hourToMins(res?.runtime) : ""}</div>
        </div>
        <div className="group">
          <p className="text-xl font-bold group-visited:text-slate-500">
            Top Cast
          </p>
          <Credit credit={credit} />
        </div>
        {Object.keys(similar.results).length > 0 && (
          <section>
            <p>Similar {res.first_air_date ? "Series" : "Movies"}</p>
            <div className="flex w-full overflow-x-scroll gap-5 scroll-x">
              {similar.results.map((item) => (
                <MovieCard results={item} mediaType={path} key={item.id} />
              ))}
            </div>
          </section>
        )}
        {Object.keys(recommendations.results).length > 0 && (
          <section>
            <p>Recommended {res.first_air_date ? "Series" : "Movies"}</p>
            <div className=" flex w-full overflow-x-scroll gap-5  scroll-x">
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
            className="border border-red-700 bg-red-500 flex w-fit items-center"
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
