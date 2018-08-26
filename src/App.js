import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import example_state from "./example_state";
console.log("example_state");
console.log(example_state);


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
  constructor(props) {
    super(props);
    this.rank = props.tile.rank;
    this.color = props.tile.color;
  }

  render() {
    return (
      <button className={`tile color-${this.color}`}>
        {this.rank}
      </button>
    );
  }
}

class PlayerHand extends React.Component {
  constructor(props) {
    super(props);
    this.tiles = props.player.tiles;
  }

  renderTile(tile) {
    return <Tile tile={tile}/>
  }

  render() {
    return (
      <div className="player-hand">
        {this.renderTile(this.tiles[0])}
        {this.renderTile(this.tiles[1])}
        {this.renderTile(this.tiles[2])}
        {this.renderTile(this.tiles[3])}
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.players = props.game_state.players;
  }

  renderPlayerHand(player) {
    return <PlayerHand player={player}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        {this.renderPlayerHand(this.players[0])}
        {this.renderPlayerHand(this.players[1])}
        {this.renderPlayerHand(this.players[2])}
        {this.renderPlayerHand(this.players[3])}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = example_state;
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board game_state={this.state}/>
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
