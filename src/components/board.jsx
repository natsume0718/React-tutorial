import React from 'react';
import Square from './squre';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9)
        .fill(null),
      isFirstPlayer: true,
    };
  }

  handleClick(i) {
    const { squares } = this.state;
    let { isFirstPlayer } = this.state;
    squares[i] = isFirstPlayer ? 'X' : '◯';
    this.setState({
      squares: squares,
      isFirstPlayer: !isFirstPlayer
    });
  }

  renderSquare(i) {
    const { squares } = this.state;
    return <Square value={squares[i]} onClick={() => this.handleClick(i)}/>;
  }

  render() {
    const {isFirstPlayer} = this.state;
    const status = `Next player: ${isFirstPlayer ? 'X' : '◯'}`;
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
