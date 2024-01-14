import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "./Title";

const Test = ({ results }) => {
  return (
    <div className="flex gap-3 ml-2 my-2 w-full h-full pb-5">
      <Link
        href={{
          pathname: `/${
            results.media_type === "tv" ? "series" : results.media_type
          }/${results.id}`,
          query: { name: `${String(results?.name || results?.title)}` },
        }}
      >
        <div className="relative w-[120px] h-[200px] sm:w-[150px] sm:h-[230px] md:[w-180px]  md:h-[250px] z-10 rounded-lg">
          <Image
            src={
              results.poster_path || results.profile_path
                ? `https://image.tmdb.org/t/p/original${
                    results.poster_path || results.profile_path
                  }`
                : "/defaultImage.jfif"
            }
            fill
            style={{
              objectFit: "cover",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
            }}
            alt={results.title || results.name || "image not available"}
            className="rounded-lg"
            placeholder="blur"
            blurDataURL="/default.png"
          />
        </div>
        <div className="text-sm">
          <Title res={results} length={[12, 16]} />
        </div>
      </Link>
    </div>
  );
};

export default Test;
