import React from "react";
import backArrow from "../../assets/images/backArrow.png";
import securityIcon from "../../assets/images/securityIcon.png";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
// import Skeleton from "react-loading-skeleton";
import Accordion from "../SecurityAcademy/Accordion";
import { filter, instantPovCards } from "../../data";
import CheckBox from "../../common/CheckBox";

const InstantPOV = (props) => {
  const navigate = useNavigate();

  return (
    <div className="instantPOV">
      <div className="heading">
        <div className="text">
          <button
            className="backButton"
            onClick={() => {
              navigate("/security-academy");
            }}
          >
            <img alt="" src={backArrow}></img>
            <span className="backbuttontext">Back</span>
          </button>
          <div className="title">Welcome to Panoptica Instant POV</div>
          <p className="titleDetail">
            The Security Academy guides you through a series of Offensive &
            Defensive techniques,placing you at the wheel of a malicious
            attacker, and defender to gain the latest know-how
          </p>
        </div>
        <img
          alt=""
          className="securityIcon mobile_d-none"
          src={securityIcon}
        ></img>
      </div>
      <div className="main row">
        <div className="col-md-4 d-flex flex-column">
          {filter.map((filtItem) => (
            <Accordion
              title={filtItem.name}
              content={<CheckBox listData={filtItem.checkbox} />}
            />
          ))}
        </div>
        <div className="col-md-8 d-flex flex-column border-left-1 ps-1">
          <div className="All_Modules">
            <h1 className="first_module_text">All Modules</h1>
            <div className="input-group">
              <input
                className="form-input"
                placeholder="Search..."
                type="text"
                name="text"
                // value=""
              />
              <button type="submit" className="search_icon">
                <CiSearch size={25} />
              </button>
            </div>
          </div>
          {instantPovCards?.map((category) => (
            <div className="API_Security">
              <h2>{category.name}</h2>
              <div className="row flex-wrap">
                {
                  category?.cards?.map((cardDetail)=><div className="col-md-33 mb-3 d-flex">
                  <div className="api_sec_box">
                    <img
                      width={60}
                      alt=""
                      className="securityIcon"
                      src={cardDetail.imge}
                    ></img>

                    <h3>{cardDetail.heading}</h3>
                    <p>{cardDetail.description}</p>
                    <span>{cardDetail.time}</span>

                    <button className="backButton" onClick={()=>navigate("/security-academy")}>
                      <span className="backbuttontext">Explore</span>
                      <img className="rotate-180" alt="" src={backArrow}></img>
                    </button>
                  </div>
                </div>)
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstantPOV;
