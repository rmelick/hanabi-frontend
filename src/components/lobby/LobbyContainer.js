import React from "react";
import {GamesList} from "./GamesList";

export class LobbyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player_id: "test-player-id",
      player_name: "Test Player",
      games: []
    };
  }

  componentDidMount() {
    this.refreshGamesList();
  }

  refreshGamesList = () => {
    fetch("http://localhost:8080/games", {method: "GET"})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({games: result});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  newGame = () => {
    fetch("http://localhost:8080/newGame", {method: "POST"})
      .then(
        (result) => {
          this.refreshGamesList();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  joinGame = (gameId) => {
    fetch(`http://localhost:8080/games/${gameId}/join?playerName=${this.state.player_name}`,
      {
        headers: {
          "X-Player-Id": this.state.player_id,
          'Content-Type': 'application/json'
        },
        method: "POST"
      })
      .then(
        (result) => {

        },
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
      <GamesList
        games = {this.state.games}
        refreshFunction={() => this.refreshGamesList()}
        newGameFunction={() => this.newGame()}
        joinGameFunction={(gameId) => this.joinGame(gameId)}
      />
    );
  }
}
