"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchData } from "./FetchData";
import { motion } from "framer-motion";
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
      <div className="pt-10">
        <motion.h1
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-lg text-nowrap ml-9"
        >
          Popular peoples
        </motion.h1>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  w-full lg:pl-32 sm:pl-20 pl-5 overflow-y-hidden content overflow-x-hidden">
          {data?.map((item) => {
            return (
              <MovieCard key={item.id} results={item} mediaType={"person"} />
            );
          })}
        </section>
      </div>
      <section className="w-full flex justify-center ">
        <div ref={ref} className="animate-spin h-10 w-10 pt-10"></div>
      </section>
    </>
  );
}

export default LoadMore;
