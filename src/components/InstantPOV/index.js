import React from "react";
import "./index.scss";
import backArrow from "../../assets/images/backArrow.png";
import securityIcon from "../../assets/images/securityIcon.png";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Skeleton from "react-loading-skeleton";
import Accordion from "../SecurityAcademy/Accordion";

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
          <Accordion
            title="Category"
            content=' <div class="filter_left">
            <input
              class="checkbox-1"
              type="checkbox"
              name="checkbox"
              value=""
            />
            <p>API Security (4)</p>
          </div>
          <div class="filter_left">
            <input
              class="checkbox-1"
              type="checkbox"
              name="checkbox"
              value=""
            />
            <p>API Security (4)</p>
          </div>
          <div class="filter_left">
            <input
              class="checkbox-1"
              type="checkbox"
              name="checkbox"
              value=""
            />
            <p>API Security (4)</p>
          </div>'
          />
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
                value=""
              />
              <button type="submit" className="search_icon">
                <CiSearch size={25} />
              </button>
            </div>
          </div>

          <div className="API_Security">
            <h2>API Security (4)</h2>
            <div className="row flex-wrap">
              <div className="col-md-33 mb-3 d-flex">
                <div className="api_sec_box">
                  <img
                    width={60}
                    alt=""
                    className="securityIcon"
                    src={securityIcon}
                  ></img>

                  <h3>Evaluate security posture of an API</h3>
                  <p>
                    Monitoring APIs and related security risks across
                    multi-cloud environments requires comprehensive visibility
                    and continuous API discovery.
                  </p>
                  <span>5:12 min demo</span>

                  <button className="backButton">
                    <span className="backbuttontext">Explore</span>
                    <img className="rotate-180" alt="" src={backArrow}></img>
                  </button>
                </div>
              </div>
              <div className="col-md-33 mb-3 d-flex">
                <div className="api_sec_box">
                  <div className="Skeleton_img mb-1">
                    <Skeleton count={1} style={{ height: "40px" }} />
                  </div>

                  <h3>
                    <Skeleton count={1} />
                  </h3>
                  <p>
                    <Skeleton count={3} />
                  </p>
                  <span>
                    <Skeleton count={0.5} />
                  </span>
                </div>
              </div>
              <div className="col-md-33 mb-3 d-flex">
                <div className="api_sec_box">
                  <div className="Skeleton_img mb-1">
                    <Skeleton count={1} style={{ height: "40px" }} />
                  </div>

                  <h3>
                    <Skeleton count={1} />
                  </h3>
                  <p>
                    <Skeleton count={3} />
                  </p>
                  <span>
                    <Skeleton count={0.5} />
                  </span>
                </div>
              </div>
              <div className="col-md-33 mb-3 d-flex">
                <div className="api_sec_box">
                  <div className="Skeleton_img mb-1">
                    <Skeleton count={1} style={{ height: "40px" }} />
                  </div>

                  <h3>
                    <Skeleton count={1} />
                  </h3>
                  <p>
                    <Skeleton count={3} />
                  </p>
                  <span>
                    <Skeleton count={0.5} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="Kubernetes_box">
            <h2>Kubernetes (2)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantPOV;
