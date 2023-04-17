import React,{useState} from "react";
import securityIcon from "../../assets/images/securityIcon.png";
import backArrow from "../../assets/images/backArrow.png";
import { useNavigate } from "react-router-dom";
import {instantPovCards} from '../../data'
const SampleHome = () => {
  const [homeModule, setHomeModule] = useState(instantPovCards[1]);

    const navigate = useNavigate();
   return <>
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
            {homeModule.cards.map((item)=><div className="col-md-33" style={{ width: "40%" }}>
            <div className="api_sec_box" onClick={()=>{navigate("/security-academy")}}>
              <img
                width={60}
                alt=""
                className="securityIcon"
                src={item.img}
              ></img>
  
              <h3>{item.heading}</h3>
              <p>{item.description}</p>
  
              <button className="backButton">
                <span className="backbuttontext">Explore</span>
                <img className="rotate-180" alt="" src={backArrow}></img>
              </button>
            </div>
          </div>)}
          
        </div>
      </div>
    </>
};
  export default SampleHome;