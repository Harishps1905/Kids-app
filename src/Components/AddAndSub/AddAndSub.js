import React, { Component } from "react";

class AddAndSub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      firstNum: "",
      secondNum: "",
      operator: "",
      answer: "",
    };
  }

  componentDidMount() {
    window.addEventListener("load", this.randomNumber);
  }

  randomNumber = () => {
    let fNum = Math.floor(Math.random() * 51);
    let sNum = Math.floor(Math.random() * 51);
    let randomQuestion = Math.floor(Math.random() * 2);
    console.log(fNum, sNum);
    this.setState({ firstNum: fNum, secondNum: sNum });
    randomQuestion ? this.addition() : this.subtraction();
  };

  addition = () => {
    this.setState({
      operator: "+",
      answer: this.state.firstNum + this.state.secondNum,
    });
    console.log("add", this.state.answer);
  };
  subtraction = () => {
    if (this.state.secondNum > this.state.firstNum) {
      let fval = this.state.secondNum;
      let sval = this.state.firstNum;
      this.setState({
        firstNum: fval,
        secondNum: sval,
      });
    }
    this.setState({
      operator: "-",
      answer: this.state.firstNum - this.state.secondNum,
    });
    console.log("sub", this.state.answer);
  };

  handleUserInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = (e) => {
    parseInt(this.state.userInput) === this.state.answer
      ? alert(`${this.state.userInput} is correct`)
      : alert(`${this.state.userInput} is not correct`);
    console.log(this.state.userInput);
    this.randomNumber();
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <span>{this.state.firstNum}</span>
            <span>{this.state.operator}</span>
            <span>{this.state.secondNum}</span>
            <input
              type="number"
              value={this.state.userInput}
              onChange={this.handleUserInput}
            />
          </div>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default AddAndSub;
