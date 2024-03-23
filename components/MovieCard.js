import React from "react";
import Link from "next/link";
import Title from "./Title";
import BlurImg from "./BlurImg";
import Image from "next/image";

const Test = ({ results, mediaType }) => {
  return (
    <div className="my-2 ml-2 flex h-full w-full  justify-center gap-3">
      <Link
        href={{
          pathname: `/${mediaType === "tv" ? "series" : mediaType}/${
            results.id
          }`,
          query: { name: `${String(results?.name || results?.title)}` },
        }}
      >
        <div className="relative z-10 h-[200px] w-[120px] rounded-lg sm:h-[230px]  sm:w-[150px] md:h-[280px] md:w-[200px]">
          <Image
            src={
              "https://image.tmdb.org/t/p/original" + results?.poster_path ||
              results?.profile_path
            }
            alt={results?.name || results?.title}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw,"
          />
        </div>
        <div className="w-[120px] truncate text-sm sm:w-[150px] md:w-[200px]">
          <Title res={results} />
        </div>
      </Link>
    </div>
  );
};

export default Test;
