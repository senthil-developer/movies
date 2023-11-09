import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FcRating } from 'react-icons/fc';

// https://api.themoviedb.org/3/search/person?query=Vijay&include_adult=false&language=en-US&page=1&api_key={process.env.API_KEY}

async function  searchInput(query) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=1&api_key=${process.env.API_KEY}`);
  if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  const input = await response.json();
  const result =  input;
  return result;
}

const page = async ({params}) => {
const query = params.input
const movie = await searchInput(query);
const {results} = movie;
console.log(movie)
console.log(results)
  return (
    <div className='w-full  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 '>
     {
      results.map((movie) =>{
          return(
          <div key={movie.id} className=' flex flex-col justify-evenly  my-8 mx-auto border-2 border-pink-500 shadow-sm '>
          <Link href={`/movie/${movie.id}`}>
          <div className='relative w-[220px] h-[300px]  rounded-full'> 
            <Image src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : '/defaultImage.jfif'} alt={movie.title} width={220} height={300}  placeholder='blur' blurDataURL='/logo1.png' style={{objectFit:'fill',width:'220px',height:'300px'}} className=' w-auto h-auto  '/>
          </div> 
            <div className='bg-slate-400 pl-1'>
              <h4 className='whitespace-nowrap w-full'>{movie.title.substring(0,23)}
              {(movie.title.length > 24) ? (
                <span>...</span>
              ):(
                <span></span>
              )}</h4>
              <div className=' flex  justify-between'>
              <div > {movie.release_date}</div>
              <div className='flex items-center mr-2  gap-1' ><FcRating />{movie.vote_average.toString().substring(0,3)}
              </div>
              </div>
            </div>
          </Link>    
          </div>  
          )})}
    </div>
  )
}

export default page