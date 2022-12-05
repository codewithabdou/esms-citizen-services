import React, { useState } from "react";
import { Link } from "react-router-dom";
import IMAGES from "../../constants/images";
import ROUTES from "../../constants/routes";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true);

  return (
    <div className="sticky top-0 z-10 flex h-navHeight w-full items-center justify-between bg-navColor px-8 drop-shadow-3xl">
      <div className=" z-50 flex h-full justify-start">
        <Link to={ROUTES.HOME}>
          <img
            src={IMAGES.LOGO}
            alt="logo"
            className="h-[120%] object-cover pb-2 "
          />
        </Link>
      </div>
      <ul
        className={` list-none gap-6 ${
          menuHidden
            ? "hidden"
            : "fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-y-10 bg-navColor bg-opacity-90 text-4xl "
        } text-lg font-bold text-navColor lg:flex lg:flex-row `}
      >
        <li
          onClick={() => {
            setMenuHidden(true);
          }}
          className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100"
        >
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li
          onClick={() => {
            setMenuHidden(true);
          }}
          className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100"
        >
          <Link to={ROUTES.WORKSHOPS}>Workshops</Link>
        </li>
        <li
          onClick={() => {
            setMenuHidden(true);
          }}
          className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100"
        >
          <Link to={ROUTES.CONFERENCES}>Conferences</Link>
        </li>
        <li
          onClick={() => {
            setMenuHidden(true);
          }}
          className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100"
        >
          <Link to={ROUTES.AGENDA}>Agenda</Link>
        </li>
        <li
          onClick={() => {
            setMenuHidden(true);
          }}
          className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100"
        >
          <Link to={ROUTES.SPONSORS}>Sponsors</Link>
        </li>
        <li
          onClick={() => {
            setMenuHidden(true);
          }}
          className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100"
        >
          <Link to={ROUTES.FAQ}>FAQ</Link>
        </li>
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
