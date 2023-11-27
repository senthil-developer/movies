import React from 'react'
import Card from '@/components/Card'

const page = ({params}) => {
  return (
    <div>
      <Card res={params.id} />
    </div>
  )
}

export default page