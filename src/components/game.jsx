import React from 'react';
import Board from './board';
import calculateWinner from '../util/calculateWinner';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9)
          .fill(null),
      }],
      isFirstPlayer: true,
    };
  }

  handleClick(i) {
    const { history, isFirstPlayer } = this.state;
    const current = history[history.length - 1];
    const { squares } = current

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = isFirstPlayer ? 'X' : '◯';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      isFirstPlayer: !isFirstPlayer
    });
  }

  render() {
    const {
      history,
      isFirstPlayer
    } = this.state;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (isFirstPlayer ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
