import React from 'react'
import Image from 'next/image'
import DarkModeToggle from './DarkModeToggle'

const Theme = () => {
  return (
    <div className='px-2 z-20 w-full flex justify-between sticky top-0 backdrop-blur-[3.5px]'>
      <div className='relative w-auto h-auto'>
        <Image src='/logo1.png' alt='logo' width={30} height={30}  style={{objectFit:'cover',width:'30px',height:'30px'}}  className='rounded-lg w-auto h-auto'/>
      </div> 
        <ul className='flex justify-between items-center gap-3'>
          <li>Movie</li>
          <li>Series</li>
          <li>people</li>
        </ul>
      <div>
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Theme