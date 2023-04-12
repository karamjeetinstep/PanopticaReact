import React from "react";
const CheckBox = (props) => {
  return (
    <>
      {
        props.listData.map((item)=><div className="filter_left">
        <input
          className="checkbox-1"
          type="checkbox"
          name="checkbox"
          value=""
        />
        <p>{item.name}</p>
      </div>)
      }  
    </>
  );
};

export default CheckBox;
