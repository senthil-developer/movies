import React from "react";
import Dayjs from "@/components/Dayjs";
import { fetchData } from "@/components/FetchData";
import Test from "@/components/Test";
import Image from "next/image";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export async function generateMetadata({ params }) {
  const person = await fetchData(`person/${params.id}`, "");
  const dept =
    person?.known_for_department == "Acting" && person?.gender == 2
      ? "Actor"
      : "" || (person?.known_for_department == "Acting" && person?.gender == 1)
        ? "Actress"
        : "" || person?.known_for_department == "Writing"
          ? "Writer"
          : "" || person?.known_for_department == "Directing"
            ? "Director"
            : "" || person?.known_for_department == "Editing"
              ? "Editor"
              : "" || person?.known_for_department == "Production"
                ? "Producer"
                : "" || person?.known_for_department == "Sound"
                  ? "Music Composer"
                  : "" || person?.known_for_department == "Camera"
                    ? "Cinematographer"
                    : "" || person?.known_for_department == "Crew"
                      ? "Stunts"
                      : "" || person?.known_for_department == "Art"
                        ? "Art Department"
                        : "" || person?.known_for_department == "Visual Effects"
                          ? "VFX Artist"
                          : "" || person?.known_for_department == "Lighting"
                            ? "Lighting Artist"
                            : "" ||
                                person?.known_for_department ==
                                  "Costume & Make-Up"
                              ? "Costume Designer"
                              : "";
  const image = person.profile_path.slice(1);
  const url = person.profile_path
    ? `${process.env.SITE_URL}/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F${image}&w=640&q=75`
    : "/default.png";
  return {
    title: `${person.name} | ${dept}`,
    description: person.biography,
    openGraph: {
      images: [url],
    },
  };
}

function compare(a, b) {
  const dateA = a.release_date;
  const dateB = b.release_date;
  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return comparison;
}

const page = async ({ params }) => {
  const person = await fetchData(`person/${params.id}`, "");
  const combinedCredit = await fetchData(
    `person/${params.id}/combined_credits`,
    "",
  );
  const movieCredit = await fetchData(`person/${params.id}/movie_credits`, "");
  const tvCredit = await fetchData(`person/${params.id}/tv_credits`, "");
  const know_for = combinedCredit.cast.slice(0, 15);
  const cast = combinedCredit.cast.sort(compare);

  const dept =
    person?.known_for_department == "Acting"
      ? "Actor"
      : "" || person?.known_for_department == "Writing"
        ? "Writer"
        : "" || person?.known_for_department == "Directing"
          ? "Director"
          : "" || person?.known_for_department == "Editing"
            ? "Editor"
            : "" || person?.known_for_department == "Production"
              ? "Producer"
              : "" || person?.known_for_department == "Sound"
                ? "Music Composer"
                : "" || person?.known_for_department == "Camera"
                  ? "Cinematographer"
                  : "" || person?.known_for_department == "Crew"
                    ? "Stunts"
                    : "" || person?.known_for_department == "Art"
                      ? "Art Department"
                      : "" || person?.known_for_department == "Visual Effects"
                        ? "VFX Artist"
                        : "" || person?.known_for_department == "Lighting"
                          ? "Lighting Artist"
                          : "" ||
                              person?.known_for_department ==
                                "Costume & Make-Up"
                            ? "Costume Designer"
                            : "";
  const res = cast.map((cast) => ({
    id: cast.id,
    year: cast?.release_date?.substring(0, 4),
    title: cast?.title,
    character: cast.media_type === "movie" ? cast?.character : undefined,
  }));
  return (
    <div className="mx-auto mt-8 w-full lg:w-[80%]">
      <div className=" mx-auto flex max-w-fit gap-10">
        <div className="my-auto">
          <span className="flex">
            Name : <h1> {person.name}</h1>
          </span>
          <p>
            {" Known as : "}
            {person?.gender == 1 && person?.known_for_department == "Acting"
              ? "Actress"
              : dept}
          </p>
          <div className="flex gap-2 ">
            <span>Born : </span> <Dayjs res={person} />
          </div>
        </div>
        <div className="relative h-[300px] w-[200px]">
          <Image
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/original${person.profile_path}`
                : "/defaultImage.jfif"
            }
            width={200}
            height={300}
            priority
            style={{ objectFit: "cover", width: "200px", height: "300px" }}
            alt={person.name}
            className="rounded-sm"
          />
        </div>
      </div>
      <div className="text-sm">{person.biography.substring(0, 500)}</div>
      <p>Known for</p>
      <div className="scroll-x flex w-full gap-3">
        {combinedCredit.cast.map((res) => {
          return <Test key={res.id} results={res} />;
        })}
      </div>
      <p>
        Career as{" "}
        {person?.gender == 1 && person?.known_for_department == "Acting"
          ? "Actress"
          : dept}
      </p>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={res} />
      </div>
    </div>
  );
};

export default page;
