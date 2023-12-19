'use client'
import {useState,useEffect, Suspense} from 'react'
import SwitchTab from './SwitchTab';
import { fetchData } from './FetchData';
import Test from './Test';
import SkeletonLoading from './SkeletonLoading';

const Tab = ({path}) => {
    const [activeTab, setActiveTab] = useState('day'); 
    const [data, setData] = useState();
    const handleTabChange = (tab)=>{
        setActiveTab(tab ? tab : 'day')
    }
    useEffect(() => {
        fetchData(`trending/${path}/${activeTab}`,'').then((res)=>{setData(res.results)}); 
    },[activeTab])
    const results = data
    return (
        <>
            <div className='w-full rounded-full  flex items-center justify-between p-2 ' >
                <h2>Trending {path === 'tv' ? 'series' : path}</h2>
                <SwitchTab data={['day','week']} onTab={handleTabChange} />
            </div>
            <div className='w-full scroll-x flex gap-3'>
            {results?.map((result)=>(
            result ?  <Test key={result.id} results={result}/>
            : <SkeletonLoading/>
            ))}
            </div>
        </>    
    )
}
export default Tab