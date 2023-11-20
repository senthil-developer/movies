import React from 'react'
import Link  from 'next/link'
import Image  from 'next/image'
import Title from './Title'
const Test = ({results}) => { 
  console.log(results)
  return (
    <div className="flex gap-3 ml-2 my-2">
        {results.map((results)=>{
         return(
           <Link key={results.id} href={`/${results.media_type === 'tv' ? 'series' : results.media_type}/${results.id}`}> 
           <div className='flex flex-col relative sm:w-[200px] sm:h-[300px] w-[120px] h-[200px] rounded-lg'>  
                <Image src={results.poster_path || results.profile_path ? `https://image.tmdb.org/t/p/original${results.poster_path||results.profile_path}`: "/defaultImage.jfif"} width={200} height={300}  style={{objectFit:'cover',width:'200px',height:'300px'}} alt={results.title || results.name} priority={false} className='rounded-lg'  placeholder='blur'  blurDataURL='/logo1.png'/>
            </div>
                <div className='text-sm'>
                  <Title res={results} length={[11,23]}  />
                </div>
            </Link>
        )})}
    </div>
  )
}

export default Test

            // {results.title || results.name}
            // {results.media_type === 'tv' ? <div className='absolute top-0 right-0 bg-black text-white p-2 rounded-lg'>{results.first_air_date}</div> : ''}
            // {results.media_type === 'movie' ? <div className='absolute top-0 right-0 bg-black text-white p-2 rounded-lg'>{results.release_date}</div> : ''}
            // {results.media_type === 'tv' ? <div className='absolute top-0 left-0 bg-black text-white p-2 rounded-lg'>{results.episode_run_time}</div> : ''}
            // {results.media_type === 'movie' ? <div className='absolute top-0 left-0 bg-black text-white p-2 rounded-lg'>{results.runtime}</div> : ''}