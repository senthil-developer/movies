"use server";

import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function BlurImg({ src, alt }) {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const srcImg = "https://image.tmdb.org/t/p/w92" + src;
  const buffer = await fetch(srcImg).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { svg } = await getPlaiceholder(buffer, {
    size: 4,
  });
  return (
    <>
      <Image
        src={baseUrl + src}
        fill
        alt={alt}
        placeholder="blur"
        blurDataURL={svg}
        sizes="(max-width: 768px) 100vw,"
        priority
      />
    </>
  );
}
