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
    <div className="flex h-screen w-full flex-col items-center gap-10 md:flex-row md:justify-center">
      <Image
        src={"/404.png"}
        width={300}
        height={250}
        // style={{ width: "auto", height: "auto" }}
        alt={"404 page not found"}
        className="mt-32 rounded-2xl  md:h-[400px] md:w-[500px] lg:h-[500px]  lg:w-[600px] "
        placeholder="blur"
        blurDataURL="/default.png"
      />
      <div className="mt-10 flex flex-col gap-5">
        {NavLink.map((item, i) => (
          <Link
            href={`${item.link}`}
            className="text-blue-200 underline underline-offset-4"
            key={i}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
