import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FcRating } from 'react-icons/fc'


const Card = ({movie}) => {
  return (
    <>
      <Link href={`/movie/${movie.id}`} className=' flex flex-col justify-evenly  my-8 mx-auto border-2 border-pink-500 shadow-sm w-[220px] '>
      
        <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} priority={false} alt={movie.title} width={220} height={300} placeholder='blur'  blurDataURL='/logo1.png' className=' w-auto h-auto  '/>
        <div className='h-full bg-slate-400 pl-1'>
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
    </>
  )
}

export default Card