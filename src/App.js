import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import InstantPOV from "./components/InstantPOV";
import EvaluateAPI from "./components/EvaluateAPI";
import SecurityAcademy from "./components/SecurityAcademy";
import Congratulation from "./components/Congratulation";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
const SampleHome = () => <h1>Home</h1>;
const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Header subHeaderShow={true} />
          <Routes>
            <Route exact path="/" element={<SampleHome />} />
            <Route path="/securityAcademy" element={<SecurityAcademy />} />
            <Route path="/instantPOV" element={<InstantPOV />} />
            <Route path="/evaluateAPI" element={<EvaluateAPI />} />
            <Route path="/congratulation" element={<Congratulation />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
