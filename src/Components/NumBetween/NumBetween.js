import React, { Component } from "react";

class NumBetween extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNum: "",
      midNum: "",
      lastNum: "",
      userInput: "",
    };
  }

  componentDidMount() {
    window.addEventListener("load", this.randomNumber);
  }

  randomNumber = () => {
    console.log("loaded......");
    let firstNumber = Math.floor(Math.random() * 100);
    let nums = [firstNumber, firstNumber + 1, firstNumber + 2];
    this.setState({
      firstNum: nums[0],
      midNum: nums[1],
      lastNum: nums[2],
    });
  };

  handleUserInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = (e) => {
    this.state.midNum === parseInt(this.state.userInput)
      ? alert(`${this.state.userInput} is correct`)
      : alert(`${this.state.userInput} is not correct`);
    this.randomNumber();
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>Num Between</div>
          <div>
            <span>{this.state.firstNum}</span>
            <input
              type="number"
              value={this.state.userInput}
              onChange={this.handleUserInput}
            />
            <span>{this.state.lastNum}</span>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NumBetween;
