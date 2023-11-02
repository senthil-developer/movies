import React from 'react'
import NavItems from './NavItems'
import Image from 'next/image'
import  '@/app/scroll.css'
const Navbar = () => {
  
  return (
    <div className='scroll hidden sticky top-0 sm:flex flex-col h-[100vh]  gap-8 bg-slate-700 text-white pr-5  '>
      <Image src='/logo1.png' className='mx-auto mt-2 ' width={60} height={60} alt='logo' />
      <div>
        <h2 className='text-xl text-opacity-50 text-white'>Genre</h2>
        <div className='flex flex-col pl-3 text-xl'>
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
      <div>
        <h2 className='text-xl text-opacity-50 text-white'>Trending </h2>
        <div className='flex flex-col pl-3'>
          <NavItems title='top rated' link='topRated' />
          <NavItems title='popular' link='popular' />
          <NavItems title='upcoming' link='upcoming' />
          <NavItems title='latest' link='latest' />
          <NavItems title='top today' link='topToday' />
        </div>
      </div>
      <div>
        <h2 className='text-xl text-opacity-50 text-white'>Trending </h2>
        <div className='flex flex-col pl-3'>
          <NavItems title='top rated' link='topRated' />
          <NavItems title='popular' link='popular' />
          <NavItems title='upcoming' link='upcoming' />
          <NavItems title='latest' link='latest' />
          <NavItems title='top today' link='topToday' />
        </div>
      </div>
    </div>
  )
}

export default Navbar