import Dayjs from '@/components/Dayjs';
import { fetchData } from '@/components/FetchData';
import Image from 'next/image';
import React from 'react'


export async function generateMetadata({params}){
    const person = await fetchData(`person/${params.id}`,'')
    const image = person.profile_path.slice(1)
    const url = `https://movieuniverse.vercel.app/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F${image}&w=256&q=75`
    const dept = person?.known_for_department == 'Acting' && person?.gender == 2 ? 'Actor': '' || person?.known_for_department == 'Acting' && person?.gender == 1 ? 'Actress': ''|| person?.known_for_department == 'Writing' ? 'Writer': '' || person?.known_for_department == 'Directing' ? 'Director': '' || person?.known_for_department == 'Editing' ? 'Editor': '' || person?.known_for_department == 'Production' ? 'Producer': '' || person?.known_for_department == 'Sound' ? 'Music Composer': '' || person?.known_for_department == 'Camera' ? 'Cinematographer': '' || person?.known_for_department == 'Crew' ? 'Stunts': '' || person?.known_for_department == 'Art' ? 'Art Department': '' || person?.known_for_department == 'Visual Effects' ? 'VFX Artist': '' || person?.known_for_department == 'Lighting' ? 'Lighting Artist': '' || person?.known_for_department == 'Costume & Make-Up' ? 'Costume Designer': '';
    return {
      title: `${person.name} | ${dept}` ,
      description: person.biography,
      openGraph: {
        images: [url],
  }}
  }
const page = async ({params}) => {
  const person = await fetchData(`person/${params.id}`,''); 
  const dept = person?.known_for_department == 'Acting' ? 'Actor': '' || person?.known_for_department == 'Writing' ? 'Writer': '' || person?.known_for_department == 'Directing' ? 'Director': '' || person?.known_for_department == 'Editing' ? 'Editor': '' || person?.known_for_department == 'Production' ? 'Producer': '' || person?.known_for_department == 'Sound' ? 'Music Composer': '' || person?.known_for_department == 'Camera' ? 'Cinematographer': '' || person?.known_for_department == 'Crew' ? 'Stunts': '' || person?.known_for_department == 'Art' ? 'Art Department': '' || person?.known_for_department == 'Visual Effects' ? 'VFX Artist': '' || person?.known_for_department == 'Lighting' ? 'Lighting Artist': '' || person?.known_for_department == 'Costume & Make-Up' ? 'Costume Designer': '';
  return (
    <div className='mt-8'>
        <p>hello {person.name}</p>
        <p> {person?.gender==1 && person?.known_for_department == 'Acting'  ? 'Actress' : dept }</p>
        <div className='flex gap-2 '><span>Born</span> <Dayjs res={person}/> </div>
        <div className='md:flex px-2 gap-2 w-full'>
          <div className='relative w-[200px] h-[300px]'> 
              <Image src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}`: "/defaultImage.jfif"} width={200} height={300} priority style={{objectFit:'cover',width:'200px',height:'300px'}} alt={person.name} className='rounded-sm'/>
          </div>
        </div>
          <div className='text-sm'>
              {person.biography}
          </div>
    </div>
  )  
}

export default page