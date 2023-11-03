import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {FcRating} from 'react-icons/fc';             

const API_KEY = process.env.API_KEY
async function getMovies(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en&api_key=${API_KEY}&page=1&with_genres=28`);
    const val =  await res.json();
    console.log(val);

    return val;
}
 
 
const Card = async () => {
  const page = await getMovies([]);
  const page1 = await page.results;    
  return (
     
    <div className=' w-full    grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 '>
         
    
    {
      page1.map((item)=>{

      return(
        <div  key={item.id}  >
          <Link href={`/movie/${item.id}`}  className=' flex flex-col justify-evenly  my-8 mx-auto border-2 border-pink-500 shadow-sm w-[220px] ' >
            <div>
              <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} priority= {true} alt={item.title} width={220} height={300} className=' w-auto h-auto  '/>
            </div>
            <div className='h-full bg-slate-400 '>
              <h4 className='whitespace-nowrap w-full'>{item.title.substring(0,24)}
              {(item.title.length > 24) ? (
                <span>...</span>
              ):(
                <span></span>
              )}</h4>
              <div className=' flex  justify-between'>
              <div > {item.release_date}</div>
              <div className='flex items-center mr-2  gap-1' ><FcRating />{item.vote_average.toString().substring(0,3)}
             </div>
              </div>
            </div>
          </Link>
      </div>
      )
  })
}

</div>
  )
}

export default Card