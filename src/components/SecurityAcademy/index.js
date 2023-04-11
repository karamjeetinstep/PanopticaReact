import React from "react";
import "./index.scss";
import backArrow from "../../assets/images/backArrow.png";
import { cardData } from "../../data";
import Button from "../../common/Button";
import { BsArrowLeft } from "react-icons/bs";
import EvaluteImg from "../../assets/images/Frame 1000005980.svg";
import FinancialServices from "../../assets/images/financial-services-icon 1.svg";
import CloudBorn from "../../assets/images/Cloud.svg";
import Utilities from "../../assets/images/Utility.svg";
import Transport from "../../assets/images/transport.svg";
import Retail from "../../assets/images/retail.svg";
import Manufacturing from "../../assets/images/manufacture.svg";
import PublicSector from "../../assets/images/public sector.svg";
import Communication from "../../assets/images/communication.svg";
import Accordion from "./Accordion";
import Media from "../../assets/images/imges.svg";
// import securityIcon from "../../assets/images/images/securityIcon.png";
import { useNavigate } from "react-router-dom";
const SecurityAcademy = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container_One">
      <div className="row">
        <div className="col-md-8 d-flex flex-column ">
          <span className="d-flex-center-flex-start">
            <BsArrowLeft size={18} />
            Back to Modules
          </span>

          <div className="mein_heading">
            <h1>Welcome to Panoptica Security Academy</h1>
            <p>
              If this is your first time taking a module, navigate to the
              Appendix in the Table of Contents to review the interface and
              features before proceeding.
            </p>
          </div>

          <div className="Secc_Box">
            <p className="p-1">Selected Module</p>
            <div className="evaluate_box align-items-center">
              <div className="col-md-7">
                <img width={106} src={EvaluteImg} alt="" />
                <div className="evaluate_text ">
                  <h2>Evaluate security posture of an API</h2>
                  <p>
                    Monitoring APIs and related security risks across
                    multi-cloud environments requires comprehensive visibility
                    and continuous API discovery.
                  </p>
                  <span>3:23 min demo</span>
                </div>
              </div>
              <div className="col-md-5">
                <div className="module_box border-left-1">
                  <h3>What you will get after this module?</h3>
                  <ul>
                    <li>See Risk Finding in Your APIs</li>
                    <li>See impacted Cluster, Namespace, and Gateway</li>
                    <li>Perform some tests to dig deeper</li>
                    <li>Evaluate Security Posture</li>
                    <li>See Issue found and mitigation to be taken</li>
                    <li>Evaluate Your Own API</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="last_box w-80 ">
            <p className="p-1 common-p">Selected Module</p>
            <div className="flex-boxing">
              <button className="industry_box">
                <img src={FinancialServices} alt="" />
                <p>Financial Services</p>
              </button>
              <div className="industry_box">
                <img src={CloudBorn} alt="" />
                <p>Tech/Cloud-Born</p>
              </div>
              <div className="industry_box">
                <img src={Utilities} alt="" />
                <p>Utilities</p>
              </div>
              <div className="industry_box">
                <img src={Transport} alt="" />
                <p>Transport</p>
              </div>
              <div className="industry_box">
                <img src={Retail} alt="" />
                <p>Retail</p>
              </div>
              <div className="industry_box">
                <img src={Manufacturing} alt="" />
                <p>Manufacturing</p>
              </div>
              <div className="industry_box">
                <img src={PublicSector} alt="" />
                <p>Public Sector High</p>
              </div>
              <div className="industry_box">
                <img src={Communication} alt="" />
                <p>Communication</p>
              </div>
            </div>
          </div>
          <div className="Common-btn">
            <Button
              onClick={() => {
                navigate("/");
              }}
              background="white"
              border="2px solid #007aa3"
              color="#007aa3"
              padding="0 2%"
              text="See other modules"
            />
            <Button text="Start Module" />
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="Table_Right_side border-left-1">
            <h3>Table of Contents</h3>

            <Accordion
              subtitle="dfghjk"
              image={Media}
              title="First Accordion"
              content="First Accordion content"
            />
            <Accordion
              title="Second Accordion"
              content="Second Accordion content"
            />
            <Accordion
              title="Third Accordion"
              content=" <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </br>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </br>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAcademy;
