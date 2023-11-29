import React from 'react'

const Career = ({res,index}) => {
    // console.log(res)
  return (
    <div className='flex gap-3 items-start w-full p-2 border-2 border-red-400 rounded-md my-2  bg-red-200  text-black font-bold text-lg   '>
        <p className='w-8 border-2 border-red-400'>no{index+1}</p>
        <div className='w-25 border-2 border-red-400'>{res.release_date}</div>
        <div className='min-w-25 max-w-25 h-20 border-2 border-red-400 '>{res.title}</div>
        <div className='w-25 h-20 border-2 border-red-400'>{res.character}</div>
    </div>
  )
}

export default Career