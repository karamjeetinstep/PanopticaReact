import React from "react";
import "./index.scss";

import mainImg from "../../../assets/images/Group 1086878.png";

const EvaluateSecurity = (props) => {
  return (
    <div className="evaluateSecurity chooseAPI">
      <div className="row">
        <div className="col-12">
          <div clasName="main-image d-flex justify-center">
            <img
              height={592}
              className="m-auto"
              src={mainImg}
              alt="main-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluateSecurity;
