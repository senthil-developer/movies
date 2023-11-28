import React from 'react'
import Navbar from '@/components/Navbar';
import Test from '@/components/Test';
import {fetchData} from '@/components/FetchData';

export const page = async () => {
  const {results}  = await fetchData('trending/movie/day','');
  const  tvRes  = await fetchData('trending/tv/day','');
  const  tvResults  = tvRes.results;
  const peopleRes = await fetchData('trending/person/day','');
  const  peopleResults  = peopleRes.results;
  const image = results?.[Math.floor(Math.random()*20)]
  const bgPath = image.backdrop_path.slice(1)
  console.log(bgPath)
  const bg = image.backdrop_path ? `_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F${bgPath}&w=1200&q=99`: "/defaultPoster.jfif"
  
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