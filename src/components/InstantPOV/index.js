import React, { useState ,useEffect} from "react";
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
  const defaultSelected=[1,2];
  const [selectedFilter, setSelectedFilter] = useState(defaultSelected);
  const [searchTerm, setSearchTerm] = useState('');
  const onCheckBoxChange=(isChecked,id)=>{
     if(isChecked){
      console.log(selectedFilter,id)
      setSelectedFilter([...selectedFilter,id]);
     }else{
      const filterData=selectedFilter.filter((item)=>item!==id);
      setSelectedFilter(filterData);
     }
  }

  useEffect(() => {
    const debounceSearch = setTimeout(onSearch, 500);
    return () => {
      clearTimeout(debounceSearch);
    };
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSearch=()=>{
    const filteredId=[]
    instantPovCards.forEach((item)=>{
      item.cards.forEach((card)=>{
        const regex = new RegExp(searchTerm, "gi");
        const match = card.heading.match(regex);
        match &&filteredId.push(item.id)
      })         
    });
    setSelectedFilter(filteredId)
};

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
          {filter.map((filtItem,index) => (
            <Accordion
            key={index}
              title={filtItem.name}
              content={<CheckBox defaultSelected={defaultSelected} onClick={onCheckBoxChange} listData={filtItem.checkbox} />}
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
                onChange={handleChange}
                // value=""
              />
              <button type="submit" className="search_icon">
                <CiSearch size={25} />
              </button>
            </div>
          </div>
          {instantPovCards?.map(
            (item,index) =>
            selectedFilter.includes(item.id) && (
                <div className="API_Security" key={index}>
                  <h2>{item.name} &#40;<span>{item?.cards.length}</span>&#41;</h2>
                  <div className="row flex-wrap">
                    {item?.cards?.map((cardDetail,index) => (
                      <div className="col-md-33 mb-3 d-flex" key={index}>
                        <div className="api_sec_box">
                          <img
                            width={60}
                            alt=""
                            className="securityIcon"
                            src={cardDetail.img}
                          ></img>

                          <h3>{cardDetail.heading}</h3>
                          <p>{cardDetail.description}</p>
                          <span>{cardDetail.time}</span>

                          <button
                            className="backButton"
                            onClick={() => navigate("/security-academy")}
                          >
                            <span className="backbuttontext">Explore</span>
                            <img
                              className="rotate-180"
                              alt=""
                              src={backArrow}
                            ></img>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default InstantPOV;
