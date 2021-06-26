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
    let randomQuestion = Math.floor(Math.random() * 2);
    this.setState(
      {
        firstNum: Math.floor(Math.random() * 51),
        secondNum: Math.floor(Math.random() * 51),
      },
      () => {
        randomQuestion ? this.addition() : this.subtraction();
      }
    );
  };

  addition = () => {
    let sval = this.state.secondNum;
    let fval = this.state.firstNum;
    this.setState({
      operator: "+",
      answer: fval + sval,
    });
  };

  subtraction = () => {
    if (this.state.secondNum > this.state.firstNum) {
      let fval = this.state.secondNum;
      let sval = this.state.firstNum;
      this.setState({
        firstNum: fval,
        secondNum: sval,
        operator: "-",
        answer: fval - sval,
      });
    } else {
      let fval = this.state.firstNum;
      let sval = this.state.secondNum;
      this.setState({
        operator: "-",
        answer: fval - sval,
      });
    }
  };

  handleUserInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = (e) => {
    parseInt(this.state.userInput) === this.state.answer
      ? alert(`${this.state.userInput} is correct`)
      : alert(`${this.state.userInput} is not correct`);
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
