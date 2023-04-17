import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "./common/Header";
import InstantPOV from "./components/InstantPOV";
import EvaluateAPI from "./components/EvaluateAPI";
import SecurityAcademy from "./components/SecurityAcademy";

import Congratulation from "./components/Congratulation";
import Home from "./components/Home";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

const env = "development";
const configBuffer = require(`./env/${env}.json`);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={configBuffer.BASE_ROUTE}>
        <Header subHeaderShow={true} />
        <Routes>
          <Route exact path="/" element={<Home />} />
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
