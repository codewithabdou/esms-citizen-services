import React , {useEffect} from "react";
import IMAGES from "../constants/images";

const Talks = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="flex h-[90vh] w-full flex-col items-center ">
      <h1 className="my-5 h-[10%] self-center font-title text-2xl drop-shadow-3xl md:text-3xl lg:text-5xl">
        Talks
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 h-[90%] w-full items-center justify-items-center">
        <div>
          <img src={IMAGES.TALKER1} alt="" className="cursor-pointer hover:scale-105 transition duration-300" />
        </div>
        <div>
          <img src={IMAGES.TALKER2} alt="" className="cursor-pointer hover:scale-105 transition duration-300" />
        </div>
        <div>
          <img src={IMAGES.TALKER3} alt="" className="cursor-pointer hover:scale-105 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Talks;
