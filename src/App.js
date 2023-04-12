import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "./common/Header";
import InstantPOV from "./components/InstantPOV";
import EvaluateAPI from "./components/EvaluateAPI";
import SecurityAcademy from "./components/SecurityAcademy";
import Congratulation from "./components/Congratulation";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
const env ="development";
const configBuffer= require(`./env/${env}.json`);
const SampleHome = () => <h1>Home</h1>;
const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter basename={configBuffer.BASE_ROUTE} >
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
    </div>
  );
};

export default App;
