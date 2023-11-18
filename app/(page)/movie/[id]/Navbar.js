'use client'
import  '@/app/scroll.css'
import {BsSearch} from 'react-icons/bs'
import '@/app/(components)/navbar.css'
import Link from 'next/link'
import { GoHome } from 'react-icons/go'
import { FaHome } from 'react-icons/fa' 
import {BiSolidMoviePlay } from 'react-icons/bi' 
import { usePathname} from 'next/navigation';
import { RiSearchFill } from 'react-icons/ri'
import { IoPeopleOutline, IoPeopleSharp } from 'react-icons/io5'
import { PiTelevisionSimple, PiTelevisionSimpleFill } from 'react-icons/pi'

const Navbar = () => {
const path = usePathname()
  return (
    <div className='bg-black w-full flex py-1 header sticky bottom-0 md:hidden text-white items-center justify-between px-7 backdrop-blur-[3.5px] overflow-hidden z-50'>
        <Link className='' href='/'>{path === '/' ? <FaHome size={25}/> : <GoHome size={25}/>}</Link>
        <Link className='' href='/movie'>{<BiSolidMoviePlay size={25}/>}</Link>
        <Link className='' href='/search'>{path === '/search' ?<RiSearchFill size={25}/>: <BsSearch size={20}/>  }</Link>
        <Link className='' href='/series'>{path === '/series' ? <PiTelevisionSimpleFill size={25}/> :<PiTelevisionSimple size={25}/>}</Link>
        <Link className='' href='/person'>{path === '/person' ? <IoPeopleSharp size={25}/> : <IoPeopleOutline size={25}/>}</Link>
    </div>
  )
}

export default Navbar