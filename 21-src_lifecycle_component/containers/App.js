import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[app.js] constructor");
  }
  state = {
    persons: [
      { id: "1", name: "manu", age: 28 },
      { id: "2", name: "liter", age: 34 },
      { id: "3", name: "Zbigniew", age: 43 }
    ],
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[app.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[app.js] componentDidMount");
  }
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
    console.log("[app.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHndler}
          change={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.tooglePersonhandler}
        />
        {persons}
      </div>
    );
  }
}
export default App;
