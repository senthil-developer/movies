import React from 'react'
import Image from 'next/image'
import  '@/app/scroll.css'
import Search from './Search'
import Link from 'next/link'
const Navbar = () => {
  
  return (
    <div className='w-full flex sticky top-0 bg-slate-700 text-white py-5 items-center '>
      <Link href='/'>
          <Image src='/logo1.png' className='w-10 h-10 sm:w-[60px] sm:h-[60px] ml-2' width={60} height={60} alt='logo' /> 
      </Link>
      <div className='ml-2 flex gap-2 text-xl'>
          <Link className='border-2 bg-red-300 p-1' href='/movies'>movies</Link>
          <Link className='border-2 bg-red-300 p-1' href='/series'>series</Link>
          {/* <Search/> */}
      </div>
    </div>
  )
}

export default Navbar