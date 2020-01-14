import React, { Component } from "react";

// import Cell from "./Cell";
import "./App.css";
class Cell extends Component {
  render() {
    return (
      <div
        className={`cell ${this.props.isInitial ? "initial" : ""}`}
        onClick={e => {
          if (this.props.isInitial) {
            return;
          }
          this.props.onChange((this.props.number + 1) % 5);
        }}
      >
        {this.props.number !== 0 && this.props.number}
      </div>
    );
  }
}
class Board extends Component {
  state = {
    board: [
      [1, 2, 3, 4],
      [3, 4, 0, 0],
      [2, 0, 4, 0],
      [4, 0, 0, 2]
    ],
    initial: [
      [true, true, true, true],
      [true, true, false, false],
      [true, false, true, false],
      [true, false, false, true]
    ],
    statusText: ""
  };
  submit = () => {
    // const isValid = validate(this.state.board);
    this.setState({
      statusText: true ? "Board is complete!!" : "Board is invalid"
    });
  };
  render() {
    return (
      <div>
        <div className="board">
          {this.state.board.map((row, i) =>
            row.map((numb, j) => (
              <Cell
                key={`cell-${i}-${j}`}
                isInitial={this.state.initial[i][j]}
                number={numb}
                onChange={newnumber => {
                  const { board } = this.state;
                  board[i][j] = newnumber;
                  this.setState({ board });
                }}
              />
            ))
          )}
        </div>
        <button onClick={this.submit}>Submit</button>
        <p>{this.statusText}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
