import { cn } from "@/lib/utils";

const ExploreLoading = ({ title }) => {
  return (
    <div className={cn("flex h-full w-full flex-col gap-5 ", title && "pt-14")}>
      {title && <h2 className="text-xl"> {title}</h2>}
      <div className="grid h-full w-full grid-cols-2 place-content-center  place-items-center gap-16  md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5">
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="">
              <div className="h-[200px] w-[120px]  animate-pulse  rounded-lg bg-slate-400 sm:h-[230px] sm:w-[150px] md:h-[280px] md:w-[200px]" />
              <div className="mt-2 h-5 w-32 animate-pulse rounded-md bg-slate-400" />
            </div>
          ))}
      </div>
    </div>
  );
};
export default ExploreLoading;
