import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[persons.js] componentWillReceiveProps", props);
  // }
  // STARY NIE UZYWANY
  //  componentWillUpdate() {

  //  }
  // STARY NIE UZYWANY

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[persons.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.change(event, person.id)}
          key={person.id}
        />
      );
    });
  }
}
export default Persons;
