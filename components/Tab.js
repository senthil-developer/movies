import SwitchTab from "./SwitchTab";
import { fetchData } from "./FetchData";
import Test from "./Test";
import SkeletonLoading from "./SkeletonLoading";
import Link from "next/link";

const Tab = async ({ path, movie }) => {
  const fetch = await fetchData({
    path: `trending/${path}/${movie === "week" ? "week" : "day"}`,
    revalidate: 1,
  });
  const { results } = fetch;
  return (
    <>
      <div className="w-full rounded-full  flex items-center justify-between p-2 h-auto">
        <h2>Trending {path === "tv" ? "series" : path}</h2>
        <Link href={`?movie=day}`}>day</Link>
        <Link href={`?movie=week}`}>week</Link>
      </div>
      <div className="w-full scroll-x flex gap-3 h-auto">
        {results?.map((result) =>
          result ? (
            <Test key={result.id} results={result} />
          ) : (
            <SkeletonLoading />
          )
        )}
      </div>
    </>
  );
};
export default Tab;
