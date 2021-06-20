import "./App.css";
import React, { Component } from "react";
import NumSeries from "./Components/NumSeries/NumSeries";
import NumBetween from "./Components/NumBetween/NumBetween";
import BeforeAndAfter from "./Components/BeforeAndAfter/BeforeAndAfter";
import AddAndSub from "./Components/AddAndSub/AddAndSub";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>main Page</div>
        {/* <NumSeries />
        <NumBetween />
        <BeforeAndAfter /> */}
        <AddAndSub />
      </div>
    );
  }
}

export default App;
