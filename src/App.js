import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

class Tile extends React.Component {
  render() {
    return (
      <button className="tile">
        {/* TODO */}
      </button>
    );
  }
}

class PlayerHand extends React.Component {
  renderTile(i) {
    return <Tile />
  }

  render() {
    return (
      <div className="player-hand">
        {this.renderTile(0)}
        {this.renderTile(1)}
        {this.renderTile(2)}
        {this.renderTile(3)}
      </div>
    );
  }
}

class Board extends React.Component {
  renderPlayerHand(i) {
    return <PlayerHand />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        {this.renderPlayerHand(0)}
        {this.renderPlayerHand(1)}
        {this.renderPlayerHand(2)}
        {this.renderPlayerHand(3)}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
