import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
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
  render() {
    return (
      <button className={`tile color-${this.props.tile.color}`}>
        {this.props.tile.rank ? this.props.tile.rank : ''}
      </button>
    );
  }
}

class PlayerHand extends React.Component {
  static renderTile(tile) {
    return <Tile tile={tile} key={tile.public_id}/>
  }

  render() {
    const renderedTiles = this.props.player.tiles.map(tile => PlayerHand.renderTile(tile));
    return (
      <div className="player-hand">
        {this.props.player.name}
        {renderedTiles}
      </div>
    );
  }
}

class Board extends React.Component {
  static renderPlayerHand(player) {
    return <PlayerHand player={player} key={player.player_index}/>;
  }

  render() {
    const status = 'Next player: X';
    const renderedPlayers = this.props.game_state.players.map(player => Board.renderPlayerHand(player));

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
    this.state = example_state;
  }

  refreshGame = () => {
    fetch("http://localhost:8080/gameState")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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
