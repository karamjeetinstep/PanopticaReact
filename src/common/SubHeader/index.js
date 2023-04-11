import React from "react";
import subHeaderLogo from "../../assets/images/subHeaderLogo.png";
import fileIcon from "../../assets/images/fileIcon.png";
import { useDispatch,useSelector } from "react-redux";
import {handleSideModal} from '../../redux/reducer/modal';
import { useNavigate } from "react-router-dom";
import Button from "../Button";
const SubHeader = ({showFileIcon}) => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const isSidePopUpOpen=useSelector((state)=>state.modalsData.isSidePopUpOpen);
  return (
    
      <div className="subHeader">
          <div className="subHeaderFirst">
            <img alt="" className="headerLogo" src={subHeaderLogo} />
            <span>Evaluate security posture of an API</span>
          </div>
          <div className="subHederSecond">
          <Button
              onClick={() => {
                navigate("/");
              }}
              background="white"
              border="2px solid #007aa3"
              color="#007aa3"
              padding="0 8%"
              text="Exit Instant POV"
            />
            <Button
              onClick={() => {
                navigate("/");
              }}
              text="Sign Up"
            />
            {showFileIcon&&<button onClick={()=>{dispatch(handleSideModal(!isSidePopUpOpen))}} className="helpButton"><img alt="" src={fileIcon}></img></button>}
          </div>
        </div>
  
  );
};
SubHeader.defaultProps = {
  showFileIcon: true,
};
export default SubHeader;
