import Navbar from "@/components/Navbar"
export default function PersonLayout({ children }) {
  
  return (
      <>   
          {children}
          <Navbar url='person'/>
      </> 
  )
}
