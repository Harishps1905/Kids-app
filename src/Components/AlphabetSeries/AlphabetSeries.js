import React, { Component } from "react";

class AlphabetSeries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      answer: "",
      userInput: "",
    };
  }
  componentDidMount() {
    window.addEventListener("load", this.randomLetter);
  }

  randomLetter = () => {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomNumber = Math.floor(Math.random() * (alphabets.length - 2));
    console.log(alphabets.length);
    console.log(randomNumber);
    this.setState(
      {
        question: alphabets.slice(randomNumber, randomNumber + 1),
        answer: alphabets.slice(randomNumber + 1, randomNumber + 2),
      },
      () => {
        console.log(this.state.question, this.state.answer);
      }
    );
  };

  handleUserInputChange = (event) => {
    this.setState({ userInput: event.target.value.toUpperCase() });
  };

  handleSubmit = (e) => {
    this.state.answer === this.state.userInput
      ? alert(`${this.state.userInput} is correct`)
      : alert(`${this.state.userInput} is incorrect`);

    this.randomLetter();
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="main">
          <form id="mainInput" onSubmit={this.handleSubmit}>
            <div>Alphabet Series</div>
            <span className="question">{this.state.question}</span>
            <input
              className="answer"
              type="text"
              value={this.state.userInput}
              onChange={this.handleUserInputChange}
            />
            <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AlphabetSeries;
