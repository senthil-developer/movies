import Image from 'next/image';
import React from 'react'

async function  getData(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en&api_key=${process.env.API_KEY}`);
  
  if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  const data = await response.json();
  console.log(data)
  return data;
}
const page = async ({params}) => {
    // const style = {
    //     width: 'auto',
    //     height: 'auto',
    //     objectFit: 'cover',
    //     backgroundColor: ''
    // }
const movieId = params.id;
const movie = await getData(movieId);
  return (
    <div>
      from movie <br/>  
      <h1>
      {movie.title}
      </h1>
        <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`} width={500} height={200} 
        className='rounded-lg  w-auto h-auto' 
        placeholder='blur'
        // blurDataURL={`${style}`}
        blurDataURL='/logo1.png'
        // layout='responsive'
        alt={`${movie.title} image`} />
    </div>
  )
}

export default page