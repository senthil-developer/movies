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
        {results?.map((result, i) => (
          <>
            {i < 10 && <Test key={result.id} results={result} />}
            {i > 10 && (
              <div className="flex gap-3 ml-2 my-2 w-full h-full pb-5">
                <Link
                  href={{
                    pathname: `/${
                      result.media_type === "tv" ? "series" : result.media_type
                    }/${result.id}`,
                    query: {
                      name: `${String(result?.name || results?.title)}`,
                    },
                  }}
                >
                  <div className="relative w-[120px] h-[200px] sm:w-[150px] sm:h-[230px] md:[w-180px]  md:h-[250px] z-10 rounded-lg">
                    <Image
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        result.poster_path
                      }
                      fill
                      alt={alt}
                    />
                  </div>
                  <div className="text-sm">
                    <Title res={result} length={[12, 16, 16]} />
                  </div>
                </Link>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};
export default Tab;
