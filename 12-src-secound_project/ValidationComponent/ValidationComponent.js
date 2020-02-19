import React from "react";

const valid = props => {
  let inputvalue = "Text long enough";
  if (props.value <= 5) {
    inputvalue = "Text too short";
  }

  return (
    <div>
      <p>{inputvalue}</p>
      <p>That string have {props.value} letter</p>
    </div>
  );
};

export default valid;
