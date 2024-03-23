"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchData } from "./FetchData";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";

let pageNum = 1;

function LoadMore() {
  const { ref, inView } = useInView();
  const [page, setPage] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (inView) {
      fetchData("person/popular", `page=${pageNum}`).then((res) => {
        setPage([...page, ...res.results]);
        pageNum++;
      });
    }
  }, [inView, page]);
  // const alphabetOrder = page?.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <div className="flex w-full flex-col pt-10">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-nowrap mb-6 ml-9 text-lg"
          >
            Popular peoples
          </motion.h1>
          <div>
            {/* <button onClick={setData(alphabetOrder)}>A to Z</button> */}
          </div>
        </div>
        <section className="grid h-full w-full grid-cols-2 place-content-center place-items-center  md:grid-cols-3  lg:grid-cols-4">
          {page?.map((item, i) => {
            return <MovieCard key={i} results={item} mediaType={"person"} />;
          })}
        </section>
      </div>
      <section className="flex w-full items-center  justify-center">
        <div
          ref={ref}
          className="h-10 w-10 origin-center animate-spin
        rounded-full border-t-4"
        />
      </section>
    </>
  );
}

export default LoadMore;
