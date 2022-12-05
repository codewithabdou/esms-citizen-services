import React from "react";
import IMAGES from "../../constants/images";
import Timer from "../Timer";

const About = () => {
  const time = new Date();
  const waitedDay =new Date("2023-02-23")
  time.setSeconds(waitedDay.getTime()/1000 - time.getTime()/1000); // 10 minutes timer
  return (
    <div className="flex h-[90vh] flex-col">
      <div className="flex h-[30%] flex-col items-center justify-around bg-[#154E6D] bg-opacity-80 tracking-widest text-white ">
        <div className=" text-3xl font-bold md:text-4xl">
          Don't miss the chance
        </div>
        <Timer expiryTimestamp={time} />
      </div>
      <div className="grid h-[70%] grid-cols-1 gap-y-16 bg-gradient-to-b from-blue-300 to-white md:grid-cols-2">
        <div className="col-span-1 h-full p-6">
          <h1 className="font-press-start text-xl md:text-2xl">
            What is Citizen Services ?
          </h1>
          <p className="mt-6 text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            assumenda, laudantium quasi ducimus architecto, ut at tempore
            dignissimos perspiciatis nostrum officia, harum est! Sed velit minus
            aperiam, officiis quaerat porro!
          </p>
        </div>
        <div className="col-span-1 flex h-full items-center justify-center">
          <img
            src={IMAGES.ABOUT}
            className="h-96 animate-bounce object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
