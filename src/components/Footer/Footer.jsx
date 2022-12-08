import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className=" drop-shadow-3xl bg-white pt-4 grid grid-rows-2 gap-y-4 ">
      <div className="row-span-1 flex md:flex-row flex-col justify-center items-center gap-x-20 gap-y-3">
        <div className="contact">
          <div className="flex items-center">
            <FaMailBulk size={25} color="black" style={{ margin: 10 }} />
            <p className="font-bold"> cse@esi.dz </p>
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/club.scientifique.esi"
            target="_blank" rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-slate-700 hover:-translate-y-1 hover:scale-90 transition duration-300" size={30}  />
          </a>
          <a href="https://www.instagram.com/cse.club/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-slate-700 hover:-translate-y-1 hover:scale-90 transition duration-300" size={30}  />
          </a>
          <a href="https://www.youtube.com/@ClubScientifiqueESI-CSE" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-slate-700 hover:-translate-y-1 hover:scale-90 transition duration-300" size={30}  />
          </a>
        </div>
      </div>
      <div className="row-span-1 flex justify-center">
        <p className="text-sm text-center">Copyright © 2022 Club Scientifique de l'ESI.<br/> All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
