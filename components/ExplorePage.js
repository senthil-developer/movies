'use client'
import React from 'react'
import Select from 'react-select'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const ExplorePage = () => {
  const options = [
      { value: 'Action', label: 'Action' },
      { value: 'Drama', label: 'Drama' },
      { value: 'Crime', label: 'Crime' },
      { value: 'Fantasy', label: 'Fantasy' },
      { value: 'Comedy', label: 'Comedy' },
      { value: 'Horror', label: 'Horror' },
      { value: 'Thriller', label: 'Thriller' },
      { value: 'Romance', label: 'Romance' },
      { value: 'Documentary', label: 'Documentary' },
      { value: 'Sci-Fi', label: 'Sci-Fi' },
      { value: 'Adventure', label: 'Adventure' },
      { value: 'Animation', label: 'Animation' },
      { value: 'Family', label: 'Family' },
      { value: 'Mystery', label: 'Mystery' },
      { value: 'History', label: 'History' },
      { value: 'Western', label: 'Western' },
      { value: 'War', label: 'War' },
      { value: 'Music', label: 'Music' },
  ]
const router = useRouter()
// push the options like movie/${options}
  const handleSubmit = (e) => {
      e.preventDefault()
    router.push(`/movie/${options}`)
  }
  const [genre, setGenre] = useState([])
    const onChange = (selectedOptions) => {
      setGenre(selectedOptions)
    }
    console.log(genre)
  return(
    <>
      <form onSubmit={handleSubmit}>
        <Select  name="genres" isMulti
        closeMenuOnSelect={false}
        options={options}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.id}
        onChange={onChange}
        placeholder="Select genres" noOptionsMessage={()=>{'no more genre available'}}
        className="" />
      </form>
      
    </>
  )
}

export default ExplorePage
    //   <Theme>  
    //     <DropdownMenu.Root>
    //      <DropdownMenu.Trigger>
    //        <Button variant='solid' className='flex items-center border-2 border-gray-500 rounded-sm'>
    //         Sort by Genre <CaretDownIcon/>
    //        </Button>
    //      </DropdownMenu.Trigger>
    //      <DropdownMenu.Content className=''>
    //         <DropdownMenu.Item>Action</DropdownMenu.Item>
    //         <DropdownMenu.Item>Drama</DropdownMenu.Item>
    //         <DropdownMenu.Item>Crime</DropdownMenu.Item>
    //         <DropdownMenu.Item>Fantasy</DropdownMenu.Item>
    //      </DropdownMenu.Content>
    //     </DropdownMenu.Root>
    //   </Theme>  