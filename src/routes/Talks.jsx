import React from "react";
import IMAGES from "../constants/images";

const Talks = () => {
  const talks = [
    {
      talker: {
        desciption: "MIT searcher",
        name: "Ryad Baghdadi",
        pic: IMAGES.TALKER1,
      },
    },
    {
      talker: {
        desciption: " lead for web at google ",
        name: "Paul kinlan",
        pic: IMAGES.TALKER2,
      },
    },
    {
      talker: {
        desciption: "CTO evangelist at Grandle",
        name: "Justin Reock",
        pic: IMAGES.TALKER3,
      },
    },
    {
      talker: {
        desciption: "Writer and cs researcher",
        name: "Abderrahmane Kheddar",
        pic: IMAGES.TALKER4,
      },
    },
  ];

  return (
    <div className="flex h-[90vh] w-full flex-col items-center ">
      <h1 className="my-5 h-[10%] self-center font-title text-3xl drop-shadow-3xl md:text-4xl lg:text-6xl">
        Talks
      </h1>
      <div className="flex h-[90%] w-full items-center justify-center">
        <div className=" h-full w-[90%] gap-x-4 overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide ">
          {talks.map((talk, index) => (
            <div
              key={index}
              className=" relative z-0 inline-block h-[70%] w-[100%] cursor-pointer duration-300 ease-in-out hover:scale-105 md:h-[80%] md:w-[60%] xl:h-[90%] xl:w-[33%]"
            >
              <img
                className=" absolute top-0 left-0 -z-30 h-full w-full object-contain p-2"
                src={IMAGES.TALK}
                alt="/"
              />
              <div className="z-50 flex h-full w-full flex-col items-center space-y-2  pt-20  ">
                <img
                  src={talk.talker.pic}
                  alt="talker"
                  className="h-40 w-36 rounded-xl border-2 border-black drop-shadow-3xl xl:h-60 xl:w-56"
                />
                <div className="flex flex-col items-center justify-center space-y-2 font-mono text-2xl font-bold text-white drop-shadow-3xl xl:pt-4">
                  <p>{talk.talker.name}</p>
                  <p className="text-base">- {talk.talker.desciption} -</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talks;
