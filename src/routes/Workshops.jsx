import React, { useEffect } from "react";
import IMAGES from "../constants/images";

const Workshops = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workshops = [
    {
      title: "The Cryptocurrency",
      owner: { name: "SoulCurryArt", pic: IMAGES.OWNER },
      desciption: " Contemporary with the Digital art realms.",
    },
    {
      title: "Technology And Sustainable Development",
      owner: { name: "SoulCurryArt", pic: IMAGES.OWNER },
      desciption: " Contemporary with the Digital art realms.",
    },
    {
      title: "Transport problems and how to solve them using technology",
      owner: { name: "SoulCurryArt", pic: IMAGES.OWNER },
      desciption: " Contemporary with the Digital art realms.",
    },
    {
      title: "Problem Solving",
      owner: { name: "SoulCurryArt", pic: IMAGES.OWNER },
      desciption: " Contemporary with the Digital art realms.",
    },
  ];

  return (
    <div className="flex h-[90vh] w-full flex-col">
      <h1 className="my-5 h-[10%] self-center font-title text-2xl drop-shadow-3xl md:text-3xl lg:text-5xl">
        Workshops
      </h1>
      <div className="mb-5 grid h-[90%] w-full  grid-cols-1 items-center justify-items-center gap-10 xl:grid-cols-2 xl:px-10">
        {workshops.map((workshop, index) => (
          <div
            key={index}
            className=" flex h-[100%] w-[90%] cursor-pointer items-center justify-center gap-y-10 rounded-xl border-2 border-black bg-[#547793] py-2 px-2 transition duration-300 hover:scale-105 md:grid-cols-2 lg:h-[90%] lg:w-[80%]"
          >
            <h1 className="col-span-1 text-center font-mono  text-3xl font-bold leading-relaxed tracking-wide text-white drop-shadow-3xl">
              {workshop.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;
