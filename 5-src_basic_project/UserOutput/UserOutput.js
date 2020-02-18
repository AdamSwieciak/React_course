import React from "react";
import "./usOtput.css";
const userOutput = props => {
  return (
    <div>
      <p>My name is {props.name}</p>
      <p>Some random text</p>
    </div>
  );
};

export default userOutput;
