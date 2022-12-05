import React from "react";
import Navbar from "./Navbar";

const layout = ({ children, hasNavbar = true }) => {
  return (
    <div className="min-h-screen">
      {hasNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default layout;
