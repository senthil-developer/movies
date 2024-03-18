"use server";

import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function BlurImg({ src, alt }) {
  const baseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <Image
        src={baseUrl + src}
        fill
        alt={alt}
        sizes="(max-width: 768px) 100vw,"
      />
    </>
  );
}
