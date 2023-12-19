import Navbar from "@/components/Navbar"
export default function MovieLayout({ children }) {
  
  return (
      <>   
          {children}
          <Navbar url='movie'/>
      </> 
  )
}
