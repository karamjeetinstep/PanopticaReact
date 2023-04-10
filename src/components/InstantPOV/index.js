import React from "react";
import "./index.scss";
import backArrow from "../../assets/images/backArrow.png";
import securityIcon from "../../assets/images/securityIcon.png";
import { useNavigate } from 'react-router-dom';

const InstantPOV = (props) => {
  const navigate = useNavigate();

  return (
    <div className="instantPOV">
      <div className="heading">
        <div className="text">
        <button className="backButton" onClick={()=>{navigate('/securityAcademy')}}>
              <img alt="" src={backArrow}></img>
              <span className="backbuttontext">Back to Modules</span>
            </button>
        <div className="title">Welcome to Panoptica Instant POV</div>
        <p className="titleDetail">
          The Security Academy guides you through a series of Offensive &
          Defensive techniques,placing you at the wheel of a malicious attacker,
          and defender to gain the latest know-how
        </p>
        </div>
        <img alt="" className="securityIcon" src={securityIcon}></img>
      </div>
      <div className="main">
         <div>
          side filter
         </div>
         <div>
            cards
         </div>
      </div>
    </div>
  );
};

export default InstantPOV;
