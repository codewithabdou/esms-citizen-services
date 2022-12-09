import React , {useEffect} from "react";

const Agenda = () => {
  const leftAgenda = [
    {
      timing: "09:00 - 10:30",
      title: "Check in",
    },
    {
      timing: "10:30 - 10:45",
      title: "Openning ceremony",
    },
    {
      timing: "10:45 - 12:15",
      title: "First Conference",
    },
    {
      timing: "12:15 - 13:15",
      title: "First Workshop",
    },
    {
      timing: "13:15 - 14:15",
      title: "Lunch Break",
    },
    {
      timing: "14:15 - 15:15",
      title: "Second Workshop",
    },
  ];

  const rightAgenda = [
    {
      timing: "15:15 - 15:45",
      title: "Breaking The Ice",
    },
    {
      timing: "15:45 - 16:00",
      title: "Team Picking",
    },
    {
      timing: "16:00 - 16:45",
      title: "Cofee Break",
    },
    {
      timing: "16:45 - 17:00",
      title: "Hackathon Challenges Reveal",
    },
    {
      timing: "17:00 - 20:00",
      title: "Hackathon Start",
    },
    {
      timing: "20:00 - 21:00",
      title: "Dinner",
    },
  ];

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="flex h-[90vh] w-full flex-col">
      <h1 className="my-5 h-[10%] self-center font-title text-2xl drop-shadow-3xl md:text-3xl lg:text-5xl">
        Agenda
      </h1>
      <div className="flex h-[90%] flex-col items-center space-y-10">
        <h3 className=" px-2 text-center font-title font-semibold leading-relaxed text-[#003D6D]">
          Citizen Service Hackthon 1st Day 09/03/2023
        </h3>
        <div className="mt-5 grid w-[90%] grid-cols-1 space-y-5 lg:w-[80%] lg:grid-cols-2 lg:space-y-0 ">
          <div className="col-span-1 flex h-full w-full flex-col space-y-10 border-b-2 border-b-gray-400 pb-5 lg:border-r-2  lg:border-b-0 lg:border-r-gray-400 lg:pb-0">
            {leftAgenda.map((agenda, index) => (
              <div
                className="flex w-full items-center justify-start space-x-4 lg:space-x-10"
                key={index}
              >
                <div className="w-[50%] font-title text-[#003D6D] text-center">
                  {agenda.timing}{" "}
                </div>
                <div className="w-[50%] font-mono text-lg font-semibold lg:text-xl text-center">
                  {agenda.title}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-1 flex h-full w-full flex-col space-y-10">
            {rightAgenda.map((agenda, index) => (
              <div
                className="flex w-full items-center justify-start space-x-4 lg:space-x-10"
                key={index}
              >
                <div className="w-[50%] font-title text-[#003D6D] text-center">
                  {agenda.timing}{" "}
                </div>
                <div className=" w-[50%] font-mono text-xl font-semibold text-center">
                  {agenda.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
