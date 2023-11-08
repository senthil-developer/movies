import Image from 'next/image';
import React from 'react'

const Credit = ({credit}) => {
console.log(credit)
const {cast,crew} = credit;
  console.log(cast)
  console.log(crew)
 return (
    <div className='flex scroll-x gap-2'>
        {cast.map((cast)=>{
            return(
                <div className='flex flex-col h-auto gap-3' key={cast.id}>   
                    <div className='flex items-center relative w-[100px] h-[100px] rounded-full'> 
                        <Image src={cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` : "/defaultImage.jfif" } width={100} height={100} style={{objectFit:'cover',width:'100px',height:'100px'}} alt={cast.name} className='rounded-full'/>
                    </div>
                    <div>
                        <p className='text-xs'>{cast.name}</p>
                        <p className='text-xs'>{cast.character}</p>
                    </div>
                </div>
            )
        
        })}
    </div>
  )
}

export default Credit