import React from "react";
import Radium from "radium";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name}, who have {props.age} !
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
