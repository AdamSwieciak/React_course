import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

const StyleButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px;
  :hover {
    background-color: lightgreen;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "manu", age: 28 },
      { id: "2", name: "liter", age: 34 },
      { id: "3", name: "Zbigniew", age: 43 }
    ],
    showPersons: false
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  tooglePersonhandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHndler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHndler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <h1>hii</h1>
        <p className={classes.join(" ")}>Tis is realy exiting</p>
        {/* diffrent click with arrow */}
        <StyleButton onClick={this.tooglePersonhandler}>
          Toogle peosons
        </StyleButton>
        {persons}
      </div>
    );
  }
}
export default App;
