import React from "react";
import {GamesList} from "./GamesList";

export class LobbyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    this.refreshGamesList();
  }

  refreshGamesList = () => {
    fetch("http://192.168.1.73:8080/games", {method: "GET"})
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
    fetch("http://192.168.1.73:8080/newGame", {method: "POST"})
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

  render() {
    return (
      <GamesList
        games = {this.state.games}
        refreshFunction={() => this.refreshGamesList()}
        newGameFunction={() => this.newGame()}
      />
    );
  }
}
