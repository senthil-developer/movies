'use client'
import {RiSearchFill} from 'react-icons/ri'
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
    <div className='w-full flex header sticky bottom-0 md:hidden py-1 px-7 text-[10px] text-gray-400 bg-gray-800  items-center justify-between overflow-hidden z-50'>
        <Link className={path === '/' ? 'text-white flex flex-col items-center' : 'flex flex-col items-center'  } href='/'>{path === '/' ? <FaHome size={25}/> : <GoHome size={25}/>}Home</Link>
        <Link className={path === '/movie' ? 'text-white flex flex-col items-center' : 'flex flex-col items-center'  } href='/movie'>{path == '/movie' ? <BiSolidMoviePlay  size={25}/> : <BiMoviePlay size={25}/>}Movie</Link>
        <Link className={path === '/search' ? 'text-white flex flex-col items-center' : 'flex flex-col items-center'  } href='/search'>{path === '/search' ?<RiSearchFill size={25}/> : <BsSearch size={25} className='p-0.5'/>  }Search</Link>
        <Link className={path === '/series' ? 'text-white flex flex-col items-center' : 'flex flex-col items-center'  } href='/series'>{path === '/series' ? <PiTelevisionSimpleFill size={25}/> :<PiTelevisionSimple size={25}/>}Series</Link>
        <Link className='text-white flex flex-col items-center' href='/person'>{<IoPeopleSharp size={25}/>}Peoples</Link>
    </div>
  )
}

export default Navbar