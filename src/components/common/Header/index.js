import React from "react";
import "./header.css";
import headerLogo from "../../../assets/images/HeaderLogo.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <a href="/"><img alt="" className="headerLogo" src={headerLogo} /></a>
        <div className="headerTitle">
          <span className="headerText1">Panoptica</span>
          <span className="headerText2">Instant POV</span>
        </div>
      </div>
    </>
  );
};

export default Header;
