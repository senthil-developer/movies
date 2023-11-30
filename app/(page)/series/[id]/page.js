import React from 'react'
import Card from '@/components/Card'
import { fetchData } from '@/components/FetchData'

export async function generateMetadata({params}){
  const res = await fetchData(`tv/${params.id}`,'')
  const image = res.poster_path.slice(1)
  const url = `https://movieuniverse.vercel.app/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F${image}&w=640&q=75`
  return {
    title: `${res.name} | Series`,
    description: res.overview,
    openGraph: {
      images: [url],
}}
}
const seriesId = async ({params}) => {
  return (
    <div>
      <Card id={`tv/${params.id}`} />
    </div>
  )
}

export default seriesId