import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {FcRating} from 'react-icons/fc';             
import Card from '@/app/(components)/Card';


const API_KEY = process.env.API_KEY
async function getMovies(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en&api_key=${API_KEY}&page=1&with_genres=28`);
    const val =  await res.json();
    // console.log(val);

    return val;
}
 
 
const page = async () => {
  const page0 = await getMovies([]);
  const page1 = await page0.results;    
  return (
     
    <div className=' w-full  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 '>
         
    
    {
      page1.map((item)=>{

      return(
        <Card  key={item.id} movie={item} />
    )})}
  </div>
  )
}

export default page