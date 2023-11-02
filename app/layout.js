import './globals.css'
import './scroll.css'
import { Poppins } from 'next/font/google'
import Navbar from './(components)/Navbar'
import Search from './(components)/Search'


const poppins = Poppins({
  subsets: ['latin'] ,
  weight : ["500", "600", "700", "800", "900"]
 })
export const metadata = {
  title: 'movieuniverse',
  description: 'tech stack - next js 13 , react js , tailwind css',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className='scroll'>
      <body className={poppins.className}>    
         <div className='flex w-full '>
            <div className=''>
              <Navbar/>
            </div>
            <div className='flex flex-col w-full'>
             
              <Search/>
              {children}
            </div>
         </div>
      </body>
    </html>
  )
}
