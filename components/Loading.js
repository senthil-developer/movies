'use server'
import React from 'react'

export const loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <p className='mr-2'>Loading...</p>
        <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-red-700'>
        </div>
    </div>
  )
}
