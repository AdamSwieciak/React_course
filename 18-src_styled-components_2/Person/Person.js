import React from "react";
import styled from "styled-components";
const StyleDiv = styled.div` width: 60%; margin: 16px auto; border 1px solid #eee; padding:
16px;
"@media (min-width: 800px)": {
color: "blue"
}`;

const person = props => {
  return (
    <StyleDiv>
      <p onClick={props.click}>
        I'm {props.name}, who have {props.age} !
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
  );
};

export default person;
