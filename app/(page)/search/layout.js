export const metadata = {
  title: {
    default: "Search",
    template: "%s | Search",
  },
  openGraph: {
    images: ["/search.png"],
  },
};
export default function SearchLayout({ children }) {
  return <>{children}</>;
}
