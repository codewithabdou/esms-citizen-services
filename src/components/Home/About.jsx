import React from "react";
import IMAGES from "../../constants/images";
import Timer from "../Timer";

const About = () => {
  const time = new Date();
  const waitedDay = new Date("2023-03-09");
  time.setSeconds(waitedDay.getTime() / 1000 - time.getTime() / 1000);
  return (
    <div className="flex h-[90vh] flex-col">
      <div className="flex h-[40%] flex-col items-center justify-around bg-[#547793] bg-opacity-80 stroke-black tracking-widest text-white drop-shadow-3xl ">
        <div className=" leading-20 text-center px-2 font-title text-2xl font-bold md:text-4xl">
          Don't miss the chance
        </div>
        <Timer expiryTimestamp={time} />
      </div>
      <div className=" h-[70%]">
        <div className=" flex h-full flex-col items-center p-10 md:space-y-8">
          <h1 className="text-center font-title text-3xl leading-relaxed drop-shadow-3xl md:text-4xl">
            What is Citizen Service ?
          </h1>
          <p className="md:2xl my-6 text-lg font-semibold leading-relaxed tracking-wider md:text-xl">
            {"<CitizenService> or <CS>"} is a hackathon addressing as its main
            theme the services and tasks representing the rights of the public
            or must be performed to necessarily meet their daily needs. The
            latter aims to develop responses to the needs of citizens by
            proposing solutions to the many problems that our society is
            currently facing in terms of daily life services, then considering
            and discussing them and then trying to concretize them in the end.
            And so this hackathon will bring together several teams who will
            have the opportunity to express their initiatives in order to
            improve the services of our company and adapt it as much as possible
            to the technological field. This event will take place from March 9
            to March 2023 at the level of HIS, under the slogan '' For a world
            that changes '', this one is based on the main objective which the
            hackathon will wish to accomplish.
          </p>
          <button className="w-36 cursor-not-allowed self-center rounded-full border-[1px] border-black bg-[#547793] py-3 px-3 font-bold text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#B4DDFF] hover:text-black">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
