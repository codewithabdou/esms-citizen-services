import React from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex font-title">
      <div className="flex flex-col items-center justify-between space-y-2 pl-1">
        <div className="text-2xl leading-10 md:text-8xl">{days} :</div>
        <div className="text-md font-sans font-bold md:text-lg">Days</div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 ml-3">
        <div className="text-2xl leading-10 md:text-8xl "> {hours} :</div>
        <div className="text-md font-sans font-bold md:text-lg">Hours</div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 ml-3">
        <div className="text-2xl leading-10 md:text-8xl"> {minutes} :</div>
        <div className="text-md font-sans font-bold md:text-lg">Minutes</div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 ">
        <div className="text-2xl leading-10 md:text-8xl"> {seconds}</div>
        <div className="text-md font-sans font-bold md:text-lg ml-10">Secondes</div>
      </div>
    </div>
  );
}

export default Timer;
