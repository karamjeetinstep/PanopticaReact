import React ,{useState,useEffect} from "react";
import bgWindow from "../../../assets/images/Frame 1000005690.png";
import { moduleCards } from "../../../data";
import { useLocation } from "react-router-dom";
import Accordion from "../../SecurityAcademy/Accordion";

const UploadAPI = (props) => {
  const {selectedModuleData}= props
  return (
    <div className="uploadAPI chooseAPI" key={props.index}>
      <div className="row">
        <div className="col-md-5">
          <div className="left_side_txt d-flex align-items-center">
            <div>
              <h1>{selectedModuleData?.step3ModuleData?.topHeading}</h1>
              <p>{selectedModuleData?.step3ModuleData?.topDescription}</p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="right_side_txt_box">
            <h1>{selectedModuleData?.step3ModuleData?.leftHeading}</h1>
            <p>{selectedModuleData?.step3ModuleData?.leftDescription}</p>
            <div className={`WindowBox align-items-start `}>
              <img width="100%" src={bgWindow} alt="" />

              <div id="apiboxes" className="API_boxes ">
                <div className="api_card_box box-acc mouse-pointer ">
                  <h1>{selectedModuleData?.step3ModuleData?.modalAccordian.title}</h1>
                    {selectedModuleData?.step3ModuleData?.modalAccordian?.accordian?.map((item,index)=><Accordion
                    className="w-100"
                    content={item.content}
                    title={item.title}
                    key={index}
                  />)}                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadAPI;
