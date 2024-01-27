import React from "react";
import Dayjs from "./Dayjs";
const title = ({ res, length }) => {
  const [sm, md, lg] = length;

  return (
    <div className="flex flex-col">
      <div className="sm:hidden flex">
        {res?.title
          ? res?.title?.substring(0, sm)
          : res?.name?.substring(0, sm)}
        {res?.title ? (
          res?.title?.length > sm ? (
            <span>...</span>
          ) : (
            <span></span>
          )
        ) : (
          <span></span>
        )}
        {res?.name ? (
          res?.name?.length > sm ? (
            <span>...</span>
          ) : (
            <span></span>
          )
        ) : (
          <span></span>
        )}
      </div>
      <div className="hidden sm:flex md:hidden">
        {res?.title
          ? res?.title?.substring(0, md)
          : res?.name?.substring(0, md)}
        {res?.title ? (
          res?.title?.length > md ? (
            <span>...</span>
          ) : (
            <span></span>
          )
        ) : (
          <span></span>
        )}
        {res?.name ? (
          res?.name?.length > md ? (
            <span>...</span>
          ) : (
            <span></span>
          )
        ) : (
          <span></span>
        )}
      </div>
      <div className="hidden md:flex">
        {res?.title ? res?.title?.substring(0, lg) : res?.name.substring(0, lg)}
        {res?.title ? (
          res?.title?.length > lg ? (
            <span>...</span>
          ) : (
            <span></span>
          )
        ) : (
          <span></span>
        )}
        {res?.name ? (
          res?.name?.length > lg ? (
            <span>...</span>
          ) : (
            <span></span>
          )
        ) : (
          <span></span>
        )}
      </div>
      <div className="text-gray-400">
        <Dayjs res={res} />
      </div>
    </div>
  );
};

export default title;
