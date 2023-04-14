import React, { useState } from "react";
import "./index.scss";
import bgWindow from "../../../assets/images/Frame 1000005690.png";
import GreenRight from "../../../assets/images/Frame 1000005944-3.svg";
import CrossBrown1 from "../../../assets/images/Frame 1000005944-2.svg";
import CrossBrown2 from "../../../assets/images/Frame 1000005944-1.svg";
import CrossBrown3 from "../../../assets/images/Frame 1000005944.svg";
import { modalData } from "../../../data";

const UploadAPI = (props) => {
  const [zoomId, setZoomId] = useState(null);

  const PositionChange = (id) => {
    if (zoomId == id) {
      setZoomId(null);
    } else {
      setZoomId(id);
    }
  };
  return (
    <div className="uploadAPI chooseAPI">
      <div className="row">
        <div className="col-md-5">
          <div className="left_side_txt d-flex align-items-center">
            <div>
              <h1>We can perform 3 tests on the APIs</h1>
              <p>
                When evaluating the security posture of an API, it is also
                important to review the API specification. This involves
                uploading or reconstructing the API specification to determine
                how the API behaves and what security measures are in place.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="right_side_txt_box">
            <h1>Upload API Specification</h1>
            <p>
              In this scenario, we will upload the API specification of
              finance-cluster, allowing us to test for discrepancies between the
              specification and the actual behaviour of the API in run-time.
            </p>
            <div className={`WindowBox `}>
              <img
                width="100%"
                className={zoomId ? "blur-on" : "blur-off"}
                src={bgWindow}
                alt=""
              />

              <div id="apiboxes" className="API_boxes">
                <div className="api_card_box mouse-pointer ">
                  <img width={12} src={bgWindow} alt="" />
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
