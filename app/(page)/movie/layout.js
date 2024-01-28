export const metadata = {
  title: {
    default: "Movie",
    template: "%s | Movie",
  },
  openGraph: {
    images: ["/movie.png"],
  },
};
export default function MovieLayout({ children }) {
  return <>{children}</>;
}
