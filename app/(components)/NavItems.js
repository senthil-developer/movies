import React from 'react'
import Link from 'next/link'

const NavItems =  ({title,link}) => {
  return (
    <div>
        <Link href={link} className='hover:text-amber-600 from-slate-400  to-red-600  active:bg-opacity-50 active:transition-all'>{title}</Link>
        
    </div>
  )
}

export default NavItems