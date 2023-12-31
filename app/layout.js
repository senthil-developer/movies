import './globals.css'
import './scroll.css'
import { Poppins } from 'next/font/google'
import MainNavbar from '@/components/MainNavbar'
import Provider from '@/components/Provider'
const poppins = Poppins({
  subsets: ['latin'] ,
  weight : ["500", "600", "700", "800", "900"]
 })
export const metadata = {
  title: 'movie universe',
  description: 'tech stack - next js 13 , react js , tailwind css',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" suppressHydrationWarning  className='scroll-y'>
      <body className={`${poppins.className} antialiased`}> 
      <Provider>
          <MainNavbar/>  
          {children}
      </Provider>
      </body>
    </html>
  )
}
