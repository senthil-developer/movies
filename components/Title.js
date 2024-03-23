import React from "react";
import Dayjs from "./Dayjs";
const title = ({ res }) => {
  return (
    <div className="flex flex-col">
      <div className="truncate text-lg">{res?.name || res?.title}</div>
      <div className="text-gray-400">
        <Dayjs res={res} />
      </div>
    </div>
  );
};

export default title;
