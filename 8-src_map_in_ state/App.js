import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "manu", age: 28 },
      { name: "liter", age: 34 },
      { name: "Zbigniew", age: 43 }
    ],
    showPersons: false
  };

  tooglePersonhandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHndler = () => {};

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                click={this.deletePersonHndler}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>hii</h1>
        <p>Tis is realy exiting</p>
        {/* diffrent click with arrow */}
        <button onClick={this.tooglePersonhandler}>Toogle peosons</button>
        {persons}
      </div>
    );
  }
}
export default App;
