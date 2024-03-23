import Explore from "@/components/explore/ExplorePage";
import ExploreLoading from "@/components/loading/ExploreLoading";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="flex w-full  justify-center md:px-[5%] lg:px-[10%]">
      <Suspense fallback={<ExploreLoading title="Explore Series" />}>
        <Explore />
      </Suspense>
    </div>
  );
};

export default page;
