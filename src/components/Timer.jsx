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
    <div className="flex font-press-start text-xs">
      <div className="flex flex-col items-center justify-between space-y-2 pl-1">
        <div className="text-xl leading-10 md:text-5xl">{days} :</div>
        <div className="text-md font-sans font-bold md:text-lg">Days</div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-xl leading-10 md:text-5xl">{hours} :</div>
        <div className="text-md font-sans font-bold md:text-lg">Hours</div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-xl leading-10 md:text-5xl">{minutes} :</div>
        <div className="text-md font-sans font-bold md:text-lg">Minutes</div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-xl leading-10 md:text-5xl">{seconds}</div>
        <div className="text-md font-sans font-bold md:text-lg ml-10">Secondes</div>
      </div>
    </div>
  );
}

export default Timer;
