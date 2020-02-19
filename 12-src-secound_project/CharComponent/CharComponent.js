import React from "react";
import "./CharComponent.css";

const char = props => {
  return (
    <div className="char" onClick={props.clicked}>
      <p>{props.character}</p>
    </div>
  );
};

export default char;
