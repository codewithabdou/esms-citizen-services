import React from "react";
import IMAGES from "../constants/images";

const Talks = () => {
  const talks = [
    {
      title: "The Cryptocurrency",
      desciption: " Contemporary with the Digital art realms.",
    },
    {
      title: "The Cryptocurrency",
      desciption: " Contemporary with the Digital art realms.",
    },
    {
      title: "The Cryptocurrency",
      desciption: " Contemporary with the Digital art realms.",
    },
    {
      title: "The Cryptocurrency",
      desciption: " Contemporary with the Digital art realms.",
    },
  ];

  return (
    <div className="flex h-[90vh] w-full flex-col items-center ">
      <h1 className="my-5  h-[10%] self-center font-title text-3xl drop-shadow-3xl md:text-4xl lg:text-6xl">
        Talks
      </h1>
      <div className="flex h-[90%] w-full items-center justify-center">
        <div className=" h-full w-[90%] overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide ">
          {talks.map((talk, index) => (
            <div key={index} className=" relative inline-block h-[70%] w-[100%] md:h-[80%] md:w-[60%] xl:h-[90%] xl:w-[33%] z-0">
              <img
                className=" absolute top-0 left-0 h-full w-full cursor-pointer object-contain p-2 duration-300 ease-in-out hover:scale-105 -z-30 "
                src={IMAGES.TALK}
                alt="/"
              />
              <div className="flex flex-col items-center pt-24 z-50 h-full w-full  ">
                <h1 className="text-white font-bold font-mono text-2xl md:text-4xl drop-shadow-3xl">{talk.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talks;
