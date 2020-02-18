import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "manu", age: 28 },
      { name: "liter", age: 34 },
      { name: "Zbigniew", age: 43 }
    ]
  };
  switchNameHandler = () => {
    //console.log("was clicked!");
    this.setState({
      persons: [
        { name: "Grzegorz", age: 42 },
        { name: "liter", age: 2 },
        { name: "Zbigniew", age: 1 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>hii</h1>
        <p>Tis is realy exiting</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
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
    );
  }
}
export default App;
