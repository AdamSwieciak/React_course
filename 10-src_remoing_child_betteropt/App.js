import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "manu", age: 28 },
      { id: "2", name: "liter", age: 34 },
      { id: "3", name: "Zbigniew", age: 43 }
    ],
    showPersons: false
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
