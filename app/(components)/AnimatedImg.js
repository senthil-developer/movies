import Image from 'next/image'
import React from 'react'
import './animate.css'
const AnimatedImg = () => {
  return (
    <div className='relative w-[100px] h-[100px] rounded-full  animate-pulse'> 
         <Image src="/defaultImage.jfif"  width={100} height={100} style={{objectFit:'cover',width:'100px',height:'100px'}} alt='hi' className='rounded-full'/>
        
    </div>
  )
}

export default AnimatedImg