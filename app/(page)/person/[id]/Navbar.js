'use client'
import  '@/app/scroll.css'
import {RiSearchFill} from 'react-icons/ri'
import '@/app/(components)/navbar.css'
import Link from 'next/link'
import { GoHome } from 'react-icons/go'
import { FaHome } from 'react-icons/fa' 
import { BsSearch } from 'react-icons/bs' 
import {BiMoviePlay, BiSolidMoviePlay } from 'react-icons/bi' 
import {IoPeopleSharp } from 'react-icons/io5' 
import { usePathname} from 'next/navigation';
import { PiTelevisionSimple, PiTelevisionSimpleFill } from 'react-icons/pi'

const Navbar = () => {
const path = usePathname()
  return (
    <div className='bg-black w-full py-1 flex header md:hidden sticky bottom-0  text-white items-center justify-between px-7 backdrop-blur-[3.5px] overflow-hidden z-50'>
        <Link className='' href='/'>{path === '/' ? <FaHome size={25}/> : <GoHome size={25}/>}</Link>
        <Link className='' href='/movie'>{path == '/movie' ? <BiSolidMoviePlay  size={25}/> : <BiMoviePlay size={25}/>}</Link>
        <Link className='' href='/search'>{path === '/search' ?<RiSearchFill size={25}/> : <BsSearch size={20}/>  }</Link>
        <Link className='' href='/series'>{path === '/series' ? <PiTelevisionSimpleFill size={25}/> :<PiTelevisionSimple size={25}/>}</Link>
        <Link className='' href='/person'>{<IoPeopleSharp size={25}/>}</Link>
    </div>
  )
}

export default Navbar