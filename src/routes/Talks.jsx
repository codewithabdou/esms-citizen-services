import React from "react";
import IMAGES from "../constants/images";

const Talks = () => {
  const talks = [
    {
      title: "The Cryptocurrency",
      talker: {
        desciption: "MIT searcher",
        name: "Ryad Baghdadi",
        pic: IMAGES.TALKER,
      },
    },
    {
      title: "The Cryptocurrency",
      talker: {
        desciption: "MIT searcher",
        name: "Ryad Baghdadi",
        pic: IMAGES.TALKER,
      },
    },
    {
      title: "The Cryptocurrency",
      talker: {
        desciption: "MIT searcher",
        name: "Ryad Baghdadi",
        pic: IMAGES.TALKER,
      },
    },
    {
      title: "The Cryptocurrency",
      talker: {
        desciption: "MIT searcher",
        name: "Ryad Baghdadi",
        pic: IMAGES.TALKER,
      },
    },
  ];

  return (
    <div className="flex h-[90vh] w-full flex-col items-center ">
      <h1 className="my-5 h-[10%] self-center font-title text-3xl drop-shadow-3xl md:text-4xl lg:text-6xl">
        Talks
      </h1>
      <div className="flex h-[90%] w-full items-center justify-center">
        <div className=" h-full w-[90%] overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide gap-x-4 ">
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
              <div className="z-50 flex h-full w-full flex-col items-center space-y-4 pt-24 xl:pt-16  ">
                <h1 className="font-mono text-2xl font-bold text-white drop-shadow-3xl md:text-3xl">
                  {talk.title}
                </h1>
                <img
                  src={talk.talker.pic}
                  alt="talker"
                  className="h-48 w-44 rounded-xl border-2 border-black drop-shadow-3xl"
                />
                <div className="flex flex-col items-center justify-center space-y-2 font-mono text-2xl font-bold text-white xl:pt-4 drop-shadow-3xl">
                  <p>{talk.talker.name}</p>
                  <p>- {talk.talker.desciption} -</p>
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
