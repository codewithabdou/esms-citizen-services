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
    <div className="footer drop-shadow-3xl ">
      <div className="footer-container">
        <div className="contact">
          <div className="phone">
            <FaPhone size={20} color="black" style={{ margin: 10 }} />
            <p className="text-xl font-bold"> +213 776493221 </p>
          </div>
          <div className="email">
            <FaMailBulk size={20} color="black" style={{ margin: 10 }} />
            <p className="text-xl font-bold"> cse@esi.dz </p>
          </div>
        </div>
        <div className="icons">
          <a
            href="https://www.facebook.com/abderrahmene.hbch/"
            target="_blank" rel="noopener noreferrer"
          >
            <FaFacebook className="icon" size={50}  />
          </a>
          <a href="https://www.instagram.com/abdouuu.h/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" size={50}  />
          </a>
          <a href="https://www.instagram.com/abdouuu.h/" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon" size={50}  />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
