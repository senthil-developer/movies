import React from "react";

const Career = ({ res, index }) => {
  return (
    <div className="my-2 flex w-full items-start gap-3 rounded-md border-2 border-red-400 bg-red-200  p-2  text-lg font-bold text-black   ">
      <p className="w-8 border-2 border-red-400">no{index + 1}</p>
      <div className="w-25 border-2 border-red-400">{res.release_date}</div>
      <div className="min-w-25 max-w-25 h-20 border-2 border-red-400 ">
        {res.title}
      </div>
      <div className="w-25 h-20 border-2 border-red-400">{res.character}</div>
    </div>
  );
};

export default Career;
