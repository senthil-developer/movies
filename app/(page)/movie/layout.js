import Navbar from "@/components/Navbar";
import MainNavbar from "@/components/MainNavbar";
export default function MovieLayout({ children }) {
  const url = "movie";
  return (
    <>
      <MainNavbar url={url} />
      {children}
      <Navbar url={url} />
    </>
  );
}
