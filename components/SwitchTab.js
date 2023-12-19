'use client'
import {useState} from 'react'

const SwitchTab = ({data,onTab}) => {
  const [selectedTab,SetSelectedTab] = useState(0)
  const [bg,SetBg] = useState(0)
  const activeTab = (tab,index)=>{
    SetBg(index*100);
    setTimeout(()=>{
        SetSelectedTab(index)
    },0)
    onTab(tab,index)
  }
  return (
    <div className='relative flex items-center'>
        {data.map((tab,index)=>(
            <div key={index} className={`w-[50px] h-[30px] rounded-full  cursor-pointer flex justify-center items-center z-10 ${(index==selectedTab)?"bg-red-500":""}`} onClick={()=>activeTab(tab,index)}>
                {tab}  {console.log(tab)}
            </div>
        ))}
        <span className='absolute w-[50px] h-[50px] rounded-full  left-0 transition-all' style={{bg}}/>
    </div>
  )
}

export default SwitchTab