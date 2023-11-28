import React from 'react'
import Card from '@/components/Card'
import { fetchData } from '@/components/FetchData'

export async function generateMetadata({params}){
  const res = await fetchData(`movie/${params.id}`,'')
  console.log(res)
  const image = res.poster_path.slice(1)
  const url = `https://movieuniverse.vercel.app/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F${image}&w=256&q=75`
  console.log(url)
  return {
    title: res.title,
    description: res.overview,
    openGraph: {
      images: [url],
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