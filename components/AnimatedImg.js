import Image from "next/image";
import React from "react";
export default function AnimatedImg() {
  return (
    <div className="relative h-[100px] w-[100px] animate-pulse  rounded-full">
      <Image
        src="/default.png"
        width={100}
        height={100}
        style={{ objectFit: "cover", width: "100px", height: "100px" }}
        alt="hi"
        className="rounded-full"
      />
    </div>
  );
}
