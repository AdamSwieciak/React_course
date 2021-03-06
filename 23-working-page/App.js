import React, { Component } from "react";
import Layout from "../src/components/Layout/Layout";
import BurgerBuilder from "./conteiners/BurgerBuilder/BurgerBuilder/BurgerBuilder";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
