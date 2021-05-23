import "./App.css";
import React, { Component } from "react";
import NumSeries from "./NumSeries/NumSeries";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>main</div>
        <NumSeries />
      </div>
    );
  }
}

export default App;
