import ExplorePage from '@/components/ExplorePage'
import LoadMore from '@/components/LoadMore'
import {fetchData} from '@/components/FetchData'
import React from 'react'


const page = async () => {
  const res = await fetchData('movie/949229','')
  return (
    <div className='flex flex-col'>
        <p>movie page</p>
        <p>movie page</p>
        <p>movie page</p>
        <p>movie page</p>
        <p>movie page</p>
        <p>movie page</p>
        {/* {res.results.map((item) =>{
          return(
            <div key={item.id} className='p-1 m-1 rounded-md  bg-red-300' >{item.title}</div>
          )
        })} */}
        <ExplorePage />
        {/* <LoadMore/> */}
    </div>
  )
}

export default page