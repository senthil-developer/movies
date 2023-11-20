import React from 'react'
import Card from '@/app/(components)/Card'

// get current url in server side component nextjs 13

// import { useRouter } from 'next/router'





const page = ({params}) => {
  return (
    <div>
      <Card res={params.id} />
    </div>
  )
}

export default page