"use client";

import React, { useState, useEffect } from "react";
import Search from "./Search";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["searchRandom.png", "searchRandom1.png", "searchRandom2.png"]; // Replace with your image URLs

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentImage, images.length]);

  return (
    <>
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-[900px]"
      />
      <div className="absolute">
        <Search />
      </div>
    </>
  );
};

export default ImageSlider;
