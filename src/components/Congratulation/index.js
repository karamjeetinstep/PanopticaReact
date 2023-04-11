import React from "react";
import "./index.scss";
import SubHeader from "../../common/SubHeader";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
const Congratulation = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <SubHeader showFileIcon={false} />
      <div className="Congratulation">
        <div className="heading">
          <div>
            <h1 className="">Congratulations! </h1>
            <span>You have successfully completed this module</span>
            <Button
              onClick={() => {
                navigate("/");
              }}
              background="white"
              border="2px solid #007aa3"
              color="#007aa3"
              padding="0 8%"
              text="Evaluate your API"
            />
          </div>
        </div>
        <div className="nextModule">
          <span>Next module for you</span>
          <div className="nextModuleDetail">
            <div className="defination">
              <h3>Broken Function Level Authorization</h3>
              <p>
                Broken Function Level Authorization (BFLA) is a type of security
                vulnerability that occurs when an application fails to properly
                enforce access controls for different user roles or permissions.
              </p>
              <Button
                onClick={() => {
                  navigate("/evaluate-api");
                }}
                text="Start Module"
              />
            </div>
            <div className="whatYouGet">
              <h3> What you will get after this module?</h3>
              <ul>
                <li>See Risk Finding in Your APIs</li>
                <li>See impacted Cluster, Namespace, and Gateway</li>
                <li>Perform some tests to dig deeper</li>
                <li>Evaluate Security Posture</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="expolreUseCase">
          <div className="cardsHeading">
            <h3>Lets explore some more use cases below...</h3>
            <a className="viewAllModules" href="/instant-pov">
              View All Modules
            </a>
          </div>
          <div className="cards">
            <div className="card"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Congratulation;
