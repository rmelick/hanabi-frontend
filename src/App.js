import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import example_state from "./example_state";
import example_state_2 from "./example_state2";
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
  render() {
    return (
      <button className={`tile color-${this.props.tile.color}`}>
        {this.props.tile.rank}
      </button>
    );
  }
}

class PlayerHand extends React.Component {
  renderTile(tile) {
    return <Tile tile={tile} key={tile.id}/>
  }

  render() {
    const renderedTiles = this.props.player.tiles.map(tile => this.renderTile(tile));
    return (
      <div className="player-hand">
        {this.props.player.name}
        {renderedTiles}
      </div>
    );
  }
}

class Board extends React.Component {
  renderPlayerHand(player) {
    return <PlayerHand player={player} key={player.player_index}/>;
  }

  render() {
    const status = 'Next player: X';
    const renderedPlayers = this.props.game_state.players.map(player => this.renderPlayerHand(player));

    return (
      <div>
        <div className="status">{status}</div>
        {renderedPlayers}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state1 = example_state;
    this.state2 = example_state_2;

    this.state = this.state1;
    this.current_state = 1
  }

  refreshGame = () => {
    if (this.current_state === 1) {
      this.setState(this.state2);
      this.current_state = 2;
    } else {
      this.setState(this.state1);
      this.current_state = 1;
    }
  };

  render() {
    return (
      <div className="game">
        <Button variant="contained" color="primary" onClick={this.refreshGame}>
          Fresh Game
        </Button>
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
