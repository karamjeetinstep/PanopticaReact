import React, { useState } from "react";
import "./index.scss";
import bgWindow from "../../../assets/images/Web Tiles - 2nd Step.jpg";
import CrossBrown3 from "../../../assets/images/Frame 1000005944.svg";
import { testAPIModalData } from "../../../data";

const TestAPI = (props) => {
  const [zoomId, setZoomId] = useState(null);

  const PositionChange = (id) => {
    if (zoomId === id) {
      setZoomId(null);
    } else {
      setZoomId(id);
    }
  };
  return (
    <div className="chooseAPI testAPI">
      <div className="row">
        <div className="col-md-5">
          <div className="left_side_txt d-flex align-items-center">
            <div>
              <h1>Risk findings in APIs</h1>
              <p>
                The findings that we obtain following an evaluation <br /> of
                the APIs are the main emphasis on the right.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="right_side_txt_box">
            <h1>Test API Vulnerability</h1>
            <p>
              Evaluating the selected API collection and identifying
              vulnerabilities and remediations for the same.
            </p>
            <div className={`WindowBox `}>
              <img
                width="100%"
                className={zoomId ? "blur-on" : "blur-off"}
                src={bgWindow}
                alt=""
              />

              <div id="apiboxes" className="API_boxes">
                {testAPIModalData.map((item) => (
                  <div
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
