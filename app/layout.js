import { Poppins } from "next/font/google";
import Provider from "@/components/Provider";
import "./globals.css";
import "./scroll.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Movie Universe",
    template: "%s | Movie Universe",
  },
  description: "Latest movies , series , trending movies,person,history",
  keywords:
    "movie,series,trending,person,history,movieuniverse,movieuniverse.vercel.app,latest movies,latest series,latest people,actor history,actress history,",
  openGraph: {
    images: ["/logo1.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-y">
      <body className={`${poppins.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
