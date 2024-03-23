"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GenreLinks = ({ genres }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  return (
    <div>
      {genres.map((genre) => (
        <Link
          key={genre.id}
          onClick={() => {
            if (!selectedGenres.includes(genreId)) {
              setSelectedGenres((prevSelectedGenres) => [
                ...prevSelectedGenres,
                genreId,
              ]);
            }
          }}
          href={`?g=${genre.id}+${selectedGenres.join(",").replace(/,/g, "+")}`}
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default GenreLinks;
