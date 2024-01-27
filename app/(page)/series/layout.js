import Navbar from "@/components/Navbar";
import MainNavbar from "@/components/MainNavbar";
export default function SeriesLayout({ children }) {
  const url = "series";
  return (
    <>
      <MainNavbar url={url} />
      {children}
      <Navbar url={url} />
    </>
  );
}
