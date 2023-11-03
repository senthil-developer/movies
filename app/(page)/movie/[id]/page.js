import Image from 'next/image';
import Link from 'next/link';
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
// write a function that returns genres name & id  from api
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
        <p>Budget : {movie.budget}</p>
          <div className='flex flex-wrap'>
            Genre :
           {movie.genres.map(item =>{
            return (
            <div key={item.id} className=' ml-1' >{item.name}</div>
            )})}
          </div>
        <Link href={movie.homepage} target='_black' className='border border-red-700 bg-red-500'> watch</Link>
    </div>
  )
}

export default page