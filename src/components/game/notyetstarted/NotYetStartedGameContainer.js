import React from "react";
import NotYetStartedGame from "./NotYetStartedGame";
import Websocket from "../../infra/Websocket";

export class NotYetStartedGameContainer extends React.Component {
  joinGame = () => {
    fetch(`http://localhost:8080/games/${this.props.game_summary.game_id}/join?playerName=${this.props.player_name}`,
      {
        method: "POST",
        headers: {
          "X-Player-Id": this.props.player_id
        }
      })
      .then(
        (result) => {
          this.props.refreshGameSummaryFunction();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  startGame = () => {
    fetch(`http://localhost:8080/games/${this.props.game_summary.game_id}/start`,
      {
        method: "POST",
        headers: {
          "X-Player-Id": this.props.player_id
        }
      })
      .then(
        (result) => {
          this.props.refreshGameSummaryFunction();
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
      <div>
        <Websocket url='http://localhost:8080/ws' topics={[`/topic/gamestatesummary/${this.props.game_summary.game_id}`]}
                   onMessage={(msg) => {
                     this.props.refreshGameSummaryFunction();
                   }}/>
        <NotYetStartedGame
          game_summary={this.props.game_summary}
          player_name={this.props.player_name}
          player_id={this.props.player_id}
          refreshSummaryFunction={this.props.refreshGameSummaryFunction}
          joinGameFunction = {() => this.joinGame()}
          startGameFunction = {() => this.startGame()}
        />
      </div>
    )
  }
}
