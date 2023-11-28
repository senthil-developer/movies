'use client'
import {useState,useEffect} from 'react'
import SwitchTab from './SwitchTab';
import { fetchData } from './FetchData';
import Test from './Test';
import Image from 'next/image';

const Tab = () => {
    const [activeTab, setActiveTab] = useState('day');
    const [data, setData] = useState();
    const [initialRender, setInitialRender] = useState(true);
    const handleTabChange = (tab) => {
        setActiveTab( tab === 'day' ? 'day' : 'week');
    }
    useEffect(() => {
        if(initialRender){
            setInitialRender(false)
            fetchData(`trending/movie/${activeTab}`,'').then((res)=>{setData(res.results)}); 
        }
    },[data,initialRender])
    const results = data
    return (
        <>
            <div className='w-full rounded-full  flex items-center justify-between p-2 ' >
                <SwitchTab data={['day','week']} onTab={handleTabChange} />
            </div>
            <div className='w-full scroll-x flex gap-3 '>
               {results ? <Test results={results}/> : 'wtf'}
            </div>
        </>    
    )
}
export default Tab