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
      className="flex items-center justify-between rounded-full border border-gray-300 bg-white px-5 py-3 transition-shadow focus-within:shadow-md  hover:shadow-md"
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
        className="w-[300px]
        bg-white text-black outline-none"
      />
      <AiOutlineSearch
        onClick={handleSubmit}
        className=" ml-[9px]  cursor-pointer text-2xl font-bold text-blue-600"
      />
    </form>
  );
};

export default Search;
