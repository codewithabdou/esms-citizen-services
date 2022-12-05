import React from "react";
import IMAGES from "../../constants/images";
import { MdOutlinePlace, MdDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routes";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";


const Hero = () => {
  const navigation = useNavigate();

  const OnClickHandler = () => {
    window.scrollTo({ behavior: "smooth", top: window.innerHeight });
  };

  const DiscoverClickHandler = () => {
    navigation(ROUTES.FAQ);
  };

  return (
    <div className="relative flex h-[90vh] flex-col items-center justify-center ">
      <div className="absolute bottom-20 left-20 -rotate-45 ">
        <HiOutlineBuildingOffice2 className=" h-10 w-auto animate-bounce text-[#154E6D] opacity-50 md:h-20" />
      </div>
      <div className="grid h-[90%] w-full grid-cols-1 bg-gradient-to-b from-blue-300 to-white md:grid-cols-2 ">
        <div className="col-span-1 flex flex-col justify-evenly ">
          <div className="flex flex-col items-center justify-center space-y-2 font-press-start text-2xl md:space-y-4 md:text-4xl pt-10">
            <div>Citizen Services</div>
            <div>Hackathon 2023</div>
          </div>
          <div className="ml-20 text-lg text-[#154E6D]">
            <div className="flex items-center space-x-2">
              <MdDateRange />
              <div>February, 23th, 2023</div>
            </div>
            <div className="flex items-center space-x-2">
              <MdOutlinePlace />
              <div>Localisation</div>
            </div>
          </div>
          <button
            onClick={DiscoverClickHandler}
            className="w-36 self-center rounded-full bg-[#FFF6C5] py-3 px-3 font-bold drop-shadow-3xl"
          >
            Discover more
          </button>
        </div>
        <div className="col-span-1 flex h-full w-full items-center justify-center ">
          <img
            src={IMAGES.HERO}
            alt="hero"
            className="h-auto w-3/4 object-contain"
          />
        </div>
      </div>
      <div onClick={OnClickHandler} className="h-[10%] cursor-pointer">
        <img src={IMAGES.ARROWSDOWN} alt="arrows" className="animate-pulse" />
      </div>
    </div>
  );
};

export default Hero;
