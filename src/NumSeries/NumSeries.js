import React, { Component } from "react";

class NumSeries extends Component {
  constructor(props) {
    super(props);
    let arr = [
      {
        qus: "1, 2, 3, 4,",
        ans: 5,
      },
      {
        qus: "6, 7, 8, 9,",
        ans: 10,
      },
      {
        qus: "6, 7,",
        ans: 8,
      },
      {
        qus: "6, 7, 8,",
        ans: 9,
      },
      {
        qus: "6,",
        ans: 7,
      },
      {
        qus: "6, 7, 8, 9,",
        ans: 10,
      },
      {
        qus: "6, 7, 8, 9,",
        ans: 10,
      },
      {
        qus: "17,",
        ans: 18,
      },
      {
        qus: "19",
        ans: 20,
      },
      {
        qus: "30",
        ans: 31,
      },
    ];

    this.state = { arr };
  }

  randomQuestion = () => {
    let random = Math.round(Math.random() * 5);
    // question.textContent = arr[random].qus;
    return random;
  };
  handleSubmit = () => {
    let answer = document.querySelector(".answer").value;
    // let question = document.querySelector(".question");
    // answer === this.state.arr[this.randomQuestion()].ans
    //   ? alert(`${answer} is correct`)
    //   : alert(`${answer} is incorrect`);
    console.log(answer);
    console.log(this.state.arr[this.randomQuestion()].ans);

    // question.textContent = this.randomQuestion();
    // console.log(this.randomQuestion());
  };

  render() {
    return (
      <div>
        <div className="main">
          <span className="question">
            {this.state.arr[this.randomQuestion()].qus}
          </span>
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
