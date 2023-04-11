import React from "react";
import "./index.scss";
import backArrow from "../../assets/images/backArrow.png";
import {cardData} from '../../data'
// import securityIcon from "../../assets/images/securityIcon.png";
import { useNavigate } from 'react-router-dom';
const SecurityAcademy = (props) => {
  const navigate = useNavigate();
  return (
    <div className="securityAcademy">
      <div className="left">
        <div className="heading">
          <div className="text">
            <button className="backButton" onClick={()=>{navigate('/')}}>
              <img alt="" src={backArrow}></img>
              <span className="backbuttontext">Back to Modules</span>
            </button>
            <h2 className="title">Welcome to Panoptica Security Academy</h2>
            <p className="titleDetail">
              If this is your first time taking a module, navigate to the
              Appendix in the Table of Contents to review the interface and
              features before proceeding.
            </p>
          </div>
        </div>
        <div className="selectedModule">
          <h5>Selected Module</h5>
          <div className="discriprtion">
            
          </div>
        </div>
        <div className="selectIndustry ">
          <h5>Select an Industry</h5>
          <div className="cards">
            {
             cardData.map((item)=>(
              <div className="card">
                 <img alt="" className="" src={item.img}></img>
                 <span className="">{item.name}</span>
              </div>
             )) 
            }
          </div>
        </div>
        <div className="footer1">
          <button onClick={()=>{navigate('/instantPOV')}} className="seeMore">See other modules</button>
          <button onClick={()=>{navigate('/evaluateAPI')}} className="startModule">Start Module</button>
        </div>
      </div>
      <div className="tableOfconent">
        <h3>Table of Contents</h3>
      </div>
    </div>
  );
};

export default SecurityAcademy;
