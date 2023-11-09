import Image from 'next/image';
import React from 'react'

async function  getPerson(id) {
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
    const person = await response.json();
    const result =  person;
    // console.log(result)
    return result;
  }

const page = async ({params}) => {
const id = params.id
const person = await getPerson(id);
console.log(person)
  return (
    <div>
        <p>hello {person.name}</p>
        <div className='relative w-[300px] h-[400px] mx-2 '> 
            <Image src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}`: "/defaultImage.jfif"} width={300} height={400} priority style={{objectFit:'cover',width:'300px',height:'400px'}} alt={person.name} className='rounded-sm'/>
        </div>
    </div>
  )  
}

export default page