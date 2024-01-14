import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "./Title";

const Test = ({ results, mediaType }) => {
  return (
    <div className="flex gap-3 ml-2 my-2 w-full h-full">
      <Link
        href={{
          pathname: `/${mediaType === "tv" ? "series" : "movie"}/${results.id}`,
          query: { name: `${String(results?.name || results?.title)}` },
        }}
      >
        <div className="flex flex-col relative w-[180px] h-[230px] md:[w-200px] md:h-[250px] rounded-lg">
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
              borderTopRightRadius: "16px",
              borderTopLeftRadius: "16px",
            }}
            alt={results.title || results.name || "image not available"}
            className="rounded-lg "
            placeholder="blur"
            blurDataURL={"/default.png"}
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
