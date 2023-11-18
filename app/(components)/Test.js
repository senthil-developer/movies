import React from 'react'
import Link  from 'next/link'
import Image  from 'next/image'

const Test = ({movie}) => {
  return (
    <div className="flex gap-3 ml-2 my-2">
        {movie.map((movie)=>{
         return(
            <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className='flex flex-col relative sm:w-[200px] sm:h-[300px] w-[120px] h-[200px] rounded-lg'> 
                <Image src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}`: "/defaultImage.jfif"} width={200} height={300}  style={{objectFit:'cover',width:'200px',height:'300px'}} alt={movie.title} priority={false} className='rounded-lg'  placeholder='blur'  blurDataURL='/logo1.png'  />
            </div>
            </Link>
        )})}
    </div>
  )
}

export default Test

