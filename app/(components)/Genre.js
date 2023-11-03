import React from 'react'

const Genre = () => {
  return (
    <div>Genre
        <div className='flex flex-wrap items-center w-full'>
          <GenreItems title='comedy'/>
          <GenreItems title='fantasy'/>
          <GenreItems title='horror'/>
          <GenreItems title='romance'/>
          <GenreItems title='sci-fi'/>
          <GenreItems title='mystery'/>
          <GenreItems title='animation'/>
          <GenreItems title='adventure'/> 
          <GenreItems title='action'/>
        </div>
    </div>
  )
}

export default Genre