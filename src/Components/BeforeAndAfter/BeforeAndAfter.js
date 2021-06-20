import React, { Component } from "react";

class BeforeAndAfter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      question: "",
      answer: "",
      displayQus: "",
    };
  }
  componentDidMount() {
    window.addEventListener("load", this.randomNumbers);
  }

  randomNumbers = () => {
    let firstNum = Math.floor(Math.random() * 100);
    this.setState({ question: firstNum });
    let randomQuestion = Math.floor(Math.random() * 2);
    randomQuestion ? this.beforeFun() : this.afterFun();
  };

  userInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = (e) => {
    this.state.answer === parseInt(this.state.userInput)
      ? alert(`${this.state.userInput} is correct`)
      : alert(`${this.state.userInput} is not correct`);

    e.preventDefault();
    this.randomNumbers();
  };

  beforeFun = () => {
    let beforeAns = this.state.question - 1;
    this.setState({
      answer: beforeAns,
      displayQus: `before ${this.state.question}`,
    });
  };

  afterFun = () => {
    let afterAns = this.state.question + 1;
    this.setState({
      answer: afterAns,
      displayQus: `after ${this.state.question}`,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>BeforeAndAfter</div>
          <div>
            <span>{this.state.displayQus}</span>
            <input
              type="number"
              value={this.state.afterInput}
              onChange={this.userInputChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default BeforeAndAfter;
