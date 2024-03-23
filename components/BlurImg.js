"use server";

import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function BlurImg({ src, alt }) {
  const Src = src.length > 15;
  const srcImg = Src ? "https://image.tmdb.org/t/p/original" + src : src;
  const blurImg = Src ? "https://image.tmdb.org/t/p/w92" + src : src;
  const buffer = await fetch(blurImg).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });
  const { base64 } = await getPlaiceholder(buffer, {
    size: 4,
  });
  return (
    <>
      <Image
        src={srcImg}
        fill
        alt={alt}
        placeholder="blur"
        blurDataURL={base64}
        sizes="(max-width: 768px) 100vw,"
        className="rounded-md object-cover"
      />
    </>
  );
}

const Test = ({ res }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col">
        <h1 className="text-2xl">{res.title || res.name}</h1>
        <h4 className="text-sm text-gray-300 ">
          original title : {res.original_title || res.original_name}
        </h4>
        <p> {res.overview ? `Overview : ${res.overview}` : ""}</p>
      </div>
      <div>
        <p>
          {res?.budget == 0 || res?.created_by ? (
            ""
          ) : (
            <>Budget : &#36;{res.budget} </>
          )}
        </p>
        <div className="flex flex-wrap">
          {res.genres.map((item) => {
            return (
              <div key={item.id} className="m-1 rounded-md bg-red-300  p-1">
                {item.name}
              </div>
            );
          })}
        </div>
        <p>Status : {res.status ? res.status : "no info"}</p>
        <p>
          Release date :
          {res.release_date || res.first_air_date
            ? dayjs(res.release_date || res.first_air_date).format("D MMM YYYY")
            : "no info"}
        </p>
        <p>
          {res.runtime
            ? "RunTime :" + hourToMins(res?.runtime)
            : "Not available"}
        </p>
      </div>
    </div>
  );
};
