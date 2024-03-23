import React, { Suspense } from "react";
import LoadMore from "@/components/LoadMore";
import ExploreLoading from "@/components/loading/ExploreLoading";

const page = () => {
  return (
    <div className="w-full overflow-hidden md:px-[5%] lg:px-[10%]">
      <Suspense fallback={<ExploreLoading title="Explore Person" />}>
        <LoadMore />
      </Suspense>
    </div>
  );
};

export default page;
