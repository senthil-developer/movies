import React from 'react'

const NavItems =  ({title}) => {
  return (
    <div className='p-2 m-2 rounded-3xl border-2 dark:border-pink-500 border-white hover:text-amber-600 hover:border-amber-600   active:bg-white active:bg-opacity-50  active:transition-all active:duration-300'>
          {title}
    </div>
        
  )
}

export default NavItems