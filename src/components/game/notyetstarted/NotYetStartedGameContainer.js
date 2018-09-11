import React from "react";
import Chance from "chance";
import uuidv4 from "uuid/v4"
import NotYetStartedGame from "./NotYetStartedGame";

export class NotYetStartedGameContainer extends React.Component {
  constructor(props) {
    super(props);
    let chance = new Chance();
    this.state = {
      game_summary: props.game_summary,
      player_name: chance.name(),
      player_id: uuidv4()
    };
  }

  refreshGameSummary = () => {
    fetch(`http://localhost:8080/games/${this.state.game_summary.game_id}/summary`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({game_summary: result});
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


  joinGame = () => {
    fetch(`http://localhost:8080/games/${this.state.game_summary.game_id}/join?playerName=${this.state.player_name}`,
      {
        method: "POST",
        headers: {
          "X-Player-Id": this.state.player_id
        }
      })
      .then(
        (result) => {
          this.refreshGameSummary();
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
    return <NotYetStartedGame
      game_summary={this.state.game_summary}
      player_name={this.state.player_name}
      player_id={this.state.player_id}
      refreshSummaryFunction={() => this.refreshGameSummary()}
      joinGameFunction = {() => this.joinGame()}
    />
  }
}
