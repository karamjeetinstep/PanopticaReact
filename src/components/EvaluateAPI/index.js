import React, { useEffect ,useState} from "react";
import Stepper from "../../common/Stepper/stepper";
// import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import RightModal from "./rightModal";
import SubHeader from "../../common/SubHeader";
import { handleSideModal } from "../../redux/reducer/modal";
import Footer from "../../common/Footer";
import { moduleCards } from "../../data";
import { useLocation } from "react-router-dom";
const EvaluateAPI = (props) => {
  const isSidePopUpOpen = useSelector(
    (state) => state.modalsData.isSidePopUpOpen
  );
  const [selectedModuleData, setSelectedModuleData] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParam = queryParams.get("id");
  
  const dispatch = useDispatch();
  useEffect(() => {
    setSelectedModuleData(moduleCards.find((item) => queryParam == item.id));
  }, [queryParam]);
  return (
    <>
      <SubHeader />
      <div className="evaluateAPI">
        <div className={`left ${isSidePopUpOpen ? "expand" : "collapse"}`}>
          <Stepper selectedModuleData={selectedModuleData} value={1} />
          <></>
        </div>
        <RightModal
          isOpen={isSidePopUpOpen}
          onClick={() => {
            dispatch(handleSideModal(false));
          }}
        />
      </div>
      <Footer firstButtontext="Previous" secondbuttonText="Next" />
    </>
  );
};

export default EvaluateAPI;
