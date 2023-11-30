import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Credit = ({credit}) => {
const {cast} = credit;
const topCast = cast.slice(0,14);

 return (
    <div className='flex scroll-x gap-2'>
        {topCast.map((cast)=>{
            return(
                <div className='flex flex-col h-auto gap-1' key={cast.id}>
                    <Link href={{pathname: `/person/${cast.id}`, query: { name: `${cast.name}` },}}  className='text-xs font-bold'> 
                    <div className='flex items-center relative w-[150px] h-[150px] mx-2 rounded-full'> 
                        <Image src={cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}`: "/defaultImage.jfif"} width={150} height={150}  style={{objectFit:'cover',width:'150px',height:'150px'}} alt={cast.name} className='rounded-full object-top'/>
                    </div>
                    </Link>
                    <Link href={{pathname: `/person/${cast.id}`, query: { name: `${cast.name}` },}} className='text-xs font-bold'> 
                    <div className='mt-2 flex flex-col  items-center flex-wrap'> 
                        <p className='text-xs font-bold  whitespace-nowrap'>{cast.name.substring(0,20)}
                            {(cast.name.length > 20) ? (<span>...</span> ) :(<span></span> )}</p>
                        <p className='text-[10px] text-opacity-10'>{cast.character.substring(0,23)}
                            {(cast.character.length > 24) ? (<span>...</span> ) :(<span></span> )}</p>
                    </div>
                    </Link> 
            </div>
            )
        })}
    </div>
  )
}

export default Credit