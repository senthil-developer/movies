"use server";
import React from "react";

export const loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="mr-2">Loading...</p>
      <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-red-700"></div>
    </div>
  );
};
