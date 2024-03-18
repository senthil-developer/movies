"use server";

import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function BlurImg({ src, alt }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const srcImg = "https://image.tmdb.org/t/p/w92" + src;
  const buffer = await fetch(srcImg).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer, {
    size: 4,
  });
  return (
    <>
      <Image
        src={baseUrl + src}
        fill
        alt={alt}
        placeholder="blur"
        blurDataURL={base64}
      />
    </>
  );
}
