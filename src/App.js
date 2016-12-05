import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: [[0,0,0],[0,0,0],[0,0,0]],
      currentPlayer: 1
    }
  }

  play(rowIndex, colIndex) {
    const player = this.state.currentPlayer;
    const newBoard = this.state.board;
    newBoard[rowIndex][colIndex] = player;
    this.setState({
      board: newBoard,
      currentPlayer: 3 - this.state.currentPlayer
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          { this.state.board.map((row, rowIndex) =>
            <p >{ row.map((grid, colIndex) =>
              <span onClick={ () => this.play(rowIndex, colIndex) } >{ grid }</span>
              ) }</p>
            ) }
        </div>

      </div>
    );
  }
}

export default App;
