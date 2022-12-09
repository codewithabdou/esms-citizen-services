import React ,{useEffect} from "react";
import IMAGES from "../constants/images";

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className="flex h-[90vh] w-full flex-col">
      <h1 className="my-5 h-[10%] self-center font-title text-2xl drop-shadow-3xl md:text-3xl lg:text-5xl">
        Sponsors
      </h1>
      <div className="grid w-full grid-rows-3 items-center justify-items-center space-y-8 px-4">
        <div className="row-span-1 grid w-full grid-cols-2 items-center justify-items-center ">
          <img
            src={IMAGES.CEVITAL}
            alt=""
            className=" h-[15vh] cursor-pointer rounded-xl border-2 border-black object-cover drop-shadow-3xl transition duration-300 hover:scale-110   lg:h-[20vh] "
          />
          <img
            src={IMAGES.YASSIR}
            alt=""
            className=" h-[15vh] cursor-pointer rounded-xl border-2 border-black object-cover drop-shadow-3xl transition duration-300 hover:scale-110   lg:h-[20vh] "
          />
        </div>
        <div className="row-span-1 flex w-full items-center justify-center">
          <img
            src={IMAGES.SAA}
            alt=""
            className=" h-[15vh] cursor-pointer rounded-xl border-2 border-black object-cover drop-shadow-3xl transition duration-300 hover:scale-110  lg:h-[20vh] "
          />
        </div>
        <div className="row-span-1 grid w-full grid-cols-2 items-center justify-items-center">
          <img
            src={IMAGES.ETUSA}
            alt=""
            className=" h-[15vh] cursor-pointer rounded-xl border-2 border-black object-cover drop-shadow-3xl transition  duration-300 hover:scale-110   lg:h-[20vh] "
          />
          <img
            src={IMAGES.SONALGAZ}
            alt=""
            className=" h-[15vh] cursor-pointer rounded-xl border-2  border-black object-cover drop-shadow-3xl transition  duration-300 hover:scale-110   lg:h-[20vh] "
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
