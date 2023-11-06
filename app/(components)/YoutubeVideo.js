 'use client'
import React from 'react'
const YoutubeVideo = ({item}) => {
    
    return (
      <div  className='w-full flex scroll-x py-2 gap-2'>
              {item.map((item)=>{
                return(
                  <iframe key={item.id} width="320" height="200" src={`https://www.youtube.com/embed/${item.key}`} title={item.name} id={item.name}  frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                )
              })}
              

      </div>
    )
  }
  
  export default YoutubeVideo