import React from "react";
import "./index.scss";
const Button = (props) => {
  return (
    <button
      style={{
        padding: props.padding,
        color:props.disabled?"#B2B2B2":props.color,
        margin: props.margin,
        height: props.height,
        border:props.border,
        background:props.disabled?"#DEDEDE": props.background,
        borderRadius: props.borderRadius,
        cursor:props.disabled?"unset":props.cursor,
        width:props.width,
      }}
      disabled={props.disabled}
      onClick={()=>{props.onClick()}}
      className={props.className}
    >
      {props.text}
    </button>
  );
};
Button.defaultProps = {
  text: "button",
  padding:"0 3%",
  color:"#f7f7f7",
  margin: "0",
  height:'38px',
  border:"none",
  background:"#007aa3",
  borderRadius:"30px",
  cursor: 'pointer',
  width:"fit-content",
  onClick:()=>{console.log("send your onClick function in button props")},
  disabled:false
};
export default Button;
