import React from "react";
import { Link } from "react-router-dom";
import IMAGES from "../../constants/images";
import ROUTES from "../../constants/routes";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex h-navHeight w-full items-center justify-between bg-navColor px-8 drop-shadow-3xl z-10">
      <div className="flex h-full justify-start">
        <Link to={ROUTES.HOME}>
          <img
            src={IMAGES.LOGO}
            alt="logo"
            className="h-[120%] object-cover pb-2"
          />
        </Link>
      </div>
      <ul className="hidden list-none flex-row gap-6 text-lg font-bold text-navColor lg:flex  ">
        <li className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100">
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100">
          <Link to={ROUTES.WORKSHOPS}>Workshops</Link>
        </li>
        <li className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100">
          <Link to={ROUTES.CONFERENCES}>Conferences</Link>
        </li>
        <li className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100">
          <Link to={ROUTES.AGENDA}>Agenda</Link>
        </li>
        <li className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100">
          <Link to={ROUTES.SPONSORS}>Sponsors</Link>
        </li>
        <li className="relative transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-orange-500 after:transition after:duration-300 hover:-translate-y-1 hover:scale-110 hover:after:scale-x-100">
          <Link to={ROUTES.FAQ}>FAQ</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
