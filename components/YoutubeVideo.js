'use client'
import Image from 'next/image'
import React from 'react'

const YoutubeVideo = ({item}) => {
  // console.log(item)
  const {results} = item
  // console.log(results)
  // console.log(results.map(r=>r.id))
  // const video = item.map((item)=>{
  //   return(
  //  <iframe key={item.id} width="320" height="200" src={`https://www.youtube.com/embed/${item.key}`} title={item.name} id={item.name} aria-label={item.name}  frameBorder="0"  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     
      
  //   )
  // })
    return (
      <div  className='w-full flex scroll-x py-2 gap-2' >
        {results.map((item)=>{
          // placeholder='blur' blurDataURL={loading}  console.log(item) 

          return(
              <Image src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`} width={320} height={200} style={{width:'320px',height:'200px'}} alt={item.name} className='place-content-center' key={item.id} />
            )})}
      </div>
    )
    }
  
  export default YoutubeVideo