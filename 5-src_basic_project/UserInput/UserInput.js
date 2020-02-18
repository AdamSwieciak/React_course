import React from "react";

const userInput = props => {
  const inpstyle = {
    border: "2px solid blue",
    textAlign: "center",
    fontSize: "20px"
  };
  return (
    <input
      type="text"
      style={inpstyle}
      onChange={props.changed}
      value={props.currentname}
    />
  );
};

export default userInput;
