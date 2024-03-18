import { fetchData } from "./FetchData";
import Test from "./Test";
import Link from "next/link";
import { Suspense } from "react";
const Tab = async ({ path, movie }) => {
  const fetch = await fetchData(
    `trending/${path}/${movie === "week" ? "week" : "day"}`
  );
  const { results } = fetch;
  return (
    <>
      <div className="w-full rounded-full  flex items-center justify-between p-2 h-auto">
        <h2>Trending {path === "tv" ? "series" : path}</h2>
        <Link href={`?movie=day`} scroll={false}>
          day
        </Link>
        <Link href={`?movie=week`} scroll={false}>
          week
        </Link>
      </div>
      <div className="w-full scroll-x flex gap-3 h-auto">
        {results?.map((result) => (
          <Test key={result.id} results={result} />
        ))}
      </div>
    </>
  );
};
export default Tab;
