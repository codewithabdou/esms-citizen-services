import React from "react";
import IMAGES from "../../constants/images";
import Timer from "../Timer";

const About = () => {
  const time = new Date();
  const waitedDay = new Date("2023-02-23");
  time.setSeconds(waitedDay.getTime() / 1000 - time.getTime() / 1000);
  return (
    <div className="flex h-[90vh] flex-col">
      <div className="flex h-[40%] flex-col items-center justify-around bg-[#547793] bg-opacity-80 tracking-widest text-white drop-shadow-3xl ">
        <div className=" text-4xl font-bold md:text-6xl font-title text-center leading-20">
          Don't miss the chance
        </div>
        <Timer expiryTimestamp={time} />
      </div>
      <div className=" h-[70%]">
        <div className=" h-full p-6 md:space-y-10 flex flex-col">
          <h1 className="font-title text-3xl md:text-4xl">
            What is Citizen Services ?
          </h1>
          <p className="my-6 text-xl md:2xl ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            assumenda, laudantium quasi ducimus architecto, ut at tempore
            dignissimos perspiciatis nostrum officia, harum est! Sed velit minus
            aperiam, officiis quaerat porro! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dicta est corporis error iusto!
            Quisquam, recusandae debitis. Totam dolorem consequuntur dolore.
            Illo esse earum omnis, molestias natus amet odio explicabo
            repudiandae!
          </p>
          <button className="w-36 self-center rounded-full bg-[#547793] py-3 px-3 font-bold shadow-2xl text-white border-black border-[1px] hover:text-black hover:-translate-y-1 hover:bg-[#B4DDFF] transition duration-300">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
