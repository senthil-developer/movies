"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

import "./explore.scss";
import { fetchDataFromAxios } from "../utils/api";
import useFetch from "../hooks/useFetch";
import Spinner from "../Spinner";
import MovieCard from "../MovieCard";
import { motion } from "framer-motion";

let filters = {};

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

const Explore = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const path = usePathname();
  const slice = path.slice(1);
  const mediaType = slice === "series" ? "tv" : slice;

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromAxios(`/discover/${mediaType}`, filters).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    fetchDataFromAxios(`/discover/${mediaType}?page=${pageNum}`, filters).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    filters = {};
    setData(null);
    setPageNum(1);
    setSortby(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }

    setPageNum(1);
    fetchInitialData();
  };
  return (
    <div className="explorePage">
      <div className="pageHeader">
        <motion.h1
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-lg text-nowrap ml-9"
        >
          {mediaType === "tv" ? "Explore Series" : "Explore Movies"}
        </motion.h1>
        <div className="filters">
          <Select
            isMulti
            name="genres"
            value={genre}
            closeMenuOnSelect={false}
            options={genresData?.genres}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            onChange={onChange}
            placeholder="Select genres"
            className="react-select-container genresDD dark:text-black "
            classNamePrefix="react-select"
          />
          <Select
            name="sortby"
            value={sortby}
            options={sortbyData}
            onChange={onChange}
            isClearable={true}
            placeholder="Sort by"
            className="react-select-container sortbyDD dark:text-black "
            classNamePrefix="react-select"
          />
        </div>
      </div>
      {loading && <Spinner initial={true} />}
      {!loading && (
        <>
          {data?.results?.length > 0 ? (
            <InfiniteScroll
              className="content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  w-full lg:pl-32 md:pl-20 "
              dataLength={data?.results?.length || []}
              next={fetchNextPageData}
              hasMore={pageNum <= data?.total_pages}
              loader={<Spinner />}
            >
              {/* <div className=""> */}
              {data?.results?.map((item, index) => {
                if (item.media_type === "person") return;
                return (
                  <MovieCard key={index} results={item} mediaType={mediaType} />
                );
              })}
              {/* </div> */}
            </InfiniteScroll>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </>
      )}
    </div>
  );
};

export default Explore;
