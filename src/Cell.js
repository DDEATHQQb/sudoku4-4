import React, { Component } from "react";

// class Cell extends Component {
//   render() {
//     return (
//       <div
//         className={`cell ${this.props.isInitial ? "initial" : ""}`}
//         onClick={e => {
//           if (this.props.isInitial) {
//             return;
//           }
//           this.props.onChange((this.props.number + 1) % 5);
//         }}
//       >
//         {this.props.number !== 0 && this.props.number}
//       </div>
//     );
//   }
// }
const Cell = ({ isInitial, number, onChange }) => {
  return (
    <div
      className={`cell ${isInitial ? "initial" : ""}`}
      onClick={e => {
        if (isInitial) {
          return;
        }
        onChange((number + 1) % 5);
      }}
    >
      {number !== 0 && number}
    </div>
  );
};

export default Cell;
