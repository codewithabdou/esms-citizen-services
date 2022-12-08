import React, { useState } from "react";
import IMAGES from "../../constants/images";
import { MdOutlinePlace, MdDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routes";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const navigation = useNavigate();

  const [showArrows,setShowArrows]=useState(true);

  const OnClickHandler = () => {
    window.scrollTo({ behavior: "smooth", top: window.innerHeight });
  };

  const HideArrows = ()=>{
    setShowArrows(window.scrollY<1)
  }

  window.addEventListener("scroll",HideArrows)

  const DiscoverClickHandler = () => {
    navigation(ROUTES.FAQ);
  };

  return (
    <div className="relative flex h-[90vh] flex-col items-center justify-center bg-transparent ">
      <div className={`grid h-[90%] w-full grid-cols-1 md:grid-cols-2 `}>
        <div className="col-span-1 flex flex-col justify-evenly gap-y-8 ">
          <div className="flex flex-col items-center justify-center space-y-2 font-title text-3xl md:space-y-4 md:text-5xl pt-10 md:pl-10">
            <div>Citizen Service</div>
            <TypeAnimation
              sequence={[
                "",
                1000,
                "Hackathon",
                2000,
                "Hackathon 2023",
                5000,
                "Hackathon 2023",
              ]}
              cursor={true}
              repeat={Infinity}
            />
          </div>
          <div className="md:ml-20 text-lg text-black space-y-2 px-5 md:px-0">
            <div className="flex items-center space-x-2">
              <MdDateRange className="text-2xl"/>
              <div>February, 23th, 2023</div>
            </div>
            <div className="flex items-center space-x-2">
              <MdOutlinePlace className="xl:text-2xl text-4xl" />
              <div >Higher national school of computer science (ESI ex INI) ,Oued smar ,Algiers</div>
            </div>
          </div>
          <button
            onClick={DiscoverClickHandler}
            className="w-36 self-center rounded-full bg-[#547793] py-3 px-3 font-bold shadow-2xl text-white border-black border-[1px] hover:text-black hover:-translate-y-1 hover:bg-[#B4DDFF] transition duration-300"
          >
            Discover more
          </button>
        </div>
        <div className="col-span-1 flex h-full w-full items-center justify-center ">
          <img
            src={IMAGES.LOGOPNG}
            alt="hero"
            className="h-auto w-1/2 object-contain"
          />
        </div>
      </div>
        <div onClick={OnClickHandler} className="h-[10%] hidden md:block ">
          <img src={IMAGES.ARROWSDOWN} alt="arrows" className={` ${!showArrows ? "hidden" : "block"} animate-pulse cursor-pointer`} />
        </div>
      
    </div>
  );
};

export default Hero;
