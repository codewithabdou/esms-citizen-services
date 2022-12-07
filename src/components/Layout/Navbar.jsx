import React, { useState } from "react";
import { Link } from "react-router-dom";
import IMAGES from "../../constants/images";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import navMenu from "../../constants/navMenu";

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true);
  const [bgBlack,setBgBlack] = useState(false);

  const changeBg = () => {
    setBgBlack(window.scrollY >= 50);
  };



  window.addEventListener("scroll",changeBg);

  return (
    <div className={`sticky top-0 z-10 flex h-navHeight w-full ${bgBlack ? "bg-white" :"bg-transparent" } items-center flex justify-between px-8 drop-shadow-3xl `}>
      <div
        onClick={() => {
          setMenuHidden(true);
        }}
        className=" z-50 flex h-full justify-start "
      >
        <Link to={navMenu[0].path}>
          <img
            src={IMAGES.CSELOGO}
            alt="logo"
            className="h-full w-auto object-cover pb-2 pt-5 "
          />
        </Link>
      </div>
      <ul
        className={`${
          menuHidden
            ? "hidden"
            : "fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-y-10 bg-gray-100 bg-opacity-90 text-4xl "
        } text-lg font-bold text-black lg:flex lg:flex-row lg:gap-16 lg:bg-transparent`}
      >
        {navMenu.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setMenuHidden(true);
              }}
              className=" relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-[#547793] after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className="z-40 text-3xl text-black lg:hidden">
        {menuHidden ? (
          <GiHamburgerMenu
            onClick={() => {
              setMenuHidden(false);
            }}
          />
        ) : (
          <GiCancel
            onClick={() => {
              setMenuHidden(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
