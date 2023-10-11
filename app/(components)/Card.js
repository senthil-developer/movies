import React from 'react'
import Image from 'next/image'

const API_KEY = process.env.API_KEY
async function getMovies(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`);
    const val =  await res.json();
    return val;
}

 
const Card = async () => {
  const page = await getMovies([]);
  const page1 = await page.results;    
  return (
    <div className='w-full  h-full   grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5'>
    {
      page1.map((item)=>{

      return(
        <div  key={item.id}  className=' my-4 mx-auto w-[300px] shadow-md shadow-slate-500  bg-black h-fit bg-bottom rounded-t-full'>
        {/* <h1 className='text-3xl font-bold text-violet-400'>{item.title}</h1>
        <p className='text-violet-400'>{item.release_date}</p>
        <p className='text-violet-400'>{item.vote_average}</p>
        <p className='text-violet-400'>{item.vote_count}</p>
        <p className='text-violet-400'>{item.popularity}</p>
        <p className='text-violet-400'>{item.original_language}</p>
        <p className='text-violet-400'>{item.adult}</p>
        <p className='text-violet-400'>{item.backdrop_path}</p> */}
            <div className='  w-full h-full'>
              <Image className='w-full  rounded-t-xl '
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.original_title} width={200} height={300}/> 
                
              <p className='text-red-600'>{item.original_title}</p> 
              <p className='text-violet-400 '>{item.overview.substring(0,50)}...</p>
            </div>
        </div>
      )
  })
}
</div>
  )
}

export default Card