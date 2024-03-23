import { fetchData } from "./FetchData";
import Test from "./Test";
import Link from "next/link";
import { cn } from "@/lib/utils";
const Tab = async ({ path, query }) => {
  const movie = query.movie === "week" ? "week" : "day";
  const series = query.series === "week" ? "week" : "day";
  const person = query.person === "week" ? "week" : "day";

  const link = (url) =>
    `?movie=${path === "movie" ? url : movie}&series=${path === "series" ? url : series}&person=${path === "person" ? url : person}`;

  const style = "rounded-md bg-yellow-300 p-1 text-black";

  const fetch = await fetchData(
    `trending/${path === "series" ? "tv" : path}/${
      path === "person" ? person : path === "movie" ? movie : series
    }`,
  );
  const { results } = fetch;
  return (
    <>
      <div className="flex w-full  items-center justify-between rounded-full p-2 ">
        <h2>Trending {path}</h2>
        <div className="space-x-4">
          <Link
            href={link("day")}
            scroll={false}
            className={cn(
              "",
              path === "movie" && movie === "day" && style,
              path === "series" && series === "day" && style,
              path === "person" && person === "day" && style,
            )}
          >
            day
          </Link>
          <Link
            href={link("week")}
            className={cn(
              "",
              path === "movie" && movie === "week" && style,
              path === "series" && series === "week" && style,
              path === "person" && person === "week" && style,
            )}
            scroll={false}
          >
            week
          </Link>
        </div>
      </div>
      <div className="scroll-x flex h-auto w-full gap-3">
        {results?.map((result, i) => (
          <Test key={result.id} results={result} />
        ))}
      </div>
    </>
  );
};
export default Tab;
