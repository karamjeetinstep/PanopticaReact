import React from "react";

import mainImg from "../../../assets/images/Group 1086878.png";

const EvaluateSecurity = (props) => {
  return (
    <div className="evaluateSecurity chooseAPI" key={props.index}>
      <div className="row">
        <div className="col-12">
          <div className="main-image d-flex justify-center">
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
