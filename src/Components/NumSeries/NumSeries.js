import React, { Component } from "react";

class NumSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleLoad: this.handleLoad.bind(this),
      question: "",
      answer: "",
      userInput: "",
    };
  }

  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
  }

  handleLoad = () => {
    let arr = [];
    let randomNumber = parseInt(Math.random() * 97);
    arr.push(randomNumber);

    while (arr.length < 4) {
      arr.push(arr[arr.length - 1] + 1);
    }

    this.setState({
      question: `${arr[0]}, ${arr[1]}, ${arr[2]}, `,
      answer: arr[3],
    });
  };
  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  handleSubmit = (e) => {
    parseInt(this.state.userInput) === this.state.answer
      ? alert(`${this.state.userInput} is correct`)
      : alert(`${this.state.userInput} is not correct`);
    this.handleLoad();
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="main">
          <form onSubmit={this.handleSubmit}>
            <div>Number Series</div>
            <span className="question">{this.state.question}</span>
            <input
              className="answer"
              type="number"
              value={this.state.userInput}
              onChange={this.handleUserInput.bind(this)}
            />
            <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NumSeries;
