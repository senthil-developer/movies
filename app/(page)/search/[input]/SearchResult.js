"use client";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./search.scss";

import Spinner from "@/components/Spinner";
import Test from "@/components/Test";
import { fetchDataFromAxios } from "@/components/utils/api";
import Search from "@/components/Search";

const SearchResult = ({ query }) => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromAxios(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      },
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromAxios(`/search/multi?query=${query}&page=${pageNum}`).then(
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
      },
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);
  const search = decodeURIComponent(query);
  return (
    <div className="searchResultsPage w-full">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <div>
          <div className="pageTitle ml-10">
            {`Search ${
              data?.total_results > 1 ? "results" : "result"
            } of ${search}`}
          </div>
          {data?.results?.length > 0 ? (
            <>
              <InfiniteScroll
                className="searchRes grid w-full grid-cols-2 gap-2 overflow-x-hidden  overflow-y-hidden pl-11 sm:pl-20 md:grid-cols-3 lg:grid-cols-4 lg:pl-32 xl:grid-cols-5"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  return <Test key={index} results={item} />;
                })}
              </InfiniteScroll>
            </>
          ) : (
            <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-[url('/no-search.png')] bg-contain bg-center bg-no-repeat text-2xl">
              <span>Sorry, Results not found!</span>
              <Search />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
