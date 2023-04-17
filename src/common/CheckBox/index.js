import React from "react";
const CheckBox = (props) => {
  return (
    <>
      {props.listData.map((item, index) => (
        <div key={index} className="filter_left">
          <input
            className="checkbox-1"
            type="checkbox"
            name="checkbox"
            value=""
            defaultChecked={props.defaultSelected.includes(item.id)}
            onChange={(e) => {
              props.onClick(e.target.checked, item.id);
            }}
          />
          <p>
            {item.name} &#40;<span>{item.length}</span>&#41;
          </p>
        </div>
      ))}
    </>
  );
};

export default CheckBox;
