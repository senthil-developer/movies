import React, { Suspense } from "react";
import Explore from "@/components/explore/ExplorePage";
import ExploreLoading from "@/components/loading/ExploreLoading";

const page = async () => {
  return (
    <div className="flex w-full  justify-center md:px-[5%] lg:px-[10%]">
      <Suspense fallback={<ExploreLoading title="Explore Movies" />}>
        <Explore />
      </Suspense>
    </div>
  );
};

export default page;
