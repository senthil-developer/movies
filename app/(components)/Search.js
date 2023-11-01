'use client'
import { useState } from 'react';
import React from 'react';
import {AiOutlineSearch}  from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const Search = () => {
    const [input,setInput] = useState("");
    const router = useRouter();
    function handleSubmit(e){
        e.preventDefault()
        if(!input.trim()) return;
        router.push(`/search/${input}`)
    }
  return (
    <div className='w-full mx-auto sticky top-0 h-20  '>
        
      
        <form id='searchForm' name='searchInput'  onSubmit={handleSubmit} className='flex w-[50%] mt-5 mx-2 max-w-[90%] border-gray-300 border justify-between py-3 px-5 rounded-full focus-within:shadow-md hover:shadow-md transition-shadow items-center sm:max-w-xl  lg:max-w-2xl bg-white'>
            <input name='searchInput' onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='search breaking bad'  className='outline-none
            text-black w-full bg-white'  />
            <AiOutlineSearch onClick={handleSubmit}  className=' text-2xl  text-blue-600 font-bold ml-[9px] cursor-pointer'/>
        </form>
    </div>
  )
}

export default Search