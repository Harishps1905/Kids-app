import React, { Component } from "react";

class NumSeries extends Component {
  randomNumbers = () => {
    let arr = [];
    let question;
    let firstNumber = parseInt(Math.random() * 97);

    arr.push(firstNumber);

    while (arr.length < 4) {
      arr.push(arr[arr.length - 1] + 1);
    }

    console.log(arr);
    question = `${arr[0]}, ${arr[1]}, ${arr[2]}, `;
    return question;
  };
  handleSubmit = (arr) => {
    console.log("button clicked!");
    console.log(arr);
    let answer = document.querySelector(".answer").value;
    answer === arr[arr.length - 1]
      ? alert(`${answer} is correct`)
      : alert(`${answer} is incorrect`);
  };

  render() {
    return (
      <div>
        <div className="main">
          <span className="question">{this.randomNumbers}</span>
          <input className="answer" type="number" />
          <button onClick={this.handleSubmit} className="btn">
            Check
          </button>
        </div>
      </div>
    );
  }
}

export default NumSeries;
