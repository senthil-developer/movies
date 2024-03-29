"use client";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { IoLogoGithub, IoIosMail, IoLogoLinkedin } from "react-icons/io";
import Navbar from "@/components/Navbar";
import MainNavbar from "@/components/MainNavbar";
const Provider = ({ children }) => {
  const Links = [
    {
      id: 1,
      icon: <IoLogoGithub />,
      social: "Github",
      link: "https://github.com/senthil-developer/movies",
    },
    {
      id: 2,
      icon: <IoLogoLinkedin />,
      social: "Linkedin",
      link: "https://linkedin.com/in/senthil-k-17629824a",
    },
    {
      id: 3,
      icon: <IoIosMail />,
      social: "Email",
      link: "mailto:senthildeveloper4@gmail.com",
    },
  ];
  return (
    <ThemeProvider enableSystem defaultTheme="system" attribute="class">
      <header>
        <MainNavbar />
      </header>
      <main>{children}</main>
      <footer className="mb-14 mt-5 flex w-full flex-col">
        <div className="flex items-center justify-evenly">
          {Links.map((link) => (
            <Link
              href={link.link}
              key={link.id}
              target="_blank"
              className="text flex items-center gap-2"
            >
              {link.icon} {link.social}
            </Link>
          ))}
        </div>
        <div className="text-center">
          movieuniverse@vercel.app &#169; 2024 All Rights Reserved
        </div>
      </footer>
      <Navbar />
    </ThemeProvider>
  );
};

export default Provider;
