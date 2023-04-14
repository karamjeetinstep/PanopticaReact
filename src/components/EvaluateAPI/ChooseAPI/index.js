import React, { useState } from "react";
import "./index.scss";
import bgWindow from "../../../assets/images/Group 1086877.jpg";
import GreenRight from "../../../assets/images/Frame 1000005944-3.svg";
import CrossBrown1 from "../../../assets/images/Frame 1000005944-2.svg";
import CrossBrown2 from "../../../assets/images/Frame 1000005944-1.svg";
import CrossBrown3 from "../../../assets/images/Frame 1000005944.svg";
import { modalData } from "../../../data";
const ChooseAPI = (props) => {
  const [zoomId, setZoomId] = useState(null);

  const PositionChange = (id) => {
    if (zoomId == id) {
      setZoomId(null);
    } else {
      setZoomId(id);
    }
  };

  return (
    <div className="chooseAPI">
      <div className="row">
        <div className="col-md-5">
          <div className="left_side_txt d-flex align-items-center">
            <div>
              <h1>Risk findings in APIs</h1>
              <p>
                The findings that we obtain following an evaluation of <br />
                the APIs are the main emphasis on the right.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="right_side_txt_box">
            <h1>Choose an API</h1>
            <p>
              Lets pick a banking sector example with highlighted ‘Mobile
              Banking API’ to evaluate.
            </p>
            <div className={`WindowBox `}>
              <img
                width="100%"
                className={zoomId ? "blur-on" : "blur-off"}
                src={bgWindow}
                alt=""
              />

              <div id="apiboxes" className="API_boxes">
                {modalData.map((item) => (
                  <div
                    onClick={() => PositionChange(item.id)}
                    className={`api_card_box mouse-pointer ${
                      zoomId == item.id ? "ScaleCard" : "ScaleCard-Close"
                    } ${zoomId && zoomId !== item.id && "blur-on"}`}
                  >
                    <div className="first_text">
                      {" "}
                      <img width={12} src={bgWindow} alt="" />
                      <h2>{item.heading}</h2>
                    </div>
                    <div className="sec_text_box">
                      <div className="box">
                        <p>Port</p>
                        <span>{item.port}</span>
                      </div>
                      <div className="box">
                        <p>Cluster</p>
                        <span>{item.cluster}</span>
                      </div>
                      <div className="box">
                        <p>Name-space</p>
                        <span>{item.nameSpace}</span>
                      </div>
                      <div className="box">
                        <p>Gateway</p>
                        <span>{item.gateway}</span>
                      </div>
                    </div>
                    <div className="last_box_check">
                      <div className="check_boxes_icon">
                        <img width={12} src={CrossBrown3} alt="" />
                        <p>{item.thread1}</p>
                      </div>
                      <div className="line_"></div>
                      <div className="check_boxes_icon">
                        <img width={12} src={CrossBrown2} alt="" />
                        <p>{item.thread2}</p>
                      </div>
                      <div className="line_"></div>

                      <div className="check_boxes_icon">
                        <img width={12} src={CrossBrown1} alt="" />
                        <p>{item.thread3}</p>
                      </div>
                      <div className="line_"></div>

                      <div className="check_boxes_icon">
                        <img width={12} src={GreenRight} alt="" />
                        <p>{item.thread4}</p>
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

export default ChooseAPI;
