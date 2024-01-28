"use client";
import { useState } from "react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/${input}`);
  }
  return (
    <form
      id="searchForm"
      name="searchInput"
      onSubmit={handleSubmit}
      className="flex border-gray-300 border justify-between py-3 px-5 rounded-full focus-within:shadow-md hover:shadow-md transition-shadow items-center  bg-white"
    >
      <label htmlFor="input" className="sr-only">
        Search
      </label>
      <input
        name="searchInput"
        id="input"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="search breaking bad"
        className="outline-none
        text-black w-[200px] bg-white"
      />
      <AiOutlineSearch
        onClick={handleSubmit}
        className=" text-2xl  text-blue-600 font-bold ml-[9px] cursor-pointer"
      />
    </form>
  );
};

export default Search;
