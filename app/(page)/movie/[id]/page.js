import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import YoutubeVideo from '@/app/(components)/YoutubeVideo';
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs';
import Credit from '@/app/(components)/Credit';

async function  getData(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en&api_key=${process.env.API_KEY}`);
  if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  const data = await response.json();
  // console.log(data)
  return data;
}
async function  getVideo(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en&api_key=${process.env.API_KEY}`);
  if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  const video = await response.json();
  const result = [video.results]
  // console.log(result)
  return result;
}
async function  getCastCrew(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en&api_key=${process.env.API_KEY}`);
  if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  const Cast = await response.json();
  const result =  Cast;
  // console.log(result)
  return result;
}

const page = async ({params}) => {
const movieId = params.id;
const movie = await getData(movieId);
const video = await getVideo(movieId);
const credit = await getCastCrew(movieId);
const hourToMins = (totalMinutes) => {
  const hour = Math.floor(totalMinutes / 60);
  const min = totalMinutes % 60;
  return `${hour}h ${min}m`;
}  
  return (
    <div className='ml-2 bg-no-repeat bg-cover' >
      
      <h2 className='text-2xl'>{movie.title}</h2>
      <h4 className='text-sm text-gray-300 '>original title : {movie.original_title}</h4>
      <div className=''>
        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} width={500} height={200} style={{width: 'auto',height:'auto',}} className=' w-auto h-auto  ' priority={false} alt={`${movie.title} image`} placeholder='blur'  blurDataURL='/logo1.png'/>
        <p>Overview : {movie.overview}</p>
      </div>

        <p>Budget : {movie.budget==0 ? "no info" : movie.budget}</p>
        <div className='flex '>
           <div className='mt-2'>Genre: </div>
            <div className='flex flex-wrap'>
              {movie.genres.map(item =>{
              return (
              <div key={item.id} className='p-1 m-1 rounded-md  bg-red-300' >{item.name}</div>
              )})}
            </div>

        </div>
        <div className='flex gap-2'>
          <div>Status : {(movie.status)?movie.status :"no info" }</div>
          <div>Release date : {(movie.release_date)?dayjs(movie.release_date).format("D/MM/YYYY"):"no info"}</div>
        </div>
        <div className='flex gap-2'>
          <div>RunTime : {hourToMins(movie.runtime)}</div>
        </div>
        <Link href={movie.homepage} target='_black' className='border border-red-700 bg-red-500 flex w-fit items-center'> more about movie <ExternalLinkIcon className='mx-1'/></Link>
        <p>Credits</p>
        <Credit credit={credit}/>
        <p>Official Videos</p>
        {
        video.map((item)=>{
            return(
              <YoutubeVideo item={item} key={item.map((item)=>item.id)} />
            )
          })}
      </div>
  )
}

export default page