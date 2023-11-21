'use client'
import React from 'react'
import {BsSearch} from 'react-icons/bs'
import './navbar.css'
import Link from 'next/link'
import { GoHome } from 'react-icons/go'
import { FaHome } from 'react-icons/fa' 
import { BiMoviePlay,BiSolidMoviePlay } from 'react-icons/bi' 
import { usePathname} from 'next/navigation';
import { IoPeopleOutline, IoPeopleSharp } from 'react-icons/io5'
import { RiSearchFill } from 'react-icons/ri'
import { PiTelevisionSimple, PiTelevisionSimpleFill } from 'react-icons/pi'

const Navbar = () => {
const path = usePathname()
  return (
      // mobile navbar
      
        <div className='w-full flex header sticky bottom-0 md:hidden py-1 px-7 text-[10px] text-gray-400 bg-gray-800  items-center justify-between overflow-hidden z-50'>
        <Link className={path === '/' ? 'text-white flex flex-col items-center' : 'flex flex-col items-center'  } href='/'>{path === '/' ? <FaHome size={25} /> : <GoHome size={25}/>}Home</Link>
        <Link className={path === '/movie' ? 'text-white flex flex-col items-center' : 'flex flex-col items-center'  } href='/movie'>{path == '/movie' ? <BiSolidMoviePlay size={25}/> : <BiMoviePlay size={25}/>}Movies</Link>
        <Link className={path === '/search' ? 'text-white flex flex-col items-center' : 'flex flex-col items-center'  } href='/search'>{path === '/search' ?<RiSearchFill size={25} />: <BsSearch size={25} className='p-0.5'/>}Search</Link>
        <Link className={path === '/series' ? 'text-white flex flex-col items-center' : 'flex flex-col items-center'  } href='/series'>{path === '/series' ? <PiTelevisionSimpleFill size={25}/> :<PiTelevisionSimple size={25}/>}Series</Link>
        <Link className={path === '/person' ? 'text-white flex flex-col items-center' : 'flex flex-col items-center'  } href='/person'>{path === '/person' ? <IoPeopleSharp size={25}/> : <IoPeopleOutline size={25}/>}Peoples</Link>
    </div>
  )
}

export default Navbar
