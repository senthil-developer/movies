import Navbar from "./Navbar"
export default function RootLayout({ children }) {
  
  return (
      <>   
              {children}
              <Navbar/>
      </>
  )
}
