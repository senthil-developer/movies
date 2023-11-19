import React from 'react'
import AnimatedImg from './(components)/AnimatedImg';
import Test from './(components)/Test';
import Tab from './(components)/Tab';
import Navbar from './(components)/Navbar';

const API_KEY = process.env.API_KEY
async function getMovies(path){
    const res = await fetch(`https://api.themoviedb.org/3/trending/${path}/day?language=en&api_key=${API_KEY}&page=1`);
    const val =  await res.json();
    return val;
}

export const page = async () => {
  const pathMovie = 'movie'
  const {results}  = await getMovies(pathMovie);
  const pathTv = 'tv'
  const  tvRes  = await getMovies(pathTv);
  const  tvResults  = tvRes.results;
  const pathPerson = 'person'
  const  peopleRes  = await getMovies(pathPerson);
  const  peopleResults  = peopleRes.results;
  console.log(results)
  const image = results?.[Math.floor(Math.random()*20)]
  console.log(image)
  const img = 'l'
  console.log(img)
  return (
    <div className='w-full h-screen'>
        <AnimatedImg/>
        {results.title}
        <div className='w-full h-96 flex justify-center items-center' style={{backgroundImage:`url(https:image.tmdb.org/t/p/original${image.backdrop_path})`,backgroundPosition:'center' , backgroundRepeat:'no-repeat' , backgroundSize:'cover' ,}}>
        <div className='text-2xl font-bold'>Welcome</div>
        </div>
        <div>trending movies
        <div className='w-full scroll-x flex gap-3 '>
          <Test results={results} />
        </div>
        </div>
        <div>trending series
        <div className='w-full scroll-x flex gap-3 '>
          <Test results={tvResults} />
        </div>
        </div>
        <div>trending people
        <div className='w-full scroll-x flex gap-3 '>
          <Test results={peopleResults}/>
        </div>
        </div>
        <Navbar/>
    </div>
  )
}

export default page