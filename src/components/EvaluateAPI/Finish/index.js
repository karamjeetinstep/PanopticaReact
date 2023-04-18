import React from "react";
import imageCross from "../../../assets/images/image 2951.png";
import CrossBrown3 from "../../../assets/images/Frame 1000005944.svg";
import rightImages from "../../../assets/images/rightImage.jpg";
import SecoImages from "../../../assets/images/SecoImages.jpg";
import mainImg from "../../../assets/images/Group 1086878.png";
import Accordion from "../../SecurityAcademy/Accordion";

const Finish = (props) => {
  const {selectedModuleData}= props
  return (
    <div className="chooseAPI finish" key={props.index}>
      <div className="row">
        <div className="col-md-5">
          <div className="left_side_txt d-flex align-items-center">
            <div>
              <h1>{selectedModuleData?.step5ModuleData?.topHeading}</h1>
              <p>{selectedModuleData?.step5ModuleData?.topDescription}</p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="right_side_txt_box">
            <h1>{selectedModuleData?.step5ModuleData?.leftHeading}</h1>
            <p>{selectedModuleData?.step5ModuleData?.leftDescription}</p>
            <div className={`WindowBox `}>
              <img width="100%" className="blur-on" src={mainImg} alt="" />

              <div id="apiboxes" className="API_boxes">
                <div className={`api_card_box finish-step mouse-pointer `}>
                  <div className="d-flex frst-chd position-relative align-items-center">
                    <h1>GET /api/fund-portfolio</h1>
                    <img width={120} src={rightImages} alt="" />
                  </div>
                  <img src={SecoImages} alt="" width={"100%"} />

                  <div className="float_card_overlay">
                    <div className="lin-horizontal"></div>
                    <div className="d-flex main-box" style={{ gap: "12px" }}>
                      <div>
                        <img src={imageCross} width={24} alt="" />
                      </div>
                      <div className="text-area-box">
                        <h3>{selectedModuleData?.step5ModuleData?.firstTextPopUp?.heading}</h3>
                        <p>{selectedModuleData?.step5ModuleData?.firstTextPopUp?.description} </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`api_card_box finish-step mouse-pointer `}>
                  <div className="boxWithAcc">
                    <h1>Risk findings</h1>
                    <Accordion
                      image={CrossBrown3}
                      title="1 High risk findings"
                      content={
                        <Accordion
                          className=""
                          title="1 High risk findings"
                          content="1 High risk findings"
                        />
                      }
                    />
                  </div>

                  <div className="float_card_overlay-2">
                    <div className="lin-horizontal"></div>
                    <div className="d-flex main-box" style={{ gap: "12px" }}>
                      <div>
                        <img src={imageCross} width={24} alt="" />
                      </div>
                      <div className="text-area-box">
                        <h3>{selectedModuleData?.step5ModuleData?.secondTextPopUp?.heading}</h3>
                        <p>{selectedModuleData?.step5ModuleData?.secondTextPopUp?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
