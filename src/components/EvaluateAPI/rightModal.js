import React from "react";
import crossIcon from "../../assets/images/crossIcon.png";
const RightModal = (props) => {
  return (
    <div className={`rightModal ${props.isOpen ? "open" : "close"}`}>
      <div className={`bas ${props.isOpen ? "d-block" : "d-none"}`}>
        <div className="modalHeading">
          <h3>Find out more</h3>
          <button className="closeBotton" onClick={props.onClick}>
            <img alt="" src={crossIcon}></img>
          </button>
        </div>
        <h5 className="heading">This is a long title to test this</h5>
        <p className="detailtext">
          The accordion component delivers large amounts of content in a small
          space through progressive disclosure. The user gets key details about
          the underlying content and can choose to expand.
        </p>
        <h5 className="heading">This is a long title to test this</h5>
        <p className="detailtext">
          The accordion component delivers large amounts of content in a small
          space through progressive disclosure. The user gets key details about
          the underlying content and can choose to expand that content within
          the constraints of the accordion.
        </p>
        <h5 className="heading">This is a long title to test this</h5>
        <p className="detailtext">
          The accordion component delivers large amounts of content in a small
          space through progressive disclosure. The user gets key details about
          the underlying content and can choose to expand that content within
          the constraints of the accordion. Accordions work especially well on
          mobile interfaces or whenever vertical space is at a premium.
        </p>
        <h5 className="heading">This is a long title to test this</h5>
        <p className="detailtext">
          The accordion component delivers large amounts of content in a small
          space through progressive disclosure. The user gets key details about
          the underlying content and can choose to expand that content within
          the constraints of the accordion. Accordions work especially well on
          mobile interfaces or whenever vertical space is at a premium.
        </p>
      </div>
    </div>
  );
};

export default RightModal;
