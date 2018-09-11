import React from "react";
import example_state from "../../example_state";
import {Game} from "./Game";

export class InProgressGameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game_id: props.game_id
    };
  }

  componentDidMount() {
    this.refreshGameState();
  }


  newGame = () => {
    fetch("http://localhost:8080/newGame?numPlayers=4", {method: "POST"})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({game_id: result.game_id});
          this.joinGame();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  joinGame = () => {
    fetch(`http://localhost:8080/games/${this.state.game_id}/join`, {method: "POST"})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({player_id: result.player_id});
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
    fetch(`http://localhost:8080/games/${this.state.game_id}/state`, {
      headers: {
        "X-Player-Id": this.state.player_id
      }
    })
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

  giveHint = (playerId, color, rank) => {
    fetch(`http://localhost:8080/games/${this.state.game_id}/move/hint`,
      {
        headers: {
          "X-Player-Id": this.state.player_id,
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "player_id": playerId,
          "color": color,
          "rank": rank
        })
      })
      .then(
        (result) => {
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

  play = (tileIndex) => {
    console.log("play" + tileIndex);
    fetch(`http://localhost:8080/games/${this.state.game_id}/move/play`,
      {
        headers: {
          "X-Player-Id": this.state.player_id,
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "position": tileIndex
        })
      })
      .then(
        (result) => {
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

  discard = (tileIndex) => {
    fetch(`http://localhost:8080/games/${this.state.game_id}/move/discard`,
      {
        headers: {
          "X-Player-Id": this.state.player_id,
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "position": tileIndex
        })
      })
      .then(
        (result) => {
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

  render() {
    console.log("game state is");
    console.log(this.state);
    if (this.state.game) {
      return (
        <Game game={this.state.game}
              newGameFunction={() => this.newGame()}
              refreshGameStateFunction={() => this.refreshGameState()}
              giveHintFunction={(playerId, color, rank) => this.giveHint(playerId, color, rank)}
              playFunction={(tileIndex) => this.play(tileIndex)}
              discardFunction={(tileIndex) => this.discard(tileIndex)}
        />
      );
    } else {
      return "";
    }
  }
}
