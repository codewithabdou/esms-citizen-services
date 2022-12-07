import React from "react";
import IMAGES from "../constants/images";

const Workshops = () => {
  const workshops = [
    {
      title: "The Cryptocurrency",
      owner: { name: "SoulCurryArt", pic: IMAGES.OWNER },
      desciption: " Contemporary with the Digital art realms.",
    },
    {
      title: "The Cryptocurrency",
      owner: { name: "SoulCurryArt", pic: IMAGES.OWNER },
      desciption: " Contemporary with the Digital art realms.",
    },
    {
      title: "The Cryptocurrency",
      owner: { name: "SoulCurryArt", pic: IMAGES.OWNER },
      desciption: " Contemporary with the Digital art realms.",
    },
    {
      title: "The Cryptocurrency",
      owner: { name: "SoulCurryArt", pic: IMAGES.OWNER },
      desciption: " Contemporary with the Digital art realms.",
    },
  ];

  return (
    <div className="flex h-[90vh] w-full flex-col">
      <h1 className="my-5  h-[10%] self-center font-title text-3xl drop-shadow-3xl md:text-4xl lg:text-6xl">
        Workshops
      </h1>
      <div className="mb-5 grid h-[90%]  w-full grid-cols-1 items-center justify-items-center gap-8 xl:grid-cols-2">
        {workshops.map((workshop, index) => (
          <div className="center grid h-[100%] w-[90%] grid-cols-1 items-center justify-items-center gap-y-10 rounded-xl bg-[#547793] py-10 md:grid-cols-2">
            <h1 className="col-span-1 text-center font-title text-3xl text-white drop-shadow-3xl">
              {workshop.title}
            </h1>
            <div className="col-span-1 h-fit w-[90%] space-y-5 rounded-xl bg-white p-4">
              <div className="flex items-center gap-x-10">
                <img
                  src={workshop.owner.pic}
                  alt="ownerImg"
                  className="h-16 object-contain"
                />
                <h3 className="font-bold">{workshop.owner.name}</h3>
              </div>
              <p>{workshop.desciption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;
