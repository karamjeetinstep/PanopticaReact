import React, { useState } from "react";
import { moduleCards, evaluateAPIList, accordian } from "../../data";
import Button from "../../common/Button";
import { BsArrowLeft } from "react-icons/bs";
import EvaluteImg from "../../assets/images/Frame 1000005980.svg";
import Accordion from "./Accordion";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setSlectedmodule} from '../../redux/reducer/modal';

const SecurityAcademy = (props) => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const selectedModuleId=useSelector((state)=>state.modalsData.selectedModuleId);
  return (
    <div className="container_One">
      <div className="row">
        <div className="col-md-8 d-flex flex-column ">
          <span
            onClick={() => {
              navigate("/");
            }}
            className="d-flex-center-flex-start"
          >
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
                    {evaluateAPIList.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="last_box w-80 ">
            <p className="p-1 common-p">Selected Module</p>
            <div className="flex-boxing">
              {moduleCards.map((item) => (
                <button
                  onClick={() => {
                   dispatch(setSlectedmodule(item.id))
                  }}
                  className={`industry_box ${
                    selectedModuleId === item.id && "selectedModule"
                  }`}
                >
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="Common-btn">
            <Button
              onClick={() => {
                navigate("/instant-pov");
              }}
              background="white"
              border="2px solid #007aa3"
              color="#007aa3"
              padding="0 2%"
              text="See other modules"
            />
            <Button
              disabled={!selectedModuleId}
              onClick={() => {
                navigate(`/evaluate-api?id=${selectedModuleId}`);
              }}
              text="Start Module"
            />
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="Table_Right_side border-left-1">
            <h3>Table of Contents</h3>
            {accordian.map((item) => (
              <Accordion
                subtitle={item.subTitle}
                image={item.img}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAcademy;
