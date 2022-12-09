import React from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex font-title space-x-5">
      <div className="flex flex-col items-center justify-around pl-1">
        <div className="text-2xl leading-10 md:text-4xl"> {days}  :</div>
        <div className="text-xs font-sans font-bold">Days</div>
      </div>
      <div className="flex flex-col items-center justify-around ml-3">
        <div className="text-2xl leading-10 md:text-4xl "> {hours}  :</div>
        <div className="text-xs font-sans font-bold ">Hours</div>
      </div>
      <div className="flex flex-col items-center justify-around ml-3">
        <div className="text-2xl leading-10 md:text-4xl"> {minutes}  :</div>
        <div className="text-xs font-sans font-bold ">Minutes</div>
      </div>
      <div className="flex flex-col items-center justify-around ">
        <div className="text-2xl leading-10 md:text-4xl"> {seconds}</div>
        <div className="text-xs font-sans font-bold">Secondes</div>
      </div>
    </div>
  );
}

export default Timer;
