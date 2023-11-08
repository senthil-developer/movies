 'use client'
import Image from 'next/image'
import React from 'react'

const YoutubeVideo = ({item}) => {
  // const video = item.map((item)=>{
  //   return(
  //  <iframe key={item.id} width="320" height="200" src={`https://www.youtube.com/embed/${item.key}`} title={item.name} id={item.name} aria-label={item.name}  frameBorder="0"  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     
      
  //   )
  // })
    return (
      <div  className='w-full flex scroll-x py-2 gap-2' >
        {item.map((item)=>{
          // console.log(item.key) 

          return(
            // <div className=' w-[320px] h-[200px]' >
              <Image src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}  alt="video" width={320} height={200} key={item.id} style={{width: 'auto',height:'auto',}} className=' w-auto h-auto  ' priority={false} placeholder='blur'  blurDataURL='/logo1.png'/>
            // </div> 
            )})}
      </div>
    )
    }
  
  export default YoutubeVideo