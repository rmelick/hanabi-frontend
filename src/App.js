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

class DrawPile extends React.Component {
  render() {
    return <div className="drawPile">Draw Pile: {this.props.draw_pile.tiles_remaining}</div>
  }
}

class PlayedTiles extends React.Component {
  static renderTile(tile) {
    return <Tile tile={tile} key={tile.public_id}/>
  }

  render() {
    const renderedTiles = this.props.tiles.map(tile => PlayedTiles.renderTile(tile));
    return (
      <div className="player-tiles">
        {this.props.color}
        {renderedTiles}
      </div>
    );
  }
}

class DiscardPile extends React.Component {
  static renderTile(tile) {
    return <Tile tile={tile} key={tile.public_id}/>
  }

  render() {
    const renderedTiles = this.props.discard_pile.tiles.map(tile => DiscardPile.renderTile(tile));
    return (
      <div className="discard-pile">
        Discard Pile
        {renderedTiles}
      </div>
    );
  }
}

class Board extends React.Component {
  static renderPlayedTiles(color, tiles) {
    return <PlayedTiles color={color} tiles={tiles} key={color}/>;
  }

  render() {
    const tiles = this.props.board.played_tiles;
    const renderedTiles = Object.keys(tiles).map(color => Board.renderPlayedTiles(color, tiles[color]));
    return (
      <div className="board">
        Board Is
        {renderedTiles}
      </div>);
  }
}

class PlayerHands extends React.Component {
  static renderPlayerHand(player) {
    return <PlayerHand player={player} key={player.player_index}/>;
  }

  render() {
    const status = 'Next player: X';
    const renderedPlayers = this.props.players.map(player => PlayerHands.renderPlayerHand(player));

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
    this.state = {game: example_state};
  }


  newGame = () => {
    fetch("http://localhost:8080/newGame?numPlayers=4", {method: "POST"})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({game_id: result.game_id});
          this.refreshGameState();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };


  refreshGameState = () => {
    fetch("http://localhost:8080/gameState/" + this.state.game_id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({game: result});
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
        <Button variant="contained" color="primary" onClick={this.newGame}>
          New Game
        </Button>
        <Button variant="contained" color="primary" onClick={this.refreshGameState}>
          Refresh Game State
        </Button>
        <div className="player-hands">
          <PlayerHands players={this.state.game.players}/>
        </div>
        <div className="draw-pile">
          <DrawPile draw_pile={this.state.game.draw_pile}/>
        </div>
        <div className="discard-pile">
          <DiscardPile discard_pile={this.state.game.discard_pile}/>
        </div>
        <div className="board">
          <Board board={this.state.game.board}/>
        </div>
        <div className="game-info">
          <div>Clues Remaining: {this.state.game.clues_remaining}</div>
          <ol>Mistakes Remaining: {this.state.game.mistakes_remaining}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
