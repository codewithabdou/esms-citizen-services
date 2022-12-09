import React from "react";
import Navbar from "./Navbar";
import IMAGES from "../../constants/images";
const layout = ({ children, hasNavbar = true }) => {
  
  return (
    <div className="min-h-screen">
      <img
        src={IMAGES.BG}
        alt="bg"
        className="w-screen h-screen fixed top-0 left-0 -z-50 object-cover"
      />
      {hasNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default layout;
