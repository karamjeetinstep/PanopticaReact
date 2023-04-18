import React, { useState, useEffect } from "react";
import bgWindow from "../../../assets/images/Web Tiles - 2nd Step.jpg";

const TestAPI = (props) => {
  const [zoomId, setZoomId] = useState(null);
  const {selectedModuleData}= props

  const PositionChange = (id) => {
    if (zoomId === id) {
      setZoomId(null);
    } else {
      setZoomId(id);
    }
  };
  return (
    <div className="chooseAPI testAPI" key={props.index}>
      <div className="row">
        <div className="col-md-5">
          <div className="left_side_txt d-flex align-items-center">
            <div>
            <h1>{selectedModuleData?.step2ModuleData?.topHeading}</h1>
              <p>{selectedModuleData?.step2ModuleData?.topDescription}</p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="right_side_txt_box">
          <h1>{selectedModuleData?.step2ModuleData?.leftHeading}</h1>
            <p>{selectedModuleData?.step2ModuleData?.leftDescription}</p>
            <div className={`WindowBox `}>
              <img
                width="100%"
                className={zoomId ? "blur-on" : "blur-off"}
                src={bgWindow}
                alt=""
              />

              <div id="apiboxes" className="API_boxes">
              {selectedModuleData?.step2ModuleData?.cards?.map((item) => (
                  <div
                  key={item.id}
                    onClick={() => PositionChange(item.id)}
                    className={`api_card_box mouse-pointer  ${
                      zoomId == item.id ? "ScaleCard" : "ScaleCard-Close"
                    } ${zoomId && zoomId !== item.id && "blur-on"}`}
                  >
                    <div className="d-flex secound_box">
                      <div>
                        <img width={12} src={bgWindow} alt="" />
                      </div>
                      <div className="left_area">
                        <div className="d-flex">
                          <h1>{item.heading}</h1>
                          <div className="icon_boxes">
                            <img width={12} src={item.status.icon} alt="" />{" "}
                            <p>{item.status.name}</p>
                          </div>
                        </div>
                        <p>{item.description}</p>
                        <div className="sec_text-box">
                          <div className="one-text">
                            <span>Affected Elements</span>
                            <p>{item.affectedElements}</p>
                          </div>
                          <div className="one-text">
                            <span>Category</span>
                            <p>{item.category}</p>
                          </div>
                          <div className="one-text">
                            <span>Source</span>
                            <p>{item.source}</p>
                          </div>
                        </div>
                        <div className="one-text-bottom">
                          <span>Mitigation</span>
                          <p className="last">{item.mitigation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestAPI;
