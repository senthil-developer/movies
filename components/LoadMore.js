"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchData } from "./FetchData";
import MovieCard from "./MovieCard";

let page = 1;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (inView) {
      fetchData("person/popular", `page=${page}`).then((res) => {
        setData([...data, ...res.results]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 pt-10">
        {data?.map((item) => {
          return (
            <MovieCard key={item.id} results={item} mediaType={"person"} />
          );
        })}
      </section>

      <section className="w-full flex justify-center">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className=""
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
