import Image from 'next/image'
import React from 'react'
export default function AnimatedImg() {
  return (
    <div className='relative w-[100px] h-[100px] rounded-full  animate-pulse'> 
         <Image src="/default.png"  width={100} height={100} style={{objectFit:'cover',width:'100px',height:'100px'}} alt='hi' className='rounded-full'/>
        
    </div>
  )
}

