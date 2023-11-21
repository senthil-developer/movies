import React from 'react'
import Navbar from './(components)/Navbar';
import Test from './(components)/Test';

const API_KEY = process.env.API_KEY
async function getMovies(path){
    const res = await fetch(`https://api.themoviedb.org/3/trending/${path}/day?language=en&api_key=${API_KEY}&page=1`,{next : {revalidate: 10}});
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
  const image = results?.[Math.floor(Math.random()*20)]
  const bgPath = image.backdrop_path.slice(0,-1)
  const bg = image.backdrop_path ? `_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F${bgPath}g&w=1200&q=99`: "/defaultPoster.jfif"
  
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-96 sm:h-screen flex justify-center items-center bg-cover bg-center'  style={{backgroundImage: `url(${bg})` , backgroundRepeat:'no-repeat' , backgroundPosition:'none'}}>
        <div className='text-3xl font-bold '>Welcome</div>
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