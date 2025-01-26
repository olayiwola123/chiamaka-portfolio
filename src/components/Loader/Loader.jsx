import React from "react";
import "./Loader.css"; 
import logo from "../../assets/lagos.png";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        {/* <img src={logo} alt="Lagost State Certificate Portal" className="loader-logo" /> */}
        {/* <p className="text-primary text-center"> Lagos State C-Portal</p> */}
        <div className="loader-spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
