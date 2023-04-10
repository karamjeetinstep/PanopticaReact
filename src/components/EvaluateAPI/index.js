import React from "react";
import Stepper from "../common/Stepper/stepper";
import "./index.scss";
import { useSelector ,useDispatch} from "react-redux";
import { steps } from "../../data";
import RightModal from "./rightModal";
import SubHeader from '../common/SubHeader';
import { handleSideModal } from "../../redux/reducer";
import Footer from '../common/Footer'
const EvaluateAPI = (props) => {
  const isSidePopUpOpen = useSelector(
    (state) => state.modalsData.isSidePopUpOpen
  );
  const dispatch =useDispatch();
  return (
    <>
      <SubHeader/>
      <div className="evaluateAPI">
        <div className="left">
          <Stepper steps={steps} value={1} />
          <></>
        </div>
        {isSidePopUpOpen && <RightModal  onClick={()=>{dispatch(handleSideModal(false))}}/>}
      </div>
         <Footer firstButtontext='Previous' secondbuttonText='Next'/>
    </>
  );
};

export default EvaluateAPI;
