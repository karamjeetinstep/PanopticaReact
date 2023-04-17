import React , {useState,} from "react";
import SubHeader from "../../common/SubHeader";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import iconImage from "../../assets/images/Frame 1000006035.svg";
import {instantPovCards } from "../../data/";
import {setCurrentStep} from '../../redux/reducer/modal';
import { useDispatch  } from "react-redux";

const Congratulation = (props) => {
  const dispatch=useDispatch()
  const [congatulationCard, setCongatulationCard] = useState(instantPovCards[0]);
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
                dispatch(setCurrentStep(1));
                navigate("/evaluate-api/?id=1");
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
            <div className="defination d-flex">
              <img src={iconImage} className="" alt="" />
              <div>
                <h3>Broken Function Level Authorization</h3>
                <p>
                  Broken Function Level Authorization (BFLA) is a type of
                  security vulnerability that occurs when an application fails
                  to properly enforce access controls for different user roles
                  or permissions.
                </p>
                <Button
                  onClick={() => {
                    dispatch(setCurrentStep(1));
                    navigate("/evaluate-api/?id=1");
                  }}
                  text="Start Module"
                />
              </div>
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
            <a className="viewAllModules" href="instant-pov">
              View All Modules
            </a>
          </div>
          <div className="cards">
            <div className="API_Security">
              <div className="row flex-wrap">
                {congatulationCard?.cards.map((card,index) => (
                  <div key={index} className="col-md-33 mb-3 d-flex">
                    <div className="api_sec_box">
                      <img
                        width={60}
                        alt=""
                        className="securityIcon"
                        src={card.img}
                      ></img>

                      <h3>{card.heading}</h3>
                      <p>{card.description}</p>
                      <span>{card.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Congratulation;
