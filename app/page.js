import React from 'react'
import Navbar from '@/components/Navbar';
import {fetchData} from '@/components/FetchData';
import Tab from '@/components/Tab';

export async function generateMetadata(){
  const url = '/logo1.png'
  return {
    title: 'movie universe',
    description: 'Latest movies , series , trending movies,person,history',
    keywords: 'movie,series,trending,person,history,movieuniverse,movieuniverse.vercel.app,latest movies,latest series,latest people,actor history,actress history,',
    openGraph: {
      images: [url],
}}
}

export const page = async () => {
  const {results}  = await fetchData('trending/all/day','',10);
  const image = results?.[Math.floor(Math.random()*20)]
  const bgPath = image.backdrop_path?.slice(1)
  const bg = image.backdrop_path ? `_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F${bgPath}&w=1200&q=99`: "/defaultPoster.jfif"
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-96 sm:h-screen flex justify-center items-center bg-cover bg-center'  style={{backgroundImage: `url(${bg})` , backgroundRepeat:'no-repeat' , backgroundPosition:'none'}}>
          <div className='text-3xl font-bold  text-center'>Welcome to <h1>MOVIE UNIVERSE</h1>
          </div>
        </div>
        <div className='w-full'>
          <Tab path='movie' />
        </div>
        <div>
          <Tab path='tv' />
        </div>
        <div>
          <Tab path='person' />
        </div>
        <Navbar/>
    </div>
  )
}

export default page