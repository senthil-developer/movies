import React from 'react'
import AnimatedImg from './(components)/AnimatedImg';
import Test from './(components)/Test';
import Tab from './(components)/Tab';

const API_KEY = process.env.API_KEY
async function getMovies({path}){
    const res = await fetch(`https://api.themoviedb.org/3/trending/${path}/${'week'||'day'}?language=en&api_key=${API_KEY}&page=1`);
    const val =  await res.json();
    return val;
}

export const page = async () => {
  let path = 'movie'
  const {results}  = await getMovies({path});
  path = 'tv'
  const  Result  = await getMovies({path});
  const  tvResults  = Result.results;
  path = 'people'
  const  Resul  = await getMovies({path});
  const  peopleResults  = Resul.results;
  const image = results?.[Math.floor(Math.random()*20)]
  // console.log(tab) 
  return (
    <>
    <AnimatedImg/>
    <div className='w-full h-96 flex justify-center items-center' style={{backgroundImage:`url(https:image.tmdb.org/t/p/original${image.backdrop_path})`,backgroundPosition:'center' , backgroundRepeat:'no-repeat' , backgroundSize:'cover' ,}}>
     <div className='text-2xl font-bold'>Welcome</div>
    </div>
    <div>trending movies
    <div className='w-full scroll-x flex gap-3 '>
      <Test movie={results}/>
    </div>
    </div>
    <div>trending series
    <div className='w-full scroll-x flex gap-3 '>
      <Test movie={tvResults}/>
    </div>
    </div>
    <div>trending people
    <div className='w-full scroll-x flex gap-3 '>
      <Test movie={peopleResults}/>
    </div>
    </div>
    </>
  )
}

export default page