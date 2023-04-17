import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "./common/Header";
import InstantPOV from "./components/InstantPOV";
import EvaluateAPI from "./components/EvaluateAPI";
import SecurityAcademy from "./components/SecurityAcademy";
import securityIcon from "./assets/images/securityIcon.png";

import Congratulation from "./components/Congratulation";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import backArrow from "./assets/images/backArrow.png";

const env = "development";
const configBuffer = require(`./env/${env}.json`);
const SampleHome = () => (
  <>
    <div className="home_Div">
      <div className="row padding-tops ">
        <div className="col-md-6">
          <h1>Tryout Panoptica Security Academy</h1>
          <div>
            <h4>
              The Security Academy guides you through a series of Offensive &
              Defensive techniques, placing you at the wheel of a malicious
              attacker, and defender to gain the latest know-how
            </h4>
          </div>
        </div>
      </div>
      <div className="row justfy-center ">
        <div className="col-md-33" style={{ width: "40%" }}>
          <div className="api_sec_box">
            <img
              width={60}
              alt=""
              className="securityIcon"
              src={securityIcon}
            ></img>

            <h3>Evaluate security posture of an API</h3>
            <p>
              Monitoring APIs and related security risks across multi-cloud
              environments requires comprehensive visibility and continuous API
              discovery.
            </p>

            <button className="backButton">
              <span className="backbuttontext">Explore</span>
              <img className="rotate-180" alt="" src={backArrow}></img>
            </button>
          </div>
        </div>
        <div className="col-md-33">
          <div className="api_sec_box">
            <img
              width={60}
              alt=""
              className="securityIcon"
              src={securityIcon}
            ></img>

            <h3>Evaluate security posture of an API</h3>
            <p>
              Monitoring APIs and related security risks across multi-cloud
              environments requires comprehensive visibility and continuous API
              discovery.
            </p>

            <button className="backButton">
              <span className="backbuttontext">Explore</span>
              <img className="rotate-180" alt="" src={backArrow}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={configBuffer.BASE_ROUTE}>
        <Header subHeaderShow={true} />
        <Routes>
          <Route exact path="/" element={<SampleHome />} />
          <Route path="/security-academy" element={<SecurityAcademy />} />
          <Route path="/instant-pov" element={<InstantPOV />} />
          <Route path="/evaluate-api" element={<EvaluateAPI />} />
          <Route path="/congratulation" element={<Congratulation />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
