import React from 'react'
import NavItems from './NavItems'
import Image from 'next/image'
import  '@/app/scroll.css'
const Navbar = () => {
  
  return (
    <div className='w-full  bg-slate-700 text-white  flex'>
      <Image src='/logo1.png' className='w-[60px] h-[60px] my-auto' width={60} height={60} alt='logo' />
      <div>
        <h2 className='text-xl text-opacity-50 text-white'>Genre</h2>
        <div className='flex flex-wrap justify-between items-center'>

          <NavItems title='comedy' link='comedy' />
          <NavItems title='fantasy' link='fantasy' />
          <NavItems title='horror' link='horror' />
          <NavItems title='romance' link='romance' />
          <NavItems title='sci-fi' link='sci-fi' />
          <NavItems title='mystery' link='mystery' />
          <NavItems title='animation' link='animation' />
          <NavItems title='adventure' link='adventure' /> 
          <NavItems title='action' link='action' />
        </div>
      </div>
    </div>
  )
}

export default Navbar