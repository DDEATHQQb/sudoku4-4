import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    board: [
      [1, 2, 3, 4],
      [3, 4, 0, 0],
      [2, 0, 4, 0],
      [4, 0, 0, 2]
    ],
    initFlags: [
      [true, true, true, true],
      [true, true, false, false],
      [true, false, true, false],
      [true, false, false, true]
    ],
    complete: false,
    invalid: false
  };
  handleClick = (i, j, number) => {
    const { board } = this.state;
    board[i][j] = (board[i][j] + 1) % 5;
    this.setState({ board });
  };
  submit = () => {
    const { board } = this.state;
    let isValid = true;
    for (let i = 0; i < 4; i++) {
      const horizontal = new Set();
      const vertical = new Set();
      const square = new Set();
      for (let j = 0; j < 4; j++) {
        horizontal.add(board[i][j]);
        vertical.add(board[i][j]);
        square.add(
          board[2 * (i % 2) + (j % 2)][
            2 * Math.floor(i / 2) + Math.floor(j / 2)
          ]
        );
      }
      horizontal.delete(0);
      vertical.delete(0);
      square.delete(0);
      if (horizontal.size !== 4 || vertical.size !== 4 || square.size !== 4) {
        isValid = false;
      }
    }
    this.setState({
      invalid: !isValid,
      complete: isValid
    });
  };
  render() {
    return (
      <div className="App">
        <div className="board"></div>
      </div>
    );
  }
}

export default App;
