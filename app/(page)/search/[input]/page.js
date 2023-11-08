import React from 'react'

const page = ({params}) => {
const input = params.input
console.log(input)
  return (
    
    <div> 
      {input}</div>
  )
}

export default page