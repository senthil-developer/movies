import React from "react";
import Link from "next/link";
import Title from "./Title";
import BlurImg from "./BlurImg";

const Test = ({ results }) => {
  return (
    <div className="my-2 ml-2 flex h-full w-full gap-3 pb-5">
      <Link
        href={{
          pathname: `/${
            results.media_type === "tv" ? "series" : results.media_type
          }/${results.id}`,
          query: { name: `${String(results?.name || results?.title)}` },
        }}
      >
        <div className="relative z-10 h-[200px] w-[140px] rounded-lg sm:h-[270px]  sm:w-[150px] md:h-[290px] md:w-[180px]">
          <BlurImg
            src={
              results.poster_path
                ? results.poster_path
                : results.profile_path
                  ? results.profile_path
                  : "/default.png"
            }
            alt={results.title || results.name}
          />
        </div>
        <div className="w-[140px] text-sm sm:w-[150px] md:w-[180px]">
          <Title res={results} />
        </div>
      </Link>
    </div>
  );
};

export default Test;
