import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full h-navHeight items-center bg-navColor shadow-lg shadow-gray-500 ">
      <div className="flex justify-start w-5/12 pl-4">
        <Link to="/">
          <img src="" alt="logo" className="h-fit" />
        </Link>
      </div>
      <div className="w-7/12">
        <ul className="list-none flex flex-row justify-evenly font-bold text-lg text-navColor  ">
          <li className="hover:underline hover:text-xl ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline hover:text-xl ">
            <Link to="/workshops">Workshops</Link>
          </li>
          <li className="hover:underline hover:text-xl ">
            <Link to="/conferences">Conferences</Link>
          </li>
          <li className="hover:underline hover:text-xl ">
            <Link to="/agenda">Agenda</Link>
          </li>
          <li className="hover:underline hover:text-xl ">
            <Link to="/sponsors">Sponsors</Link>
          </li>
          <li className="hover:underline hover:text-xl ">
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
