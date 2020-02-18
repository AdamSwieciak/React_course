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
  switchNameHandler = newName => {
    //console.log("was clicked!");
    this.setState({
      persons: [
        { name: newName, age: 42 },
        { name: "liter", age: 2 },
        { name: "Zbigniew", age: 1 }
      ]
    });
  };

  tooglePersonhandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    return (
      <div className="App">
        <h1>hii</h1>
        <p>Tis is realy exiting</p>
        {/* diffrent click with arrow */}
        <button onClick={this.tooglePersonhandler}>Toogle peosons</button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            >
              M Hobbies
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            >
              M Hobbies
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            >
              M Hobbies
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}
export default App;
