import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};
export default function notFound() {
  const NavLink = [
    {
      link: "/",
      name: "Go Back to Home",
    },
    {
      link: "/movie",
      name: "Movie",
    },
    {
      link: "/series",
      name: "Series",
    },
    {
      link: "/person",
      name: "Person",
    },
    {
      link: "/search",
      name: "Search",
    },
  ];
  return (
    <div className="w-full h-screen flex items-center flex-col md:flex-row md:justify-center gap-10">
      <Image
        src={"/404.png"}
        width={300}
        height={250}
        // style={{ width: "auto", height: "auto" }}
        alt={"404 page not found"}
        className="rounded-2xl mt-32  md:w-[500px] md:h-[400px] lg:w-[600px]  lg:h-[500px] "
        placeholder="blur"
        blurDataURL="/default.png"
      />
      <div className="flex flex-col gap-5 mt-10">
        {NavLink.map((item, i) => (
          <Link
            href={`${item.link}`}
            className="underline-offset-4 underline text-blue-200"
            key={i}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
