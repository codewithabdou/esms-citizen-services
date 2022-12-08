import React from "react";
import IMAGES from "../../constants/images";
import Timer from "../Timer";

const About = () => {
  const time = new Date();
  const waitedDay = new Date("2023-02-23");
  time.setSeconds(waitedDay.getTime() / 1000 - time.getTime() / 1000);
  return (
    <div className="flex h-[90vh] flex-col">
      <div className="flex h-[40%] flex-col items-center justify-around bg-[#547793] bg-opacity-80 stroke-black tracking-widest text-white drop-shadow-3xl ">
        <div className=" leading-20 text-center font-title text-4xl font-bold md:text-6xl">
          Don't miss the chance
        </div>
        <Timer expiryTimestamp={time} />
      </div>
      <div className=" h-[70%]">
        <div className=" flex h-full flex-col p-6 md:space-y-10">
          <h1 className="font-title text-3xl md:text-4xl">
            What is Citizen Services ?
          </h1>
          <p className="md:2xl my-6 text-xl ">
            {`< CitizenService > ou <CS>`} est un hackathon abordant comme theme
            principale les services et les taches representants les droits du
            publique ou doivent etre effectues pour necessairement satisfaire
            leur besoins quotidients. Ce dernier vise a développer des repenses
            aux besoins des citoyens en proposant des solutions aux nombreux
            problèmes aux quels notre société fait face actuellement en ce qui
            touche aux services de la vie quotidienne , ensuite les envisage et
            les discute puis essayer de les concrétiser au final. Et donc ce
            hackathon va regrouper plusieurs équipes qui auront l’opportunité
            d’exprimer leur initiatives dans le but d’améliorer le services de
            notre société et l’adapter le plus possible au domaine
            technologique. Cet evenement aura lieu du 9 au mars 2023 au niveau
            de HIS, sous le slogan ‘’ For a world that changes ‘’, celui-ci est
            basé sur l’objectif principale dont le hackathon souhaitera
            accomplir.
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
