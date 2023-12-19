import Navbar from "@/components/Navbar"
export default function SearchLayout({ children }) {
  
  return (
      <>   
          {children}
          <Navbar url='search'/>
      </> 
  )
}
