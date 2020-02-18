import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "manu", age: 28 },
      { name: "liter", age: 34 },
      { name: "Zbigniew", age: 43 }
    ]
  });

  const switchNameHandler = () => {
    //console.log("was clicked!");
    setPersonsState({
      persons: [
        { name: "Grzegorz", age: 42 },
        { name: "liter", age: 2 },
        { name: "Zbigniew", age: 1 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>hii</h1>
      <p>Tis is realy exiting</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        M Hobbies
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        M Hobbies
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        M Hobbies
      </Person>
    </div>
  );
};
export default app;
