import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height,props.title]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <div className="d-flex-center-flex-start">
          <img src={props.image} alt="" />
          <div style={{ flexDirection: "column" }}>
            <p className="accordion__title">{props.title}</p>
            <sapn className="accordion__subtitle">{props.subtitle}</sapn>
          </div>
        </div>
        <span style={{ marginLeft: "20px" }}>
          {active ? (
            <IoIosArrowForward className="transition-rotate rotate-90" />
          ) : (
            <IoIosArrowForward className="transition-rotate" />
          )}
        </span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
       <div className="accordion__text"> {props.content}</div>
        
      </div>
    </div>
  );
}

export default Accordion;
