import React from "react";
import "./index.css";
import subHeaderLogo from "../../../assets/images/subHeaderLogo.png";
import fileIcon from "../../../assets/images/fileIcon.png";
import { useDispatch,useSelector } from "react-redux";
import {handleSideModal} from '../../../redux/reducer';
const SubHeader = () => {
  const dispatch =useDispatch();
  const isSidePopUpOpen=useSelector((state)=>state.modalsData.isSidePopUpOpen);
  return (
    
      <div className="subHeader">
          <div className="subHeaderFirst">
            <img alt="" className="headerLogo" src={subHeaderLogo} />
            <span>Evaluate security posture of an API</span>
          </div>
          <div className="subHederSecond">
            <button className="exitButton">Exit Instant POV</button>
            <button className="signUpButton">Sign Up</button>
            <button onClick={()=>{dispatch(handleSideModal(!isSidePopUpOpen))}} className="helpButton"><img alt="" src={fileIcon}></img></button>
          </div>
        </div>
  
  );
};

export default SubHeader;
