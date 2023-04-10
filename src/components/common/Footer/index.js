import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "../../../redux/reducer";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.modalsData.currentStep);

  const preClick = () => {
    if (currentStep === 1) {
      navigate("/securityAcademy");
    } else {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };
  const nextClick = () => {
    if (currentStep === 5) {
      navigate("/congratulation");
    } else {
      dispatch(setCurrentStep(currentStep + 1));
    }
  };
  return (
    <div className="footer">
      <button
        onClick={() => {
          preClick();
        }}
        className="backButton"
      >
        {props.firstButtontext}
      </button>
      <button
        onClick={() => {
          nextClick();
        }}
        className="nextButton"
      >
        {props.secondbuttonText}
      </button>
    </div>
  );
};

export default Footer;
