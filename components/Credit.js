import Image from "next/image";
import Link from "next/link";
import React from "react";

const Credit = ({ credit }) => {
  const { cast } = credit;
  const topCast = cast.slice(0, 14);

  return (
    <div className="scroll-x flex gap-2">
      {topCast.map((cast) => {
        return (
          <div className="flex h-auto flex-col gap-1" key={cast.id}>
            <Link
              href={{
                pathname: `/person/${cast.id}`,
                query: { name: `${cast.name}` },
              }}
              className="text-xs font-bold"
            >
              <div className="relative mx-2 flex h-[150px] w-[150px] items-center rounded-full">
                <Image
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
                      : "/default.png"
                  }
                  width={150}
                  height={150}
                  placeholder="blur"
                  blurDataURL="/default.png"
                  style={{
                    objectFit: "cover",
                    width: "150px",
                    height: "150px",
                  }}
                  alt={cast.name}
                  className="rounded-full object-top"
                />
              </div>
            </Link>
            <div className="mt-2 flex flex-col  flex-wrap items-center">
              <Link
                href={{
                  pathname: `/person/${cast.id}`,
                  query: { name: `${cast.name}` },
                }}
                className="text-xs font-bold"
              >
                <p className="whitespace-nowrap text-xs  font-bold">
                  {cast.name.substring(0, 20)}
                  {cast.name.length > 20 ? <span>...</span> : <span></span>}
                </p>
              </Link>
              <p className="text-[10px] text-black text-opacity-50 dark:text-white">
                {cast.character.substring(0, 23)}
                {cast.character.length > 24 ? <span>...</span> : <span></span>}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Credit;
