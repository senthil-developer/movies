'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { BsFillMoonFill } from 'react-icons/bs'
import { MdLightMode } from 'react-icons/md'

const DarkModeToggle =  () => {
const {systemTheme,setTheme,theme} = useTheme()
const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {currentTheme === 'dark' ? <MdLightMode size={30} onClick={()=>setTheme('light')}/> : <BsFillMoonFill size={30} onClick={()=>setTheme('dark')}/>}
    </>
        
  )
}

export default DarkModeToggle