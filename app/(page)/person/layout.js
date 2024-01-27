import Navbar from "@/components/Navbar";
import MainNavbar from "@/components/MainNavbar";
export default function PersonLayout({ children }) {
  const url = "person";
  return (
    <>
      <MainNavbar url={url} />
      {children}
      <Navbar url={url} />
    </>
  );
}
