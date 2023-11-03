import React from 'react'
import Link from 'next/link'

const NavItems =  ({title,link}) => {
  return (
    <div className='p-2 m-2 rounded-3xl border-2 border-white-500 hover:text-amber-600 hover:border-amber-600   active:bg-white active:bg-opacity-50  active:transition-all active:duration-300'>
        <Link href={link}>{title}</Link>
    </div>
        
  )
}

export default NavItems