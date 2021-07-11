import React, { Component } from "react";

class AlphabetBetween extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstAlphabet: "A",
      secondAlphabet: "B",
      answer: "",
      userInput: "",
    };
  }

  componentDidMount() {
    window.addEventListener("load", this.randomAlphabet());
  }

  randomAlphabet = () => {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let randomNumber = Math.floor(Math.random() * (alphabets.length - 3));

    console.log(alphabets.length);
    console.log(randomNumber);

    this.setState(
      {
        firstAlphabet: alphabets.slice(randomNumber, randomNumber + 1),
        answer: alphabets.slice(randomNumber + 1, randomNumber + 2),
        secondAlphabet: alphabets.slice(randomNumber + 2, randomNumber + 3),
      },
      () => {
        console.log(
          this.state.firstAlphabet,
          this.state.answer,
          this.state.secondAlphabet
        );
      }
    );
  };

  userInputChange = (e) => {
    this.setState({ userInput: e.target.value.toUpperCase() });
  };

  handleSubmit = (e) => {
    this.state.answer === this.state.userInput
      ? alert(`${this.state.userInput} iscorrect`)
      : alert(`${this.state.userInput} is not correct`);
    e.preventDefault();
    this.randomAlphabet();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <span>{this.state.firstAlphabet}</span>
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.userInputChange}
            />
            <span>{this.state.secondAlphabet}</span>
          </div>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default AlphabetBetween;
