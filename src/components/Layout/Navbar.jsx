import React from "react";
import { Link  } from "react-router-dom";
import IMAGES from "../../constants/images";
import ROUTES from "../../constants/routes"

const Navbar = () => {
  return (
    <div className="flex justify-between w-full h-navHeight items-center bg-navColor shadow-lg shadow-gray-500 overflow-hidden">
      <div className="flex justify-start w-5/12 pl-10 h-full">
        <Link to={ROUTES.HOME}>
          <img src={IMAGES.LOGO} alt="logo" className="h-[120%] object-cover pb-2" />
        </Link>
      </div>
      <div className="w-7/12">
        <ul className="list-none flex flex-row justify-evenly font-bold text-lg text-navColor  ">
          <li className="after:absolute hover:-translate-y-1 hover:scale-110 transition after:top-full after:left-0 relative after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:h-0.5 after:rounded-full after:bg-orange-500">
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li className="after:absolute hover:-translate-y-1 hover:scale-110 transition after:top-full after:left-0 relative after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:h-0.5 after:rounded-full after:bg-orange-500">
            <Link to={ROUTES.WORKSHOPS}>Workshops</Link>
          </li>
          <li className="after:absolute hover:-translate-y-1 hover:scale-110 transition after:top-full after:left-0 relative after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:h-0.5 after:rounded-full after:bg-orange-500">
            <Link to={ROUTES.CONFERENCES}>Conferences</Link>
          </li>
          <li className="after:absolute hover:-translate-y-1 hover:scale-110 transition after:top-full after:left-0 relative after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:h-0.5 after:rounded-full after:bg-orange-500">
            <Link to={ROUTES.AGENDA}>Agenda</Link>
          </li>
          <li className="after:absolute hover:-translate-y-1 hover:scale-110 transition after:top-full after:left-0 relative after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:h-0.5 after:rounded-full after:bg-orange-500">
            <Link to={ROUTES.SPONSORS}>Sponsors</Link>
          </li>
          <li className="after:absolute hover:-translate-y-1 hover:scale-110 transition after:top-full after:left-0 relative after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:h-0.5 after:rounded-full after:bg-orange-500">
            <Link to={ROUTES.FAQ}>FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
