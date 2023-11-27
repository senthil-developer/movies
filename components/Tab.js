'use client'
import {useState} from 'react'
import SwitchTab from './SwitchTab';

const Tab = () => {
    const [activeTab, setActiveTab] = useState('');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }
    console.log(activeTab);
    return (
        <div className='w-full rounded-full  flex items-center justify-between p-2 ' >
            <SwitchTab data={['day','week']} onTab={handleTabChange} />
        </div>
    )
}
export default Tab