'use client'
import {useState,useEffect, Suspense} from 'react'
import SwitchTab from './SwitchTab';
import { fetchData } from './FetchData';
import Test from './Test';
import {loading} from './Loading';

const Tab = ({path}) => {
    const [activeTab, setActiveTab] = useState('day'); 
    const [data, setData] = useState();
    useEffect(() => {
        const fetch = fetchData(`trending/${path}/${activeTab}`,'').then((res)=>{setData(res.results)}); 
    },[activeTab])
    const results = data
    return (
        <>
            <div className='w-full rounded-full  flex items-center justify-between p-2 ' >
                <h2>Trending {path === 'tv' ? 'series' : path}</h2>
                <SwitchTab data={['day','week']} onTab={(tab)=>setActiveTab(tab === 'day' ? 'day' : 'week')} />
            </div>
            <div className='w-full scroll-x flex gap-3'>
            {results?.map((results)=>(
            <Test key={results.id} results={results}/>))}  
            </div>
        </>    
    )
}
export default Tab