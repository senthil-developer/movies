import Link from 'next/link';
import React from 'react'
import AnimatedImg from './(components)/AnimatedImg';

const API_KEY = process.env.API_KEY;

async function getMovies(){
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`);
  const val =  await res.json();
  return val;
}

export const page = async () => {
  // const genre = searchParams.genre || 'fetchTrending';
  // console.log(genre);
  const res = await getMovies([]);
  const result = await res.results;
  return (
    <><AnimatedImg/>
    <div className=' text-black  border-2 border-blue-400 w-fit'>
    
      <Link className='' href='/card'>
      test
    </Link></div>
     { 
         result.map((item)=>{
            return(
              <div key={item.id}>
                <p>{item.title} {item.id}</p>
              </div>
            )
         

         })
     }
    </>
  )
}

export default page