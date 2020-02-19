import React from "react";
import Radium, { StyleRoot } from "radium";

const person = props => {
  const style = {
    "@media (min-width: 800px)": {
      color: "blue"
    }
  };
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name}, who have {props.age} !
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
        style={style}
      />
    </div>
  );
};

export default Radium(person);
