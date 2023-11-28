import React from 'react'
import Card from '@/components/Card'
import { fetchData } from '@/components/FetchData'

export async function generateMetadata({params}){
  const res = await fetchData(`movie/${params.id}`,'')
  console.log(res)
  return {
    title: res.title,
    description: res.overview,
    openGraph: {
      images: [`https://image.tmdb.org/t/p/original${res.backdrop_path}`],
}}
}
const page = async ({params}) => {
  return (
    <div>
      <Card res={params.id} />
    </div>
  )
}

export default page