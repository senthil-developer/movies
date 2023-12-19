import Navbar from "@/components/Navbar"
export default function SeriesLayout({ children }) {
  
  return (
      <>   
          {children}
          <Navbar url='series'/>
      </> 
  )
}
